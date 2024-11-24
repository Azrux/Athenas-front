import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { InfoCardProps } from "./types";

/**
 * InfoCard component that displays a card with a header, an image, and text content.
 * It supports optional image positioning (reversed or standard).
 *
 * @param {InfoCardProps} props - The properties for the InfoCard component.
 * @param {string} props.title - The title to display in the card header.
 * @param {string} props.text - The text content to display inside the card body.
 * @param {string} props.imageSrc - The source URL for the image.
 * @param {string} props.imageAlt - The alternative text for the image.
 * @param {number} [props.imageWidth=600] - The width of the image in pixels. Defaults to 600.
 * @param {number} [props.imageHeight=200] - The height of the image in pixels. Defaults to 200.
 * @param {string} [props.imageClassName="rounded-lg"] - The optional CSS class for styling the image. Defaults to "rounded-lg".
 * @param {boolean} [props.reverse=false] - If true, the image and text will be reversed in order (image on the right, text on the left).
 *
 * @returns {JSX.Element} A card component displaying a title, an image, and accompanying text, with optional reversed layout.
 */

export default function InfoCard({
  title,
  text,
  imageSrc,
  imageAlt,
  imageWidth = 600,
  imageClassName = "rounded-lg",
  reverse = false,
}: InfoCardProps) {
  return (
    <Card className="border-violet-300">
      <CardHeader className="bg-violet-100">
        <h2 className="text-2xl font-bold text-violet-800">{title}</h2>
      </CardHeader>
      <CardBody
        className={`flex flex-col lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        } items-center gap-4`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          className={imageClassName}
        />
        <p className="text-black">{text}</p>
      </CardBody>
    </Card>
  );
}
