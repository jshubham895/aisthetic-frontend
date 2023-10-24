"use client";

import Loader from "@/components/loader/Loader";
import React, { useEffect } from "react";
import { auth } from "../../../firebase";
import { useRouter } from "next/navigation";

const Logout = () => {
	const router = useRouter();

	useEffect(() => {
		const logout = async () => {
			await auth.signOut();
			router.push("/login");
		};
		logout();
	}, [router]);

	return <Loader />;
};

export default Logout;
