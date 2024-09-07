import basketPhoto from "@assets/carousel/basquetcrop.jpg";
import footballPhoto from "@assets/carousel/futbolcrop.jpg";
import peoplePhoto from "@assets/carousel/gentecrop.jpg";
import { ProductCard } from "@common-components/product-card";
import Carousel from "@components/carousel";
import products from "@utils/products.json";

const Home = () => {
  return (
    <div className="w-full pb-3">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-secondary mb-4">
          ¡Bienvenido a Athenas Club!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Tu tienda online de productos del Club Athenas
        </p>
      </div>
      <Carousel
        images={[basketPhoto, footballPhoto, peoplePhoto]}
        classNameContainer="max-w-[1200px] mx-auto"
      />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          Destacados
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {products.map(
            ({ description, name, price, image, isPopular }) =>
              isPopular && (
                <ProductCard
                  key={`${name}-${price}`}
                  title={name}
                  description={description}
                  price={price}
                  image={image}
                  favorite={false}
                />
              )
          )}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-secondary mb-4">
          Novedades
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          {products.map(
            ({ description, name, price, image, isNew }) =>
              isNew && (
                <ProductCard
                  key={`${name}-${price}`}
                  title={name}
                  description={description}
                  price={price}
                  image={image}
                  favorite={false}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
