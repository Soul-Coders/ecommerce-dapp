import Page from '../../components/Page';
import Label from '../../components/Label';
import List from '../../components/List';

const Orders = () => {
  const orders = [
    {
      id: '2342',
      name: 'Jensen Huang',
      email: 'jensen.huang@gmail.com',
      total: '₹ 200',
      status: 'done',
      date: '29 Aug 2022',
      action: { name: 'View' },
    },
    {
      id: '2340',
      name: 'Alex Grim',
      email: 'alex.grim@gmail.com',
      total: '₹ 240',
      status: 'cancelled',
      date: '29 Aug 2022',
      action: { name: 'View' },
    },
    {
      id: '1410',
      name: 'Saud Kadiri',
      email: 'saud.kadiri@gmail.com',
      total: '₹ 240',
      status: 'pending',
      date: '20 Jan 2019',
      action: { name: 'View' },
    },
  ];
  const colnames = ['ID', 'Name', 'Email', 'Total', 'Status', 'Date', 'Action'];
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
          align={'grid grid-cols-[10%_12%_30%_10%_15%_13%_10%]'}
          className=""
        >
          {orders.map(({ id, name, email, total, status, date, action }) => (
            <div key={id}>
              <p>{id}</p>
              <p>{name}</p>
              <p>{email}</p>
              <p>{total}</p>
              <Label status={status} />
              <p>{date}</p>
              <button className="flex justify-center items-center font-semibold px-9 h-10 bg-gradient-to-r from-brand-red to-brand-purple rounded-md">
                {action.name}
              </button>
            </div>
          ))}
        </List>
      </Page>
    </div>
  );
};

export default Orders;
