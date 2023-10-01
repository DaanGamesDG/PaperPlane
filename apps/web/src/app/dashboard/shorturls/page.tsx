import type React from "react";
import type { Metadata } from "next";
import { getAuthenticationState } from "../_lib/utils";
import { redirect } from "next/navigation";
import { ShortcutsTable } from "./ShortcutsTable";

export const metadata: Metadata = {
	title: "Shorturls - Paperplane",
	description: "An open-source customisable solution to storing files in the cloud. ✈️"
};

const Page: React.FC = async () => {
	const authenticationState = await getAuthenticationState();
	if (!authenticationState) redirect("/login");

	return (
		<>
			<div className="w-full">
				<h1 className="text-11 font-bold max-sm:text-center">Shorturls</h1>
			</div>
			<ShortcutsTable />
		</>
	);
};

export default Page;
