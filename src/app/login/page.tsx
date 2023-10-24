"use client";

import styles from "./page.module.css";
import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";
import setInterceptors from "@/utils/interceptor";
import StoreManager from "@/managers/storeManager";

export default function Login() {
	const [name, setName] = useState<String>("");

	const router = useRouter();

	const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
		try {
			e.preventDefault();
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider);
			setInterceptors();
			router.push("/home");
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const getStoreName = async () => {
			const storeManager = new StoreManager();
			const storeName = await storeManager.getStoreName();
			setName(storeName);
		};
		getStoreName();
	}, []);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setInterceptors();
				router.push("/home");
			}
		});
	}, [router]);

	return (
		<div className={styles.login}>
			<p>{name}</p>
			<button className={styles.button} onClick={handleGoogleSignIn}>
				<div className={styles.img}>
					<Image
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
						alt="google-svg"
						width={24}
						height={24}
					/>
				</div>
				<div className={styles.text}>Sign In with Google</div>
			</button>
		</div>
	);
}
