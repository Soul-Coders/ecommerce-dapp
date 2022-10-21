import { ProductCard } from './ProductCard';
// import { ChevronLeftIcon, ChevronRightIcon }from '@heroicons/react/24/outline'

const Row = ({ products }) => {
  return (
    <div className="space-y-0.5 md:space-y-2">
      {/* <ChevronLeftIcon className='absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'/> */}

      <div className="flex flex-nowrap overflow-scroll overscroll-x-contain scrollbar-hide gap-2 p-2 z-10 w-full">
        {products.map(({ id, img, name, description, price, rating }, i) => (
          <div
            className="basis-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 flex-shrink-0"
            key={i}
          >
            <ProductCard
              key={id}
              id={id}
              img={img}
              name={name}
              description={description}
              price={price}
              rating={rating}
            />
          </div>
        ))}
      </div>

      {/* <ChevronRightIcon className='absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'/> */}
    </div>
  );
};

export default Row;
