import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
	style: ["normal", "italic"]
});

export const metadata: Metadata = {
	title: "Brand Name",
	description: "Store and its branches"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
