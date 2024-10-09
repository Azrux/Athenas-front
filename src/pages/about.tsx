import athenasLogo from "@assets/athenas_logo.png";
import campPhoto from "@assets/camp.jpg";
import padelCourt from "@assets/canchapadel.jpg";
import historyPhoto from "@assets/fundacion2.jpeg";
import partyHall from "@assets/partyHall.jpg";
import healthyPhoto from "@assets/saludable.jpg";
import yogaPhoto from "@assets/yoga.jpg";
import BigInfoCard from "@common-components/big-info-card/bigInfoCard";
import InfoCard from "@common-components/info-card/infoCard";

import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { aboutUsTexts } from "@utils/about-page-texts";

export default function AboutUs() {
  return (
    <div className="container mx-auto py-12 px-4 bg-white text-black">
      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-violet-800/70 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {aboutUsTexts.title}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InfoCard
          title={aboutUsTexts.historyTitle}
          text={aboutUsTexts.historyText}
          imageSrc={historyPhoto}
          imageAlt="Fundación del Athenas Club"
          imageWidth={600}
          imageHeight={200}
          imageClassName="rounded-full"
        />
        <InfoCard
          title={aboutUsTexts.missionTitle}
          text={aboutUsTexts.missionText}
          imageSrc={healthyPhoto}
          imageAlt="Nuestra Misión"
          imageWidth={600}
          imageHeight={200}
          imageClassName="rounded-lg"
          reverse={true}
        />
        <BigInfoCard
          title={aboutUsTexts.facilitiesTitle}
          images={[
            { src: padelCourt, alt: "Cancha Padel", width: 400, height: 150 },
            {
              src: partyHall,
              alt: "Salón de Fiestas",
              width: 400,
              height: 150,
            },
          ]}
          listItems={aboutUsTexts.facilitiesList}
        />
        <BigInfoCard
          title={aboutUsTexts.activitiesTitle}
          images={[
            {
              src: yogaPhoto,
              alt: "Yoga en Athenas Club",
              width: 350,
              height: 200,
              className: "mb-4",
            },
            {
              src: campPhoto,
              alt: "Actividades en Athenas Club",
              width: 350,
              height: 200,
              className: "mb-4",
            },
          ]}
          buttons={aboutUsTexts.activitiesList}
        />
      </div>
      <Card className="mt-8 border-violet-300">
        <CardHeader className="bg-violet-100">
          <h2 className="text-2xl font-bold text-violet-800">
            {aboutUsTexts.joinUsTitle}
          </h2>
        </CardHeader>
        <CardBody className="flex flex-col md:flex-row items-center gap-4">
          <Image
            src={athenasLogo}
            alt="Comunidad Athenas Club"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <div>
            <p className="text-black mb-4">{aboutUsTexts.joinUsText}</p>
            <Button color="secondary" variant="shadow">
              {aboutUsTexts.membershipButton}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
