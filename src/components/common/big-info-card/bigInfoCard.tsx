import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { BigInfoCardProps } from "./types";

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
              height={image.height}
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
          <div className="flex flex-wrap gap-2">
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
