import historyPhoto from "@assets/images.jpeg";

import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";

export default function AboutUs() {
  return (
    <div className="container mx-auto py-12 px-4 bg-white text-black">
      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-violet-800/70 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Sobre Athenas Club</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-violet-300">
          <CardHeader className="bg-violet-100">
            <h2 className="text-2xl font-bold text-violet-800">
              Nuestra Historia
            </h2>
          </CardHeader>
          <CardBody className="flex flex-col md:flex-row items-center gap-4">
            <Image
              src={historyPhoto}
              alt="Fundación del Athenas Club"
              width={600}
              height={200}
              className="rounded-full"
            />
            <p className="text-black">
              Fundado en 1985, Athenas Club ha sido un pilar en nuestra
              comunidad durante más de tres décadas. Comenzamos como un pequeño
              grupo de entusiastas del deporte y hemos crecido hasta
              convertirnos en un club integral que fomenta tanto la excelencia
              deportiva como la conexión social.
            </p>
          </CardBody>
        </Card>
        <Card className="border-violet-300">
          <CardHeader className="bg-violet-100">
            <h2 className="text-2xl font-bold text-violet-800">
              Nuestra Misión
            </h2>
          </CardHeader>
          <CardBody className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-black">
              En Athenas Club, nos dedicamos a promover un estilo de vida
              saludable, fomentar el espíritu deportivo y crear un sentido de
              comunidad. Creemos en el poder del deporte para unir a las
              personas y mejorar la calidad de vida de nuestros miembros.
            </p>
            <Image
              src={historyPhoto}
              alt="Miembros de Athenas Club"
              width={600}
              height={200}
              className="rounded-lg"
            />
          </CardBody>
        </Card>
        <Card className="border-violet-300">
          <CardHeader className="bg-violet-100">
            <h2 className="text-2xl font-bold text-violet-800">
              Nuestras Instalaciones
            </h2>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Image
                src={historyPhoto}
                alt="Piscina olímpica"
                width={400}
                height={150}
                className="rounded-lg"
              />
              <Image
                src={historyPhoto}
                alt="Canchas de tenis"
                width={400}
                height={150}
                className="rounded-lg"
              />
            </div>
            <ul className="list-disc list-inside text-black">
              <li>Canchas de tenis y pádel</li>
              <li>Piscina olímpica</li>
              <li>Gimnasio completamente equipado</li>
              <li>Salón de eventos sociales</li>
              <li>Restaurante y cafetería</li>
            </ul>
          </CardBody>
        </Card>
        <Card className="border-violet-300">
          <CardHeader className="bg-violet-100">
            <h2 className="text-2xl font-bold text-violet-800">
              Actividades y Programas
            </h2>
          </CardHeader>
          <CardBody>
            <Image
              src={historyPhoto}
              alt="Actividades en Athenas Club"
              width={400}
              height={200}
              className="rounded-lg mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {[
                "Clases de natación",
                "Torneos de tenis",
                "Yoga y pilates",
                "Eventos sociales",
                "Campamentos de verano",
                "Entrenamiento personal",
              ].map((activity) => (
                <Button key={activity} color="secondary" variant="flat">
                  {activity}
                </Button>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
      <Card className="mt-8 border-violet-300">
        <CardHeader className="bg-violet-100">
          <h2 className="text-2xl font-bold text-violet-800">
            Únete a Nuestra Comunidad
          </h2>
        </CardHeader>
        <CardBody className="flex flex-col md:flex-row items-center gap-4">
          <Image
            src={historyPhoto}
            alt="Comunidad Athenas Club"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <div>
            <p className="text-black mb-4">
              Ya sea que busques mejorar tu condición física, competir en
              deportes o simplemente disfrutar de un ambiente social agradable,
              Athenas Club tiene algo para ti. Únete a nosotros y sé parte de
              una comunidad vibrante y activa.
            </p>
            <Button color="secondary" variant="shadow">
              Conoce Más Sobre Membresías
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
