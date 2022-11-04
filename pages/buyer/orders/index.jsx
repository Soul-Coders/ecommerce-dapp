import Page from '../../components/Page';
import orders from '../seller/orders/orders.json';
import List from '../../components/orders/List';
import Label from '../../components/Label';

const Orders = () => {
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
            {orders?.map(({ product, id, total, status, date }) => (
              <div key={id}>
                {/* Order Image */}
                <img
                  src={product.img}
                  alt="product image"
                  className="w-16 lg:w-32 rounded-md"
                />
                {/* Customer Name */}
                <h2 className="font-light text-sm sm:text-base lg:text-lg tracking-wide text-white/80">
                  {product.name}
                </h2>
                {/* Total bill */}
                <h1 className="font-semibold text-xl mt-1">
                  <span className="mr-1">₹</span>
                  {total}
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
