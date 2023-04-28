import Page from '../../components/Page';
import List from '../../components/orders/List';
import { useState, useEffect } from 'react';
import Label from '../../components/Label';
import Link from 'next/link';
import { useContext } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';
import ProductSlider from '../../components/products/ProductSlider';

const products = [
  {
    img: '/product-1.jpg',
    name: 'Black fashion bag',
    description: 'test',
    price: '2000',
    id: '321341',
    rating: 4,
  },
  {
    img: '/product-2.jpg',
    name: 'Wood leather watch',
    description: 'test',
    price: '1000',
    id: '321342',
    rating: 1.5,
  },
  {
    img: '/product-3.jpg',
    name: 'Wireless headphones',
    description: 'test',
    price: '1500',
    id: '321343',
    rating: 3.5,
  },
  {
    img: '/product-4.jpg',
    name: 'Blue skate shoes',
    description: 'test',
    price: '800',
    id: '321344',
    rating: 2.5,
  },
  {
    img: '/product-5.jpg',
    name: 'Navy mens outerwear',
    description: 'test',
    price: '2000',
    id: '321345',
    rating: 5,
  },
  {
    img: '/product-6.jpg',
    name: 'Anchor leather bracelet',
    description: 'test',
    price: '500',
    id: '321346',
    rating: 2.5,
  },
];

const Dashboard = () => {
  const { getContract } = useContext(ConnectionContext);
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    const contract = getContract();
    return await contract.getOrders();
  };
  useEffect(() => {
    getOrders().then((orders) => {
      setOrders(orders.slice(-5).reverse());
      console.log(orders, orders.slice(-5));
    });
  }, []);

  const { currentAccount } = useContext(ConnectionContext);

  const username =
    (currentAccount.info.name && currentAccount.info.name.split(' ')[0]) ||
    'Saud';
  return (
    <Page name={'Dashboard'} username={username}>
      {/* You may be looking for */}
      <div className="flex justify-between">
        <h1 className="mt-6 mb-1 text-base font-bold md:text-xl flex gap-1">
          {username}, you may like this!
        </h1>
        <div className="h-fit p-2 rounded-md bg-blue-700 cursor-pointer">
          <Link href={'/buyer/products'}>View All</Link>
        </div>
      </div>
      <ProductSlider products={products} />{' '}
      {/* fetchSellerProducts={fetchSellerProducts} /> */}
      {/* From your watchlist */}
      <h1 className="mt-4 mb-1 text-base font-bold md:text-xl">
        Your watchlist
      </h1>
      <ProductSlider products={products} />{' '}
      {/* fetchSellerProducts={fetchSellerProducts} /> */}
      {/* Active orders / Orders */}
      <h1 className="mt-4 mb-1 text-base font-bold md:text-xl">
        Arriving Soon
      </h1>
      <div className="flex flex-col">
        <List
          colnames={[]}
          ordersFor={'buyer'}
          align={'grid grid-cols-[15%_25%_25%_20%_15%]'}
          ids={orders?.map(({ id }) => id)}
        >
          {orders?.map(({ id, product, status, date }) => (
              <div key={id}>
                {/* Order Image */}
                <img
                  src={product?.productGallery[0].split('|')[1]}
                  alt="product image"
                  className="w-16 lg:w-32 rounded-md"
                />
                {/* Customer Name */}
                <h2 className="font-light text-sm sm:text-base lg:text-lg tracking-wide text-white/80">
                  {product.productName}
                </h2>
                {/* Total bill */}
                <h1 className="font-semibold text-xl mt-1">
                  <span className="mr-1">₹</span>
                  {product.productPriceInr}
                </h1>
                <Label status={status} />
                {/* Order Date */}
                <h2 className="font-light text-sm sm:text-base lg:text-lg text-white/80">
                  {date}
                </h2>
              </div>
            ))}
        </List>
      </div>
    </Page>
  );
};

export default Dashboard;
