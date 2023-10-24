import React, { MouseEventHandler } from "react";
import "./styles.css";
import StoreTimings from "../storeTimings/StoreTimings";
import { branchDetails } from "@/interfaces/interface";

const DetailComponent = ({
	onClick = () => {},
	detailed = false,
	branchDetails
}: {
	onClick?: MouseEventHandler<HTMLDivElement>;
	detailed?: boolean;
	branchDetails: branchDetails;
}) => {
	const {
		name,
		description,
		address: { street, state, country },
		phone,
		email,
		timings,
		storeStatus
	} = branchDetails;

	return (
		<div className="detail-container">
			<div className="details">
				<div className="detail-header" onClick={onClick}>
					{name}
				</div>
				{detailed ? <div className="detail-address">{description}</div> : null}
				<div className={`detail-timings ${!detailed ? "detail" : ""}`}>
					<div
						style={{ gap: "16px", display: "flex", flexDirection: "column" }}
					>
						{detailed ? <div> Contact Details </div> : null}
						<div className="detail-address">
							<p>{street}</p>
							<p>{state}</p>
							<p>{country}</p>
						</div>
						<div className="detail-contact">
							<a href={`tel:${phone}`}>{phone}</a>
							<a href={`mailto:${email}`}>{email}</a>{" "}
						</div>
					</div>
					<div>
						<StoreTimings storeStatus={storeStatus} timings={timings} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailComponent;
