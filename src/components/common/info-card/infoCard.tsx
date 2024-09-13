import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { InfoCardProps } from "./types"; // Importa el tipo desde el archivo types.ts

export default function InfoCard({
  title,
  text,
  imageSrc,
  imageAlt,
  imageWidth = 600,
  imageHeight = 200,
  imageClassName = "rounded-lg",
  reverse = false,
}: InfoCardProps) {
  return (
    <Card className="border-violet-300">
      <CardHeader className="bg-violet-100">
        <h2 className="text-2xl font-bold text-violet-800">{title}</h2>
      </CardHeader>
      <CardBody
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center gap-4`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className={imageClassName}
        />
        <p className="text-black">{text}</p>
      </CardBody>
    </Card>
  );
}
