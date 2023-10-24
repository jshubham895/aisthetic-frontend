import axios from "axios";

const SERVER_URL = "http://localhost:4000";

export async function getStoreName() {
	const url = SERVER_URL + "/store";
	return new Promise((resolve, reject) => {
		axios
			.get(url)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
}
export async function getStoreDetails() {
	const url = SERVER_URL + "/store-details";
	return new Promise((resolve, reject) => {
		axios
			.get(url)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
}

export async function getAllBranches() {
	const url = SERVER_URL + "/branches";
	return new Promise((resolve, reject) => {
		axios
			.get(url)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
}

export async function getBranchDetails(id: string) {
	const url = SERVER_URL + `/branches/${id}`;
	return new Promise((resolve, reject) => {
		axios
			.get(url)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
}
