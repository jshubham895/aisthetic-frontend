"use client";

import AuthCheck from "@/components/authCheck/AuthCheck";

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return <AuthCheck>{children}</AuthCheck>;
}
