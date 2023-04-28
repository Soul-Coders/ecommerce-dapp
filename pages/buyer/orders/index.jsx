import Page from '../../../components/Page';
import List from '../../../components/orders/List';
import Label from '../../../components/Label';
import { useEffect, useState, useContext } from 'react';
import { ConnectionContext } from '../../../context/ConnectionContext';

const Orders = () => {
  const { getContract } = useContext(ConnectionContext);
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    const contract = getContract();
    return await contract.getOrders();
  };
  useEffect(() => {
    getOrders().then((orders) => {
      setOrders(orders);
      console.log(orders);
    });
  }, []);
  return (
    <div>
      <Page name={'Order History'}>
        <div className="flex flex-col">
          <List
            colnames={[
              'Product Image',
              'Product Name',
              'Total',
              'Status',
              'Date',
            ]}
            ordersFor={'buyer'}
            align={'grid grid-cols-[25%_20%_20%_20%_15%]'}
            ids={orders?.map(({ id }) => id)}
          >
            {orders?.map(({ id, product, total, status, date }, i) => (
              <div key={i}>
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
    </div>
  );
};

export default Orders;
