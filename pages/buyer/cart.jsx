import Page from '../../components/Page';
import { MiniProductCard } from '../../components/products/MiniProductCard';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { ConnectionContext } from '../../context/ConnectionContext';
import { useEffect, useState, useContext } from 'react';

const Cart = () => {
  const { getContract } = useContext(ConnectionContext);
  const [buyerProducts, setBuyerProducts] = useState([]);

  const fetchBuyerProducts = async () => {
    const contract = getContract();
    const products = await contract.getBuyerProducts();
    setBuyerProducts(products);
  };

  useEffect(() => {
    fetchBuyerProducts();
  }, [buyerProducts]);

  const products = [
    {
      img: '/product-1.jpg',
      name: 'Black fashion bag',
      price: '2000',
    },
    {
      img: '/product-2.jpg',
      name: 'Wood leather watch',
      price: '1000',
    },
    {
      img: '/product-3.jpg',
      name: 'Wireless headphones',
      price: '1500',
    },
    {
      img: '/product-4.jpg',
      name: 'Blue skate shoes',
      price: '800',
    },
    {
      img: '/product-5.jpg',
      name: 'Navy mens outerwear',
      price: '2000',
    },
    {
      img: '/product-6.jpg',
      name: 'Anchor leather bracelet',
      price: '500',
    },
  ];

  let TotalPrice = 0;
  function sum(item) {
    TotalPrice += parseInt(item.price);
  }
  buyerProducts.forEach(sum);
  return (
    <div>
      <Page name="My Cart">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row w-full px-3 py-5 mb-7 bg-dimmed-black rounded-md mt-2 md:px-5 xl:p-7">
            <div className="md:w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 ">
                {products.map(({ img, name, price }) => (
                  <MiniProductCard img={img} name={name} price={price} />
                ))}
                {/* {buyerProducts.map(({ id, img, name, description, price, rating }) => (
                    <MiniProductCard img={img} name={name} price={price} />
                  )
                )} */}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="md:w-60">
                <div className="flex items-center mt-5 md:mt-0 md:ml-10 h-8 rounded-md bg-gradient-to-br from-brand-red to-brand-purple md:w-48 ">
                  <input
                    type="text"
                    placeholder="Enter Promo code"
                    className="!outline-none text-[0.8em] md:text-xs lg:text-md w-11/12 h-full rounded-r-xl"
                  />
                  <ArrowRightIcon className="mr-1 md:mr-2 sm:ml-3 h-4 w-4 sm:inline md:w-6 md:h-6 cursor-pointer" />
                </div>
              </div>
              <div className="flex justify-between mt-2 md:ml-11">
                <label htmlFor="" className="text-xs ">
                  Total Amount :
                </label>
                <label htmlFor="" className="text-xs ">
                  {TotalPrice}
                </label>
              </div>
              <div className="mt-7 md:ml-11 md:mr-1">
                <button className="w-full text-sm md:mt-0 md:w-full md:h-8 lg:h-10 lg:text-md xl:text-lg bg-blue-800 rounded-md py-2 md:py-0">
                  CHECK OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Cart;
