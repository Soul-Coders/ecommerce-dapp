import Page from '../../components/Page';
import { ProductCard } from '../../components/products/ProductCard';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/20/solid';
import { ConnectionContext } from '../../context/ConnectionContext';
import { useEffect, useState, useContext } from 'react';

const Cart = () => {
  {
    /* For Later Use
  const [buyerCart, setBuyerCart] = useState([]);
  const { getContract } = useContext(ConnectionContext);

  const fetchBuyerCart = async () => {
    const contract = getContract();
    const products = await contract.getBuyerCart();
    setBuyerCart(products);
  };

  useEffect(() => {
    fetchBuyerCart();
  }, [buyerCart]); */
  }

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
  products.forEach(sum);
  return (
    <div>
      <Page name="My Cart">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row w-full px-3 py-5 mb-7 bg-dimmed-black rounded-md mt-2 md:px-5 xl:p-7">
            <div className="md:w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 ">
                {products.map(({ img, name, price }) => (
                  <div className="bg-[#252525] rounded-xl p-3 w-full ">
                    <div className="flex flex-col items-center">
                      <div className="flex flex-row md:items-center md:w-full">
                        <div className="w-3/5 md:w-3/5">
                          <img
                            className="object-cover object-center w-4/5 aspect-1 rounded-xl"
                            src={img}
                            alt="product"
                          />
                        </div>
                        <div className="md:flex md:flex-col">
                          <h2 className="text-sm lg:text-md xl:text-lg font-medium text-white/70">
                            {name}
                          </h2>
                          <h3 className="text-sm lg:text-md xl:text-lg mt-1 font-bold">
                            ₹{price}
                          </h3>
                        </div>
                      </div>
                      <button className="w-24 mt-2 md:mt-4 lg:w-56 text-xs md:h-8 lg:h-10 lg:text-sm xl:text-md bg-red-500 rounded-md py-2 md:py-0">
                        Discard
                      </button>
                    </div>
                  </div>
                ))}
                {/* {buyerCart.map(
                  ({ productName, productImage, productPriceInr }) => (
                    <ProductCard
                      key={productName}
                      img={productImage}
                      name={productName}
                      price={productPriceInr}
                    />
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

{
  /* <div className="flex px-12 md:px-0 justify-between">
  <PlusCircleIcon className="w-1/3 md:w-1/12 md:ml-10 lg:ml-0 mt-2 md:mt-0" />
  <MinusCircleIcon className="w-1/3 md:w-1/12 md:ml-10 lg:ml-0 mt-2 md:mt-0" />
</div>  */
}
