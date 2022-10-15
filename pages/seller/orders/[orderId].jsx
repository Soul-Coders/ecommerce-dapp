import Page from '../../../components/Page';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  CalendarDaysIcon,
  PhoneIcon,
  NoSymbolIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid';
import Stat from '../../../components/Stat';
import orders from './orders';
import Label from '../../../components/Label';
import Credit from '../../../components/orders/Credit';

const OrderDetails = () => {
  const router = useRouter();
  const { orderId } = router.query;
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      setOrder(orders.find((order) => order.id === orderId));
    }
  }, [router.query.orderId, router.isReady]);

  return (
    <Page
      name={`Order Details`}
      options={
        <button className="text-sm max-w-[8rem] font-semibold px-9 h-10 bg-gradient-to-r from-brand-red to-brand-purple rounded-md">
          Invoice
        </button>
      }
    >
      {/* Order Id and Date */}
      <div className="bg-dimmed-black rounded-md p-3 flex flex-col text-brand-lavender">
        <div className="flex justify-between p-3">
          <h3 className="font-bold text-lg">
            <span className="text-brand-purple">#</span>
            {orderId}
          </h3>
          <div className="flex gap-2 px-2 text-lg font-bold">
            <CalendarDaysIcon className="w-5" />
            <h1>{(order && order.date) || ''}</h1>
          </div>
        </div>
      </div>

      {/* Slates */}
      <div className="mt-4 grid gap-5 mb-5 grid-cols-1 lg:grid-cols-3">
        <Stat
          title={'Customer'}
          imagePath={'/user.svg'}
          bgColor={'bg-blue-400/10'}
        >
          <h2 className="font-semibold text-sm sm:text-base tracking-wide text-white/80">
            {order.name}
          </h2>
          <h2 className="font-semibold text-sm sm:text-base tracking-wide text-white/80">
            {order.email}
          </h2>
          <h3 className="flex gap-1 font-semibold text-sm sm:text-base tracking-wide text-white/80">
            <PhoneIcon className="w-4" />
            <p>{order.phone}</p>
          </h3>
        </Stat>

        <Stat
          title={'Order Info'}
          imagePath={'/truck.svg'}
          bgColor={'bg-blue-400/10'}
        >
          <h3 className="font-medium text-sm sm:text-base">
            <span className="text-brand-lavender/70">Shipping: </span>
            {'FedEX Express'}
          </h3>
          <h3 className="font-medium text-sm sm:text-base">
            <span className="text-brand-lavender/70">Payment Mehod: </span>
            {'Metamask'}
          </h3>
          {(order.status && <Label status={order.status} />) || 'Loading'}
        </Stat>

        <Stat
          title={'Deliver To'}
          imagePath={'/pin.svg'}
          bgColor={'bg-blue-400/10'}
        >
          <h3 className="font-medium text-sm sm:text-base">
            <span className="text-brand-lavender/70">Address: </span>
            {order.address}
          </h3>
          <h3 className="font-medium text-sm sm:text-base">
            <span className="text-brand-lavender/70">City: </span>
            {order.city}
          </h3>
          <h3 className="font-medium text-sm sm:text-base">
            <span className="text-brand-lavender/70">Zip: </span>
            {order.zip}
          </h3>
        </Stat>
      </div>

      {/* Product Details */}
      <div className="flex flex-col lg:grid grid-cols-[60%_38%] grid-flow-col justify-between">
        <div>
          {(order.product && (
            <div className="bg-dimmed-black rounded-md p-3 flex flex-col justify-around md:flex-row text-lg font-semibold text-brand-lavender">
              <div className="flex justify-center">
                <img
                  src={order.product.img}
                  alt="Product Image"
                  className="w-96 rounded-md"
                />
              </div>

              {/* Product Stats */}
              <div className="p-1 text-green-400 flex flex-col justify-evenly">
                <h3 className="font-medium text-sm sm:text-base flex justify-between border p-2 rounded-md w-full">
                  <p className="text-brand-lavender/70">Quantity: </p>
                  <p>{order.product.qty}</p>
                </h3>
                <h3 className="font-medium text-sm sm:text-base flex justify-between border p-2 rounded-md w-full">
                  <p className="text-brand-lavender/70">Unit Price: </p>
                  <p>{order.product.unitPrice}</p>
                </h3>
                <h3 className="font-medium text-sm sm:text-base flex justify-between border p-2 rounded-md w-full">
                  <span className="text-brand-lavender/70">Total Price: </span>
                  {order.product.totalPrice}
                </h3>
                <h3 className="font-medium text-sm sm:text-base flex justify-between border p-2 rounded-md w-full">
                  <span className="text-brand-lavender/70">
                    Shipping Price:{' '}
                  </span>
                  {order.product.shippingPrice}
                </h3>
                <h3 className="font-medium text-sm sm:text-base flex justify-between gap-20 border p-2 rounded-md w-full">
                  <span className="text-brand-lavender/70">Grand Total: </span>
                  {order.product.totalPrice + order.product.shippingPrice}
                </h3>
              </div>
            </div>
          )) || <h3 className="text-xl">Loading</h3>}
        </div>

        {/* Credit Card  */}
        <div className="bg-dimmed-black p-6 rounded-md mt-4 lg:mt-0">
          {(order.txnHash && (
            <Credit
              name={order.name}
              txnHash={
                order.txnHash.slice(0, 10) + '...' + order.txnHash.slice(35)
              }
              paymentMethod={'/metamask.png'}
              method={'Transfer'}
              block={123456}
              value={'36 Ethers'}
            />
          )) ||
            'Loading'}
        </div>
      </div>
      {(order.status && order.status === 'pending' && (
        <div className="py-8 h-1 w-full flex gap-4 justify-end">
          <button className="text-sm font-semibold px-9 h-10 bg-green-700 rounded-md flex gap-3 items-center">
            <CheckCircleIcon className="w-4" />
            <p>Accept</p>
          </button>
          <button className="text-sm font-semibold px-9 h-10 bg-rose-700 rounded-md flex gap-3 items-center">
            <NoSymbolIcon className="w-4" />
            <p>Reject</p>
          </button>
        </div>
      )) ||
        ''}
    </Page>
  );
};

export default OrderDetails;
