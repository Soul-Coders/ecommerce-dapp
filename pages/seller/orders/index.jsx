import Page from '../../../components/Page';
import Label from '../../../components/Label';
import List from '../../../components/orders/List';
import orders from './orders.json';

const Orders = () => {
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
          colnames={colnames}
          align={'grid grid-cols-[10%_22%_30%_15%_10%_13%_]'}
          className=""
        >
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
    </div>
  );
};

export default Orders;
