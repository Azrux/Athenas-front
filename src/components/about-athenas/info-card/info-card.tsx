import type { FC } from "react";
import type { InfoCardProps } from "./types";

const InfoCard: FC<InfoCardProps> = ({ title, description }) => {
	return (
		<div className="w-full sm:w-1/2 md:w-1/3 p-4">
			<div className="bg-white shadow-lg rounded-lg p-6 h-full">
				<div>
					<i className="fas fa-dumbbell text-4xl text-primary" />
				</div>
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-gray-600">{description}</p>
			</div>
		</div>
	);
};

export default InfoCard;
