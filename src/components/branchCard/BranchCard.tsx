import React, { MouseEventHandler } from "react";
import ImageComponent from "../imageComponent/ImageComponent";
import DetailComponent from "../detailComponent/DetailComponent";
import "./styles.css";
import { branchDetails } from "@/interfaces/interface";

const BranchCard = ({
	onClick = () => {},
	detailed = false,
	branchDetails
}: {
	onClick?: MouseEventHandler<HTMLDivElement>;
	detailed?: boolean;
	branchDetails: branchDetails;
}) => {
	return (
		<div className="branch-card">
			<ImageComponent
				onClick={onClick}
				url={branchDetails.imageUrl}
				name={branchDetails.name}
			/>
			<DetailComponent
				branchDetails={branchDetails}
				detailed={detailed}
				onClick={onClick}
			/>
		</div>
	);
};

export default BranchCard;
