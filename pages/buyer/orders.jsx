import Page from '../../components/Page';
import orders from '../seller/orders/orders.json';
import List from '../../components/orders/List';

const Orders = () => {
  return (
    <div>
      <Page name={'Order History'}>
        <div className="flex flex-col">
          <List
            colnames={[]}
            ordersFor={'buyer'}
            align={'grid grid-cols-[25%_20%_25%_15%_15%]'}
            ids={orders?.map(({ id }) => id)}
          >
            {orders?.map(({ product, id, email, total, date }) => (
              <div key={id}>
                {/* Order Image */}
                <img
                  src={product.img}
                  alt="product image"
                  className="w-16 xl:w-24 rounded-md"
                />
                {/* Customer Name */}
                <h2 className="font-light text-sm sm:text-base tracking-wide text-white/80">
                  {product.name}
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

                {/* Order Date */}
                <h2 className="font-light text-sm sm:text-base text-white/80">
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
