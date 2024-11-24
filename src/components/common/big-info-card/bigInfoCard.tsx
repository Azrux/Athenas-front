import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { BigInfoCardProps } from "./types";

/**
 * BigInfoCard component that displays a card with a header, a set of images, an optional list, and buttons.
 *
 * @param {BigInfoCardProps} props - The properties for the BigInfoCard component.
 * @param {string} props.title - The title to display in the card header.
 * @param {Array<{ src: string, alt: string, width: number, height: number, className?: string }>} props.images - An array of image objects to display inside the card. Each image has a `src`, `alt`, `width`, and `height` attributes, and an optional `className`.
 * @param {string[]} [props.listItems] - An optional array of list items to display as a bulleted list inside the card.
 * @param {string[]} [props.buttons] - An optional array of button labels to display at the bottom of the card.
 *
 * @returns {JSX.Element} A card component that displays a title, images, list items, and buttons.
 */

export default function BigInfoCard({
  title,
  images,
  listItems,
  buttons,
}: BigInfoCardProps) {
  return (
    <Card className="border-violet-300">
      <CardHeader className="bg-violet-100">
        <h2 className="text-2xl font-bold text-violet-800">{title}</h2>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              className={image.className || "rounded-lg"}
            />
          ))}
        </div>
        {listItems && (
          <ul className="list-disc list-inside text-black">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {buttons && (
          <div className="flex flex-wrap gap-2 flex-col sm:flex-row">
            {buttons.map((button, index) => (
              <Button key={index} color="secondary" variant="flat">
                {button}
              </Button>
            ))}
          </div>
        )}
      </CardBody>
    </Card>
  );
}
