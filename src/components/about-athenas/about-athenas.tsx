import { InfoCard } from "./info-card";
import { benefits, productReliability, testimonials } from "./utils";
import { CollapsibleSection } from "./collapsible-section";

const AboutAthenas = () => {
	return (
		<>
			<CollapsibleSection id="benefits" title="¿Por qué elegirnos?">
				{benefits.map(({ title, description }) => (
					<InfoCard
						key={title}
						title={title}
						description={description}
					/>
				))}
			</CollapsibleSection>

			<CollapsibleSection
				id="testimonials"
				title="Lo que dicen nuestros miembros"
				className="bg-gray-100"
			>
				{testimonials.map(({ title, description }) => (
					<InfoCard
						key={title}
						title={title}
						description={description}
					/>
				))}
			</CollapsibleSection>

			<CollapsibleSection id="products" title="Nuestros productos">
				{productReliability.map(({ title, description }) => (
					<InfoCard
						key={title}
						title={title}
						description={description}
					/>
				))}
			</CollapsibleSection>
		</>
	);
};

export default AboutAthenas;
