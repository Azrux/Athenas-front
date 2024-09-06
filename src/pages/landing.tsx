import heroImage from "@assets/carousel/futbolcrop.jpg";
import { Typography } from "@common-components/typography";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { AboutAthenas } from "@components/about-athenas";
import { SignUpForm } from "@components/signup-form";
// biome-ignore lint/suspicious/noShadowRestrictedNames: This is a false positive
import { Map } from "@components/map";

const LandingPage = () => {
	return (
		<div>
			<section
				id="home"
				className="relative h-screen bg-cover bg-center"
				style={{ backgroundImage: `url(${heroImage})` }}
			>
				<div className="absolute inset-0 bg-black opacity-50" />
				<div className="relative container mx-auto text-center text-white p-8">
					<h1 className="text-4xl font-bold mb-4">Unite al Club Athenas</h1>
					<p className="text-xl mb-6">
						Descubrí lo mejor del deporte y la comunidad.
					</p>
					<div className="flex items-center justify-center text-[#c0c0c0] z-10">
						<Typography>
							<Button
								color="secondary"
								className="shadow-md bg-[#471883] hover:bg-[#471883]"
								size="lg"
							>
								<Link to="/home">Hacé click para saber más</Link>
							</Button>
						</Typography>
					</div>
				</div>
			</section>

			{/* About Athenas section */}
			<AboutAthenas />

			{/* Signup Form */}
			<SignUpForm />

			{/* Contact section */}
			<section
				id="contact"
				className="py-6 flex flex-col md:flex-row justify-center items-center"
			>
				<div className="text-center pb-6 md:pr-6 md:pb-0">
					<h2 className="text-3xl font-bold mb-6">Contactanos</h2>
					<p>Dirección: Calle Falsa 123, Buenos Aires, Argentina</p>
					<p>Teléfono: 11 4321 1234</p>
					<p>Email: contacto@athenasclub.com</p>
				</div>
				<Map />
			</section>
		</div>
	);
};

export default LandingPage;
