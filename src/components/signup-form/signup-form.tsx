const SignUpForm = () => {
	// TODO: Add functionality
	return (
		<section id="register" className="py-12 bg-gray-100">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold mb-6">Únete a Nuestro Club</h2>
				<form className="max-w-md mx-auto">
					<input
						type="text"
						placeholder="Nombre"
						className="block w-full p-3 mb-4 border border-gray-300 rounded"
					/>
					<input
						type="email"
						placeholder="Correo Electrónico"
						className="block w-full p-3 mb-4 border border-gray-300 rounded"
					/>
					<input
						type="tel"
						placeholder="Teléfono"
						className="block w-full p-3 mb-4 border border-gray-300 rounded"
					/>
					<button
						type="submit"
						className="bg-yellow-500 text-black px-6 py-3 rounded"
					>
						Regístrate Ahora
					</button>
				</form>
			</div>
		</section>
	);
};

export default SignUpForm;
