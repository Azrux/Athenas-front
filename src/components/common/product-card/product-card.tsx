import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import type { ProductCardProps } from "./types";

const ProductCard: FC<ProductCardProps> = ({
  favorite,
  title,
  description,
  price,
  image,
  ...props
}) => {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="flex items-center w-[300px] h-[360px] px-2"
      shadow="md"
      isHoverable
      isFooterBlurred
      radius="sm"
      {...props}
    >
      <CardHeader className="block">
        <div className="title">{title}</div>
        <div className="caption">{description}</div>
      </CardHeader>

      <CardBody
        className="flex items-center justify-center border-1 rounded-lg overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HeartIcon
          className="absolute top-2 right-2 w-6 h-6 text-red-500 hover:cursor-pointer transition-all hover:w-7 hover:h-7 z-20"
          fill={isFavorite ? "red" : "none"}
          onClick={() => setIsFavorite(!isFavorite)}
          type="button"
        />
        <Image className="object-cover" src={image} width={200} />
        {isHovered && (
          <div className="absolute transition-opacity inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white z-10">
            <div>
              <Button color="secondary" className="hover:opacity-90">
                <Link to="/detail/:id">Más detalles</Link>
              </Button>
            </div>
          </div>
        )}
      </CardBody>

      <CardFooter className="flex justify-between">
        <div className="text-center font-semibold">{price}</div>
        {/* TODO: Agregar lógica para el carrito */}
        <ShoppingCartIcon
          className="absolute bottom-3 right-3 w-6 h-6 text-green-500 hover:cursor-pointer transition-all hover:w-7 hover:h-7"
          type="button"
        />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
