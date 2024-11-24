import heroImage from "@assets/carousel/futbolcrop.jpg";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { AboutAthenas } from "@components/about-athenas";
import { SignUpForm } from "@components/signup-form";
// biome-ignore lint/suspicious/noShadowRestrictedNames: This is a false positive
import { Map } from "@components/map";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const LandingPage = () => {
	const { theme } = useTheme();
	console.log(theme);
	const themeColor = theme === "dark" ? "secondary" : "primary";
	return (
		<div>
			<section
				id="home"
				className="relative h-screen bg-cover bg-center"
				style={{ backgroundImage: `url(${heroImage})` }}
			>
				<div className="absolute inset-0 bg-black opacity-50" />
				<div className="relative container mx-auto text-center text-white p-8">
					<h1 className="text-title mb-4">Unite al Club Athenas</h1>
					<p className="text-xl mb-6">
						Descubrí lo mejor del deporte y la comunidad.
					</p>
					<div className="flex items-center justify-center z-10">
						<Button color={themeColor} size="lg">
							<Link to="/home">Hacé click para saber más</Link>
						</Button>
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
				<div className="pb-6 md:pr-6 md:pb-0">
					<h2 className="text-3xl font-bold mb-6">Contactanos</h2>
					<p className="flex items-center gap-2">
						<MapIcon className="h-5 w-5 text-slate-500" /> Calle
						Falsa 123, Buenos Aires, Argentina
					</p>
					<p className="flex items-center gap-2">
						<PhoneIcon className="h-5 w-5 text-slate-500" />
						11 4321 1234
					</p>
					<p className="flex items-center gap-2">
						<EnvelopeIcon className="h-5 w-5 text-slate-500" />
						contacto@athenasclub.com
					</p>
				</div>
				<Map />
			</section>
		</div>
	);
};

export default LandingPage;
