import Page from '../../components/Page';

const Transactions = () => {
  const transactions = [
    {
      tx: '0xc3a73cce30c0547e9eb0036db960c68d11dc8eb1569822b0d512edd10bf19b51',
      name: 'Jensen Huang',
      date: '29 Aug 2022',
      price: '5000',
    },
    {
      tx: '0xc4a73cce30c0547e9eb0036db960c68d11dc8eb1569822b0d512edd10bf19b51',
      name: 'Alex Grim',
      date: '20 Sep 2022',
      price: '7000',
    },
    {
      tx: '0xc5a73cce30c0547e9eb0036db960c68d11dc8eb1569822b0d512edd10bf19b51',
      name: 'John Morrison',
      date: '02 Feb 2022',
      price: '2000',
    },
    {
      tx: '0xc6a73cce30c0547e9eb0036db960c68d11dc8eb1569822b0d512edd10bf19b51',
      name: 'Alysa Werner',
      date: '13 Apr 2022',
      price: '3000',
    },
    {
      tx: '0xc7a73cce30c0547e9eb0036db960c68d11dc8eb1569822b0d512edd10bf19b51',
      name: 'Melissa Clarke',
      date: '27 May 2022',
      price: '1000',
    },
  ];

  return (
    <div>
      <Page name="Transactions">
        <div className="w-full px-3 py-5 mb-7 bg-dimmed-black rounded-md mt-2 md:px-5 xl:p-7">
          <div className="border-b border-white/10 pb-5 md:pb-7">
            <input type="text" placeholder="Search" />
          </div>
          <div className="hidden md:grid px-3 text-white/50 pt-6 pb-2 text-sm grid-cols-[25%_20%_25%_15%_15%] w-full items-center md:pt-7">
            <h2>Transaction hash</h2>
            <h2>Date</h2>
            <h2>Name</h2>
            <h2>Price</h2>
            <h2>Action</h2>
          </div>
          <div className="mt-4 flex flex-col gap-4 md:gap-6">
            {transactions.map(({ tx, name, date, price }) => (
              <div key={tx} className="">
                <div className="md:hidden bg-[#252525]/70 p-4 rounded-md sm:p-6">
                  <div className="flex justify-between flex-grow">
                    <h3 className="font-medium text-sm uppercase sm:text-base">
                      <span className="text-brand-purple">#</span>
                      {tx.slice(0, 10) + '...'}
                    </h3>
                    <h2 className="font-light text-sm sm:text-base tracking-wide text-white/80">
                      {name}
                    </h2>
                  </div>
                  <div className="flex justify-between flex-grow mt-4 items-end">
                    <div className="">
                      <h2 className="font-light text-sm sm:text-base text-white/80">
                        {date}
                      </h2>
                      <h1 className="font-semibold text-xl mt-1">
                        <span className="mr-1">₹</span>
                        {price}
                      </h1>
                    </div>
                    <button className="text-sm font-semibold px-9 h-10 bg-gradient-to-r from-brand-red to-brand-purple rounded-md">
                      View
                    </button>
                  </div>
                </div>
                <div className="hidden md:block  bg-[#252525]/70 p-3 rounded-md lg:p-4">
                  <div className="grid grid-cols-[25%_20%_25%_15%_15%] w-full items-center">
                    <h3 className="font-medium text-base uppercase lg:text-lg">
                      <span className="text-brand-purple">#</span>
                      {tx.slice(0, 10) + '...'}
                    </h3>
                    <h2 className="font-light text-white/80 lg:text-lg">
                      {date}
                    </h2>
                    <h2 className="font-light tracking-wide text-white/80 lg:text-lg md:font-normal">
                      {name}
                    </h2>
                    <h1 className="font-semibold text-xl mt-1">
                      <span className="mr-1">₹</span>
                      {price}
                    </h1>
                    <button className="text-sm font-semibold px-9 h-10 bg-gradient-to-r from-brand-red to-brand-purple rounded-md">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Transactions;
