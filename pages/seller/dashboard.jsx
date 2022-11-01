import React from 'react';
import Page from '../../components/Page';
import List from '../../components/orders/List';
import Label from '../../components/Label';
import Sales from '../../components/charts/Sales';
import PieChart from '../../components/charts/Pie';
import Stat from '../../components/Stat';
import orders from './orders/orders.json';

const Dashboard = () => {
  const latest = orders;
  return (
    <div>
      <Page name={'Dashboard'}>
        {/* Quick Summary */}
        <div>
          <div className="grid gap-5 mb-5 grid-cols-1 md:grid-cols-3">
            <Stat
              title={'Total Sales'}
              imagePath={'/rupee.svg'}
              bgColor={'bg-[#FF8500]/10'}
            >
              <h1 className="font-semibold md:text-lg lg:text-2xl">
                $19,616,051.20
              </h1>
            </Stat>

            <Stat
              title={'Total Orders'}
              imagePath={'/cart.svg'}
              bgColor={'bg-[#00B517]/10'}
            >
              <h1 className="font-semibold md:text-lg lg:text-2xl">3290</h1>
            </Stat>

            <Stat
              title={'Total Products'}
              imagePath={'/basket.svg'}
              bgColor={'bg-[#3167EB]/10'}
            >
              <h1 className="font-semibold md:text-lg lg:text-2xl">332</h1>
            </Stat>
          </div>

          {/* Charts */}
          <div className="flex flex-col justify-between md:flex-row">
            <div className="">
              <Sales />
            </div>
            <div className="pt-3 md:pt-0">
              <PieChart />
            </div>
          </div>

          {/* Latest Orders */}
          <div className="">
            <h1 className="text-base font-bold md:text-xl lg:text-2xl py-4">
              Latest Orders
            </h1>
            <div className="flex flex-col">
              <List
                ordersFor={'seller'}
                colnames={[]}
                align={'grid grid-cols-[10%_22%_30%_15%_10%_13%_]'}
                ids={orders?.map(({ id }) => id)}
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
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Dashboard;
