import Page from '../../../components/Page';
import Label from '../../../components/Label';
import List from '../../../components/List';
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
          align={'grid grid-cols-[15%_17%_30%_10%_15%_13%_]'}
          className=""
        >
          {orders.map(({ id, name, email, total, status, date }) => (
            <div key={id}>
              <p>{id}</p>
              <p>{name}</p>
              <p>{email}</p>
              <p>{total}</p>
              <Label status={status} />
              <p>{date}</p>
            </div>
          ))}
        </List>
      </Page>
    </div>
  );
};

export default Orders;
