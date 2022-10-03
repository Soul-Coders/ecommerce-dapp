import Page from '../../components/Page';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { ProductCard } from '../../components/products/ProductCard';

const Products = () => {
  const products = [
    {
      img: '/product-1.png',
      name: 'Bell & Ross Nightum',
      price: '5000',
    },
    {
      img: '/product-2.png',
      name: 'Bell & Ross Nightum',
      price: '5000',
    },
    {
      img: '/product-3.png',
      name: 'Bell & Ross Nightum',
      price: '5000',
    },
    {
      img: '/product-4.png',
      name: 'Bell & Ross Nightum',
      price: '5000',
    },
    {
      img: '/product-5.png',
      name: 'Bell & Ross Nightum',
      price: '5000',
    },
    {
      img: '/product-6.png',
      name: 'Bell & Ross Nightum',
      price: '5000',
    },
  ];

  return (
    <div>
      <Page>
        <div className="w-full px-3 py-5 mb-7 bg-dimmed-black rounded-md mt-2 md:px-5 xl:p-7">
          <div className="flex gap-10 justify-between items-center border-b border-white/10 pb-5 md:pb-7">
            <input className="" type="text" placeholder="Search" />
            <select
              id="status"
              className="w-fit cursor-pointer text-white/60 hidden md:block"
              defaultValue={'Status'}
            >
              <option value="Status">Status</option>
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="NA">Not Available</option>
            </select>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {products.map(({ img, name, price }) => (
              <ProductCard key={img} img={img} name={name} price={price} />
            ))}
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Products;
