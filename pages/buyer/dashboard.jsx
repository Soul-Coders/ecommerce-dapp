import Page from '../../components/Page';
import List from '../../components/orders/List';
import orders from '../../pages/seller/orders/orders.json';
import Label from '../../components/Label';
import Link from 'next/link';
import { useContext } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';
import Row from '../../components/Row';

const products = [
  {
    img: '/product-1.jpg',
    name: 'Black fashion bag',
    description: 'test',
    price: '2000',
    id: '321341',
  },
  {
    img: '/product-2.jpg',
    name: 'Wood leather watch',
    description: 'test',
    price: '1000',
    id: '321342',
  },
  {
    img: '/product-3.jpg',
    name: 'Wireless headphones',
    description: 'test',
    price: '1500',
    id: '321343',
  },
  {
    img: '/product-4.jpg',
    name: 'Blue skate shoes',
    description: 'test',
    price: '800',
    id: '321344',
  },
  {
    img: '/product-5.jpg',
    name: 'Navy mens outerwear',
    description: 'test',
    price: '2000',
    id: '321345',
  },
  {
    img: '/product-6.jpg',
    name: 'Anchor leather bracelet',
    description: 'test',
    price: '500',
    id: '321346',
  },
];

const Dashboard = () => {
  const hrs = new Date().getHours();
  const greet =
    (hrs < 12 && 'Good morning') ||
    (hrs >= 12 && hrs <= 17 && 'Good afternoon') ||
    'Good evening';
  const { currentAccount } = useContext(ConnectionContext);

  return (
    <Page name={'Dashboard'}>
      {/* Greet User */}
      <div className="flex font-bold text-base md:text-2xl gap-1 items-center">
        <p>{greet}</p>
        <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-brand-purple to-brand-red">
          {(currentAccount.info.name &&
            currentAccount.info.name.split(' ')[0]) ||
            'Alex'}
        </h1>
        <p>!</p>
      </div>

      {/* You might be looking for */}
      <div className="flex justify-between">
        <h1 className="mt-4 mb-1 text-base font-bold md:text-xl">
          You might be looking for
        </h1>
        <Link
          href={'/buyer/products'}
          className="border text-sm font-semibold px-9 h-10 bg-green-500 rounded-md"
        >
          View All
        </Link>
      </div>
      <Row products={products} />

      {/* From your watchlist */}
      <h1 className="mt-4 mb-1 text-base font-bold md:text-xl">
        Your watchlist
      </h1>

      {/* Active orders / Orders */}
      <h1 className="mt-4 mb-1 text-base font-bold md:text-xl">
        Arriving Soon
      </h1>
      <List colnames={[]}>
        {orders.map(({ id, name, email, total, status, date }) => (
          <div key={id}>
            {/* Order ID */}
            <h3 className="font-medium text-sm uppercase sm:text-base">
              <span className="text-brand-purple">#</span>
              {id}
            </h3>

            {/* Customer Name */}
            <h2 className="font-light text-sm sm:text-base tracking-wide text-white/80">
              {name}
            </h2>

            {/* Customer Email */}
            <h2 className="font-light text-sm sm:text-base tracking-wide text-white/80">
              {email}
            </h2>

            {/* Total bill */}
            <h1 className="font-semibold text-xl mt-1">
              <span className="mr-1">₹</span>
              {total}
            </h1>

            {/* Order Status */}
            <Label status={status} />

            {/* Order Date */}
            <h2 className="font-light text-sm sm:text-base text-white/80">
              {date}
            </h2>
          </div>
        ))}
      </List>
    </Page>
  );
};

export default Dashboard;
