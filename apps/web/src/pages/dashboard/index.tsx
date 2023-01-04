import { DashboardNavbar } from "@paperplane/navbar";
import { getCircleColor } from "@paperplane/utils";
import type { NextPage } from "next";
import { Circle } from "rc-progress";

const Dashboard: NextPage = () => {
	const storagePercentage = 10;

	return (
		<>
			<DashboardNavbar />
			<div className="pt-24">
				<div className="pt-24 flex flex-col justify-center items-center max-md:pt-8">
					<div className="max-w-[1090px] h-80 flex justify-between items-center gap-8 px-2 max-md:flex-col max-md:h-auto">
						<div className="bg-main rounded-xl flex flex-col justify-center items-center gap-7 h-full min-w-[16rem] max-md:w-full max-md:py-4">
							<h1 className="text-lg">Storage Usage</h1>
							<div className="relative h-40 w-40">
								<Circle
									percent={storagePercentage}
									strokeWidth={8}
									strokeLinecap="butt"
									trailColor="rgba(0,0,0,0)"
									strokeColor={getCircleColor(storagePercentage)}
								/>
								<p className="absolute text-3xl left-0 top-0 right-0 text-center translate-y-3/4">{storagePercentage}%</p>
							</div>
							<p>
								<strong>7.7</strong> GB out of <strong>10.0</strong> GB used
							</p>
						</div>
						<div className="bg-main p-8 rounded-xl h-full">
							<h1 className="text-xl">Statistics</h1>
							<div className="flex flex-wrap gap-x-16 gap-y-4 mt-4">
								<div>
									<h2 className="text-lg">Files</h2>
									<p className="text-4xl">1528</p>
								</div>
								<div>
									<h2 className="text-lg">Shorturls</h2>
									<p className="text-4xl">38</p>
								</div>
								<div>
									<h2 className="text-lg">Total</h2>
									<p className="text-4xl">1566</p>
								</div>
								<div>
									<h2 className="text-lg">Version</h2>
									<p className="text-4xl">4.0.0</p>
								</div>
							</div>
						</div>
					</div>
					<div className="max-w-[1090px]">audit logs</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
