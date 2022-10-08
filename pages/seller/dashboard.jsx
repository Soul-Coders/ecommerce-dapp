import React from 'react';
import Page from '../../components/Page';
import List from '../../components/List';
import Label from '../../components/Label';
import Sales from '../../components/charts/Sales';
import PieChart from '../../components/charts/Pie';
const Dashboard = () => {
  const latest = [
    {
      id: 2323,
      name: 'Devon Lane',
      mail: 'devon@gmail.com',
      total: '₹778.35',
      status: 'delivered',
      date: '07.05.2020',
      action: { name: 'More' },
    },
    {
      id: 2323,
      name: 'Devon Lane',
      mail: 'devon@gmail.com',
      total: '₹778.35',
      status: 'delivered',
      date: '07.05.2020',
      action: { name: 'More' },
    },
    {
      id: 2323,
      name: 'Devon Lane',
      mail: 'devon@gmail.com',
      total: '₹778.35',
      status: 'pending',
      date: '07.05.2020',
      action: { name: 'More' },
    },
    {
      id: 2323,
      name: 'Devon Lane',
      mail: 'devon@gmail.com',
      total: '₹778.35',
      status: 'cancelled',
      date: '07.05.2020',
      action: { name: 'More' },
    },
  ];

  // const colnames = ['ID', 'Name', 'Mail', 'Total', 'Status', 'Action']

  return (
    <div>
      <Page name={'Dashboard'} parent="seller">
        {/* Quick Summary */}
        <div>
          <div className="grid gap-5 mb-5 grid-cols-1 md:grid-cols-3">
            <div className="px-3 py-4 flex gap-4 rounded-md bg-dimmed-black items-center">
              <div className="p-4 flex justify-center bg-[#FF8500]/10 rounded-full w-fit h-fit">
                <img
                  src="/rupee.svg"
                  alt="dollar"
                  className="text-orange-600 w-6 lg:w-7"
                />
              </div>
              <div className="flex lg:gap-2 flex-col justify-center text-bold text-md md:text-sm lg:text-md">
                <h1 className="text-sm text-white/50 lg:text-base">
                  Total Sales
                </h1>
                <h1 className="font-semibold md:text-lg lg:text-2xl">
                  $19,616,051.20
                </h1>
              </div>
            </div>
            <div className="px-3 py-4 flex gap-4 rounded-md bg-dimmed-black items-center">
              <div className="p-4 flex justify-center bg-[#00B517]/10 rounded-full w-fit h-fit">
                <img
                  src="/cart.svg"
                  alt="cart"
                  className="text-orange-600 w-6 lg:w-7"
                />
              </div>
              <div className="flex lg:gap-2 flex-col justify-center text-bold text-md md:text-sm lg:text-md">
                <h1 className="text-sm text-white/50 lg:text-base">
                  Total Orders
                </h1>
                <h1 className="md:text-lg font-semibold lg:text-2xl">3290</h1>
              </div>
            </div>
            <div className="px-3 py-4 flex gap-4 rounded-md bg-dimmed-black items-center">
              <div className="p-4 flex justify-center bg-[#3167EB]/10 rounded-full w-fit h-fit">
                <img
                  src="/basket.svg"
                  alt="basket"
                  className="text-orange-600 w-6 lg:w-7"
                />
              </div>
              <div className="flex lg:gap-2 flex-col justify-center text-bold text-md md:text-sm lg:text-md">
                <h1 className="text-sm text-white/50 lg:text-base">
                  Total Products
                </h1>
                <h1 className="md:text-lg font-semibold lg:text-2xl">332</h1>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="flex flex-col justify-between md:flex-row">
            <div className="">
              <Sales />
            </div>
            <div className="pt-3">
              <PieChart />
            </div>
          </div>

          {/* Latest Orders */}
          <div className="">
            <h1 className="text-base font-bold md:text-xl lg:text-2xl py-4">Latest Orders</h1>
            <div className="flex flex-col">
              <List colnames={[]}>
                {latest.map(({ id, mail, total, status, date, action }) => (
                  <div key={id}>
                    <p>{id}</p>
                    <p>{mail}</p>
                    <p>{total}</p>
                    <p>{date}</p>
                    <Label status={status} />
                    <button className="flex justify-center items-center font-semibold px-9 h-10 bg-gradient-to-r from-brand-red to-brand-purple rounded-md">
                      {action.name}
                    </button>
                  </div>
                ))}
              </List>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Dashboard;
