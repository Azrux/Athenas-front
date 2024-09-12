import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { InfoCardProps } from "./types";

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  text,
  images,
  list,
  buttons,
}) => {
  return (
    <Card className="border-violet-300">
      <CardHeader className="bg-violet-100">
        <h2 className="text-2xl font-bold text-violet-800">{title}</h2>
      </CardHeader>
      <CardBody>
        {images && (
          <div
            className={`grid grid-cols-${
              images.length === 2 ? 2 : 1
            } gap-4 mb-4`}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="rounded-lg"
              />
            ))}
          </div>
        )}
        {text && <p className="text-black">{text}</p>}
        {list && (
          <ul className="list-disc list-inside text-black">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {buttons && (
          <div className="flex flex-wrap gap-2">
            {buttons.map((button, index) => (
              <button key={index} className="btn bg-secondary text-white">
                {button}
              </button>
            ))}
          </div>
        )}
      </CardBody>
    </Card>
  );
};
