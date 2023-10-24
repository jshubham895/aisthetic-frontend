"use client";

import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { redirect } from "next/navigation";
import Loader from "../loader/Loader";
import setInterceptors from "@/utils/interceptor";
const AuthCheck = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				setInterceptors();
			} else {
				setUser(null);
			}
			setIsLoading(false);
		});
	}, []);

	if (!isLoading && !!user) {
		return <>{children}</>;
	} else if (isLoading) {
		return <Loader />;
	} else {
		redirect("/login");
	}
};

export default AuthCheck;
