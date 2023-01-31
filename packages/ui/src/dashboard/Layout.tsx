import { DashboardNavbar } from "@paperplane/navbar";
import type React from "react";

interface Props {
	className?: string;
	toastInfo: (str: string) => void;
}

export const DashboardLayout: React.FC<React.PropsWithChildren<Props>> = ({ children, toastInfo, className }) => {
	return (
		<>
			<DashboardNavbar toastInfo={toastInfo} />
			<div className="pt-24 grid place-items-center">
				<div className={`p-24 flex flex-col justify-center items-center gap-y-8 max-md:pt-8 max-w-[1040px] w-full px-2 ${className}`}>
					{children}
				</div>
			</div>
		</>
	);
};
