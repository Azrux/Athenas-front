import type { FC } from "react";
import type { InfoCardProps } from "./types";
import { twMerge } from "tailwind-merge";

const InfoCard: FC<InfoCardProps> = ({
	title,
	description,
	cardsClassName,
}) => {
	return (
		<div className="w-full sm:w-1/2 md:w-1/3 p-4">
			<div
				className={twMerge(
					"bg-background-secondary shadow-lg rounded-lg p-6 h-full",
					cardsClassName,
				)}
			>
				<div>
					<i className="fas fa-dumbbell text-4xl text-default" />
				</div>
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-default">{description}</p>
			</div>
		</div>
	);
};

export default InfoCard;
