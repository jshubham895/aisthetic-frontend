import {
	branchDetails,
	branchDetailsResponse,
	dayInfo,
	timings
} from "@/interfaces/interface";
import {
	getAllBranches,
	getBranchDetails,
	getStoreDetails,
	getStoreName
} from "@/services/storeService";
import moment, { Moment } from "moment";

export default class StoreManager {
	async getStoreName() {
		const res: any = await getStoreName();
		return res.data;
	}

	async getStoreDetails() {
		const res: any = await getStoreDetails();
		const { name, email, phone } = res.data;
		return { name, email, phone };
	}

	isTomorrow(day: Moment) {
		const tomorrow = moment().add(1, "d");
		return moment(day).isSame(tomorrow);
	}

	formatTime(time: string) {
		return moment(time, "HH:mm").format("h:mm A");
	}

	formatOpenHours(dayInfo: dayInfo) {
		return `${this.formatTime(dayInfo.open)} - ${this.formatTime(
			dayInfo.close
		)}`;
	}

	getStoreStatus(storeTimings: any) {
		debugger;
		const currentTime = moment();
		const currentDay = moment().format("dddd");

		const todayTiming = storeTimings[currentDay.toLowerCase()];

		if (
			!todayTiming ||
			todayTiming.closed ||
			currentTime.isAfter(moment(todayTiming.close, "HH:mm"))
		) {
			let nextDate = moment().add(1, "d");
			let nextDay = moment(nextDate).format("dddd").toLowerCase();
			while (!storeTimings[nextDay] || storeTimings[nextDay].closed) {
				nextDate = moment(nextDate).add(1, "d");
				nextDay = moment(nextDate).format("dddd").toLowerCase();
			}

			const nextDayTiming = storeTimings[nextDay];

			return `Opens ${
				this.isTomorrow(nextDate)
					? "Tomorrow"
					: `${moment(nextDate).format("ddd")}`
			}  at ${nextDayTiming.open}`;
		} else {
			const openTime = moment(todayTiming.open, "HH:mm");
			const closeTime = moment(todayTiming.close, "HH:mm");

			if (currentTime.isBetween(openTime, closeTime)) {
				return `Open - Closes at ${this.formatTime(todayTiming.close)}`;
			} else {
				return `Opens at ${this.formatTime(todayTiming.open)}`;
			}
		}
	}

	formatTimings(timings: any) {
		const daysOfWeek = [
			"monday",
			"tuesday",
			"wednesday",
			"thursday",
			"friday",
			"saturday",
			"sunday"
		];

		const newTimings: timings[] = [];
		daysOfWeek.forEach((day: string) => {
			const dayInfo = timings[day];
			const capatalizeFirstWord = day.charAt(0).toUpperCase() + day.slice(1);
			const dayTimings = dayInfo?.closed
				? "Closed"
				: this.formatOpenHours(dayInfo);

			newTimings.push({
				day: day,
				formattedDay: capatalizeFirstWord,
				timing: dayTimings
			});
		});
		return newTimings;
	}

	formatBranchData(branch: branchDetailsResponse) {
		return {
			id: branch._id,
			name: branch.branchName,
			description: branch.description,
			email: branch.email,
			imageUrl:
				branch.imageUrl ??
				"https://firebasestorage.googleapis.com/v0/b/aisthetic-task.appspot.com/o/storefront.jpeg?alt=media",
			timings: this.formatTimings(branch.timings),
			storeStatus: this.getStoreStatus(branch.timings),
			address: branch.address,
			phone: branch.phone
		};
	}

	async getAllBranchesData() {
		const res: any = await getAllBranches();
		const branchData = res.data.map((branch: any) =>
			this.formatBranchData(branch)
		);
		return branchData;
	}

	async getBranchDetails(id: string) {
		const res: any = await getBranchDetails(id);
		return this.formatBranchData(res.data);
	}
}
