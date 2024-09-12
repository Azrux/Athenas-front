import { type FC, useState } from "react";
import type { CollapsibleSectionProps } from "./types";
import {
	ChevronDoubleDownIcon,
	ChevronDoubleUpIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";

const CollapsibleSection: FC<CollapsibleSectionProps> = ({
	id,
	title,
	children,
	className,
}) => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	const handleKeyDown = (
		event: React.KeyboardEvent<HTMLDivElement | HTMLButtonElement>,
	) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			toggleVisibility();
		}
	};

	return (
		<section id={id} className={`${className} py-6`}>
			<div className="mx-auto text-center">
				<h2
					className="md:mb-6 cursor-pointer items-center justify-center"
					onKeyDown={handleKeyDown}
					onClick={toggleVisibility}
					aria-expanded={isVisible}
					aria-controls={`${id}-content`}
				>
					<Button
						className="w-full h-full flex flex-col md:flex-row text-wrap text-2xl font-semibold ml-3 bg-transparent"
						onClick={toggleVisibility}
						onKeyDown={handleKeyDown}
						disableRipple={true}
					>
						{title}{" "}
						{isVisible ? (
							<ChevronDoubleUpIcon className="h-5 w-5" />
						) : (
							<ChevronDoubleDownIcon className="h-5 w-5" />
						)}
					</Button>
				</h2>
				{isVisible && (
					<div
						id={`${id}-content`}
						className="flex flex-wrap justify-center gap-8"
					>
						{children}
					</div>
				)}
			</div>
		</section>
	);
};

export default CollapsibleSection;
