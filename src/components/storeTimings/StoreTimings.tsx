import React, { useState } from "react";
import "./styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { timings } from "@/interfaces/interface";
import moment from "moment";

const StoreTimings = ({
	storeStatus,
	timings
}: {
	storeStatus: string;
	timings: timings[];
}) => {
	const [showTimings, setShowTimings] = useState(false);

	const toggleTimings = () => {
		setShowTimings(!showTimings);
	};

	const currentDay = moment().format("dddd").toLowerCase();

	return (
		<div>
			<div onClick={toggleTimings} className="store-text">
				<div>{storeStatus}</div>
				<div className="store-icon">
					{showTimings ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
				</div>
			</div>
			<div className={`store-timings ${showTimings ? "visible" : ""}`}>
				{timings.map((timing, idx) => {
					return (
						<div
							key={idx}
							className={timing.day === currentDay ? "hightlight-today" : ""}
						>
							<div>{timing.formattedDay}</div>
							<div>{timing.timing}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default StoreTimings;
