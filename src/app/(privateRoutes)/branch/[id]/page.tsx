"use client";

import BranchCard from "@/components/branchCard/BranchCard";
import Header from "@/components/header/Header";
import { branchDetails } from "@/interfaces/interface";
import StoreManager from "@/managers/storeManager";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Home = ({ params }: { params: { id: string } }) => {
	const [branchData, setBranchData] = useState<branchDetails>();

	useEffect(() => {
		const brachDetails = async () => {
			const storeManager = new StoreManager();
			const branchDetails: branchDetails = await storeManager.getBranchDetails(
				params.id
			);
			setBranchData(branchDetails);
		};
		brachDetails();
	}, [params.id]);

	return (
		<div>
			<Header homePage={false} />
			{branchData ? (
				<BranchCard branchDetails={branchData} detailed={true} />
			) : (
				<div>No data found</div>
			)}
		</div>
	);
};

export default Home;
