import React from 'react';
import Page from '../../components/Page';

const Dashboard = () => {
  return (
    <div>
      <Page name={'Dashboard'} parent="seller">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-4">
              <div className="grid grid-cols-3 md:grid-cols-2 border rounded-md bg-[#181818]">
                <img
                  src="/rupee.svg"
                  alt="dollar"
                  className="w-5/12 md:w-6/12 lg:w-5/12 justify-center ml-7 p-2.5"
                />
                <div className="flex flex-col justify-center text-bold text-md md:text-sm lg:text-md">
                  <h1>Sales</h1>
                  <h1>$19,616,051.20</h1>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-3 md:grid-cols-2 border rounded-md bg-[#181818]">
                <img
                  src="/cart.svg"
                  alt="cart"
                  className="w-5/12 md:w-6/12 lg:w-5/12 justify-center ml-7 p-2.5"
                />
                <div className="flex flex-col justify-center text-bold text-md md:text-sm lg:text-md">
                  <h1>Total Orders</h1>
                  <h1>3290</h1>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-3 md:grid-cols-2 border rounded-md bg-[#181818]">
                <img
                  src="/basket.svg"
                  alt="cart"
                  className="w-5/12 md:w-6/12 lg:w-5/12 justify-center ml-7 p-2.5"
                />
                <div className="flex flex-col justify-center text-bold text-md md:text-sm lg:text-md">
                  <h1>Total Products</h1>
                  <h1>332</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-8 ">
              <img
                src="/barChart.svg"
                alt="Bar"
                className="object-fill w-full h-full md:py-4 md:w-11/12"
              />
            </div>
            <div className="md:col-span-4 w-full h-full">
              <img
                src="/pieChart.svg"
                alt="Pie"
                className="h-full w-full md:object-fill"
              />
            </div>
          </div>
          <div className="grid p-1">
            <h1 className="p-3 text-xl font-bold lg:text-2xl">Latest Orders</h1>
            <div className="flex flex-col-reverse">
              <div className="grid grid-cols-2 md:grid-cols-4 p-5">
                <div className="grid grid-cols-2">
                  <h2>2323</h2>
                  <h2 className="">Devon Lane</h2>
                </div>
                <h2>devon@gmail.com</h2>
                <div className="hidden md:grid md:grid-cols-2">
                  <h2>$778.35</h2>
                  <h2>Delivered</h2>
                </div>
                <div className="hidden md:grid md:grid-cols-2">
                  <h2>07.05.2020</h2>
                  <h2>...</h2>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 p-5">
                <div className="grid grid-cols-2">
                  <h2>2323</h2>
                  <h2 className="">Devon Lane</h2>
                </div>
                <h2>devon@gmail.com</h2>
                <div className="hidden md:grid md:grid-cols-2">
                  <h2>$778.35</h2>
                  <h2>Delivered</h2>
                </div>
                <div className="hidden md:grid md:grid-cols-2">
                  <h2>07.05.2020</h2>
                  <h2>...</h2>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 p-5">
                <div className="grid grid-cols-2">
                  <h2>2323</h2>
                  <h2 className="">Devon Lane</h2>
                </div>
                <h2>devon@gmail.com</h2>
                <div className="hidden md:grid md:grid-cols-2">
                  <h2>$778.35</h2>
                  <h2>Delivered</h2>
                </div>
                <div className="hidden md:grid md:grid-cols-2">
                  <h2>07.05.2020</h2>
                  <h2>...</h2>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 p-5">
                <div className="grid grid-cols-2">
                  <h2>2323</h2>
                  <h2 className="">Devon Lane</h2>
                </div>
                <h2>devon@gmail.com</h2>
                <div className="hidden md:grid md:grid-cols-2">
                  <h2>$778.35</h2>
                  <h2>Delivered</h2>
                </div>
                <div className="hidden md:grid md:grid-cols-2">
                  <h2>07.05.2020</h2>
                  <h2>...</h2>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 p-5">
                <div className="grid grid-cols-2">
                  <h2>2323</h2>
                  <h2 className="">Devon Lane</h2>
                </div>
                <h2>devon@gmail.com</h2>
                <div className="hidden md:grid md:grid-cols-2">
                  <h2>$778.35</h2>
                  <h2>Delivered</h2>
                </div>
                <div className="hidden md:grid md:grid-cols-2">
                  <h2>07.05.2020</h2>
                  <h2>...</h2>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 p-5">
                <div className="grid grid-cols-2">
                  <h2>2323</h2>
                  <h2 className="">Devon Lane</h2>
                </div>
                <h2>devon@gmail.com</h2>
                <div className="hidden md:grid md:grid-cols-2">
                  <h2>$778.35</h2>
                  <h2>Delivered</h2>
                </div>
                <div className="hidden md:grid md:grid-cols-2">
                  <h2>07.05.2020</h2>
                  <h2>...</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Dashboard;
