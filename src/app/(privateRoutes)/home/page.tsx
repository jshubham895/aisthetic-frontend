"use client";

import BranchCard from "@/components/branchCard/BranchCard";
import Header from "@/components/header/Header";
import { branchDetails, storeDetails } from "@/interfaces/interface";
import StoreManager from "@/managers/storeManager";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Fade = require("react-reveal/Fade");

const Home = () => {
	const [branches, setBranches] = useState<any>([]);
	const [storeContactDetails, setStoreContactDetails] = useState<any>([]);
	const router = useRouter();

	useEffect(() => {
		const getBranchesData = async () => {
			const storeManager = new StoreManager();
			const data: any[] = await storeManager.getAllBranchesData();
			const storeContactDetails: storeDetails =
				await storeManager.getStoreDetails();
			setStoreContactDetails(storeContactDetails);
			setBranches(data);
		};
		getBranchesData();
	}, []);

	return (
		<div>
			<Header homePage contactDetails={storeContactDetails} />
			{branches.map((branch: branchDetails, idx: number) => {
				return (
					<Fade key={idx} bottom>
						<BranchCard
							branchDetails={branch}
							onClick={() => {
								router.push(`/branch/${branch.id}`);
							}}
						/>
					</Fade>
				);
			})}
		</div>
	);
};

export default Home;
