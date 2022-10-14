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
          <p className="font-bold text-lg">#{orderId}</p>
          <div className="flex gap-2 px-2 text-lg font-bold">
            <CalendarDaysIcon className="w-5" />
            <h1>{order.date}</h1>
          </div>
        </div>
      </div>

      {/* Slates */}
      <div className="mt-4 grid gap-5 mb-5 grid-cols-1 md:grid-cols-3">
        <Stat
          title={'Customer'}
          imagePath={'/user.svg'}
          bgColor={'bg-blue-400/10'}
        >
          <p className="text-base md:text-lg">{order.name}</p>
          <p className="text-sm md:text-base py-2">{order.email}</p>
          <div className="flex">
            <PhoneIcon className="w-4" />
            <p className="text-sm md:text-base">{order.phone}</p>
          </div>
        </Stat>

        <Stat
          title={'Order Info'}
          imagePath={'/truck.svg'}
          bgColor={'bg-blue-400/10'}
        >
          <div className="flex justify-between gap-2">
            <p className="text-md md:text-base font-semibold">Shipping:</p>
            <p className="text-md md:text-base">{'FedX Express'}</p>
          </div>
          <div className="flex justify-between gap-2">
            <p className="text-md md:text-base font-semibold">
              Payment Method:
            </p>
            <p className="text-md md:text-base">{'Metamask'}</p>
          </div>
          {(order.status && <Label status={order.status} />) || 'Loading'}
        </Stat>

        <Stat
          title={'Deliver To'}
          imagePath={'/pin.svg'}
          bgColor={'bg-blue-400/10'}
        >
          <div className="flex justify-between gap-2">
            <p className="text-md md:text-base font-semibold ">Address:</p>
            <p className="text-md md:text-base">{order.address}</p>
          </div>
          <div className="flex justify-between gap-2">
            <p className="text-md md:text-base font-semibold ">City:</p>
            <p className="text-md md:text-base">{order.city}</p>
          </div>
          <div className="flex justify-between gap-2">
            <p className="text-md md:text-base font-semibold ">Zip:</p>
            <p className="text-md md:text-base">{order.zip}</p>
          </div>
        </Stat>
      </div>

      {/* Product List */}
      <div className="flex flex-col lg:grid grid-cols-[60%_38%] grid-flow-col justify-between">
        <div>
          {(order.product && (
            <div className="bg-dimmed-black rounded-md p-3 flex flex-col md:flex-row gap-5 text-lg font-semibold text-brand-lavender">
              <div className="flex justify-center">
                <img
                  src={order.product.img}
                  alt="Product Image"
                  className="w-96 rounded-md"
                />
              </div>
              <div className="p-3 md:pt-12">
                <div className="flex justify-between gap-5">
                  <p>Quantity:</p>
                  <p>{order.product.qty}</p>
                </div>
                <div className="flex justify-between gap-5">
                  <p>Unit Price:</p>
                  <p>${order.product.unitPrice}</p>
                </div>
                <div className="flex justify-between gap-5">
                  <p>Total Price:</p>
                  <p>${order.product.totalPrice}</p>
                </div>
                <div className="flex justify-between gap-5">
                  <p>Shipping Price:</p>
                  <p>${order.product.shippingPrice}</p>
                </div>

                <div className="flex justify-between gap-5">
                  <p>Grand Total:</p>
                  <p>
                    ${order.product.totalPrice + order.product.shippingPrice}
                  </p>
                </div>
              </div>
            </div>
          )) || <h3 className="text-xl">Loading</h3>}
        </div>

        {/* Credit Card  */}
        <div className="bg-dimmed-black rounded-md p-12 mt-4 lg:mt-0">
          <h1 className="text-lg font-bold">Payment Info</h1>
          <div className="flex justify-between gap-5">
            <p>Wallet Address</p>
            {(order.product && (
              <p>{`${order.product.buyerWallet.slice(
                0,
                5
              )}...${order.product.buyerWallet.slice(-10)}`}</p>
            )) || <h3>Loading</h3>}
          </div>
        </div>
      </div>
      {(order.status && order.status !== 'delivered' && (
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
