import Page from '../../../components/Page';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
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
import { ConnectionContext } from '../../../context/ConnectionContext';

const OrderDetails = () => {
  const { getContract } = useContext(ConnectionContext);

  const router = useRouter();
  const { orderId } = router.query;
  const [order, setOrder] = useState([]);
  const getOrderDetails = async () => {
    const contract = getContract();
    return await contract.getOrder(orderId);
  };

  useEffect(() => {
    router.isReady &&
      getOrderDetails().then((order) => {
        setOrder(order);
      });
  }, [orderId, router.isReady]);

  return (
    <Page name={`Order Details`}>
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
            {order?.buyer?.name}
          </h2>
          <h2 className="font-semibold text-sm sm:text-base tracking-wide text-white/80">
            {order?.buyer?.email}
          </h2>
          <h3 className="flex gap-1 font-semibold text-sm sm:text-base tracking-wide text-white/80">
            <PhoneIcon className="w-4" />
            <p>{order?.buyer?.phone}</p>
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
            {order?.buyer?.addr}
          </h3>
          <h3 className="font-medium text-sm sm:text-base">
            <span className="text-brand-lavender/70">City: </span>
            {order?.buyer?.city}
          </h3>
          <h3 className="font-medium text-sm sm:text-base">
            <span className="text-brand-lavender/70">Zip: </span>
            {order?.buyer?.pinCode}
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
                  src={order.product.productGallery[0].split('|')[1]}
                  alt="Product Image"
                  className="w-96 rounded-md"
                />
              </div>

              {/* Product Stats */}
              <div className="p-1 text-green-400 flex flex-col justify-evenly">
                <h3 className="font-medium text-sm sm:text-base flex justify-between p-2">
                  <p className="text-brand-lavender/70">Quantity: </p>
                  <p>{order.qty.toNumber()}</p>
                </h3>
                <h3 className="font-medium text-sm sm:text-base flex justify-between p-2">
                  <p className="text-brand-lavender/70">Unit Price: </p>
                  <p>{order.product.productPriceInr}</p>
                </h3>
                <h3 className="font-medium text-sm sm:text-base flex justify-between p-2">
                  <span className="text-brand-lavender/70">Total Price: </span>
                  {parseInt(order?.product?.productPriceInr) *
                    order.qty.toNumber()}
                </h3>
                <h3 className="font-medium text-sm sm:text-base flex justify-between  p-2">
                  <span className="text-brand-lavender/70">
                    Shipping Price:{' '}
                  </span>
                  {order?.shippingPriceEth.toNumber()}
                </h3>
                <h3 className="font-medium text-sm sm:text-base flex justify-between gap-20 p-2">
                  <span className="text-brand-lavender/70">Grand Total: </span>
                  {parseInt(order?.product?.productPriceInr) *
                    order?.qty.toNumber() +
                    order?.shippingPriceEth.toNumber()}
                </h3>
              </div>
            </div>
          )) || <h3 className="text-xl">Loading</h3>}
        </div>

        {/* Credit Card  */}
        <div className="bg-dimmed-black p-6 rounded-md mt-4 lg:mt-0">
          {(order && (
            <Credit
              name={order?.buyer?.name}
              txnHash={order.id}
              paymentMethod={'/icon.svg'}
              method={'Transfer'}
              block={123456}
              value={'36 Ethers'}
            />
          )) ||
            'Loading'}
        </div>
      </div>
    </Page>
  );
};

export default OrderDetails;
