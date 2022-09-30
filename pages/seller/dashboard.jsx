import React from 'react';
import Page from '../../components/Page';
import Order from '../../components/Order';

const Dashboard = () => {
  return (
    <div>
      <Page name={'Dashboard'} parent="seller">
        <div>
          <div className="grid gap-5 mb-5 grid-cols-1 md:grid-cols-3">
            <div className="px-3 py-4 flex gap-4 rounded-md bg-dimmed-black">
              <div className="p-4 flex justify-center bg-[#FF8500]/10 rounded-full w-fit">
                <img
                  src="/rupee.svg"
                  alt="dollar"
                  className="text-orange-600 w-6"
                />
              </div>
              <div className="flex lg:gap-1 flex-col justify-center text-bold text-md md:text-sm lg:text-md">
                <h1 className="text-sm text-white/50">Total Sales</h1>
                <h1 className="font-semibold md:text-lg">$19,616,051.20</h1>
              </div>
            </div>
            <div className="px-3 py-4 flex gap-4 rounded-md bg-dimmed-black">
              <div className="p-4 flex justify-center bg-[#00B517]/10 rounded-full w-fit">
                <img
                  src="/cart.svg"
                  alt="cart"
                  className="text-orange-600 w-6"
                />
              </div>
              <div className="flex lg:gap-1 flex-col justify-center text-bold text-md md:text-sm lg:text-md">
                <h1 className="text-sm text-white/50">Total Orders</h1>
                <h1 className="md:text-lg font-semibold">3290</h1>
              </div>
            </div>
            <div className="px-3 py-4 flex gap-4 rounded-md bg-dimmed-black">
              <div className="p-4 flex justify-center bg-[#3167EB]/10 rounded-full w-fit">
                <img
                  src="/basket.svg"
                  alt="basket"
                  className="text-orange-600 w-6"
                />
              </div>
              <div className="flex lg:gap-1 flex-col justify-center text-bold text-md md:text-sm lg:text-md">
                <h1 className="text-sm text-white/50">Total Products</h1>
                <h1 className="md:text-lg font-semibold">332</h1>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
            <div className="flex">
              <img
                src="/barChart.svg"
                alt="Bar"
                className="object-cover object-center"
              />
            </div>
            <div className="flex">
              <img
                src="/pieChart.svg"
                alt="Pie"
                className="object-contain object-center"
              />
            </div>
          </div>
          <div className="grid p-1">
            <h1 className="p-3 text-xl font-bold lg:text-2xl">Latest Orders</h1>
            <div className="flex flex-col">
              <Order />
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Dashboard;
