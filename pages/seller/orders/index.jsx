import Page from '../../../components/Page';
import Label from '../../../components/Label';
import List from '../../../components/orders/List';
import orders from './orders.json';
import { useContext, useEffect, useState } from 'react';
import { ConnectionContext } from '../../../context/ConnectionContext';

const Orders = () => {
  const [sellerOrders, setSellerOrders] = useState([]);
  const { getContract } = useContext(ConnectionContext);

  const fetchSellerOrders = async () => {
    const contract = getContract();
    const orders = await contract.getSellerOrders();
    setSellerOrders(orders);
    console.log(orders);
  };

  useEffect(() => {
    fetchSellerOrders();
  }, []);

  const colnames = ['ID', 'Name', 'Email', 'Total', 'Status', 'Date'];
  return (
    <div>
      <Page
        name="Orders"
        options={
          <select
            id="status"
            className="pr-1 bg-dimmed-black w-fit h-fit cursor-pointer text-white  !outline-none font-semibold"
          >
            <option value="All" defaultChecked>
              All
            </option>
            <option value="Active">Active</option>
            <option value="NA">Not Available</option>
          </select>
        }
      >
        <List
          ordersFor={'seller'}
          colnames={colnames}
          align={'grid grid-cols-[10%_22%_30%_15%_10%_13%_]'}
          ids={sellerOrders?.map(({ id }) => id)}
        >
          {sellerOrders.map(({ id, buyer, product, status, date, qty }) => (
            <div key={id}>
              {/* Order ID */}
              <h3 className="font-medium text-sm uppercase sm:text-base">
                <span className="text-brand-purple">#</span>
                {id}
              </h3>

              {/* Customer Name */}
              <h2 className="font-light text-sm sm:text-base tracking-wide text-white/80">
                {buyer.name}
              </h2>

              {/* Customer Email */}
              <h2 className="font-light text-sm sm:text-base tracking-wide text-white/80">
                {buyer.email}
              </h2>

              {/* Total bill */}
              <h1 className="font-semibold text-xl mt-1">
                <span className="mr-1">₹</span>
                {parseInt(product?.productPriceInr) * qty.toNumber()}
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
    </div>
  );
};

export default Orders;
