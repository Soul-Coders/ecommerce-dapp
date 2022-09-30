const Status = ({ status }) => {
  let circleColor, textColor;
  if (status === 'Delivered') {
    circleColor = 'bg-[#173B52]';
    textColor = 'text-[#00B594]';
  } else if (status === 'Pending') {
    circleColor = 'bg-[#4A3A39]';
    textColor = 'text-[#F27200]';
  } else {
    circleColor = 'bg-[#732F46]';
    textColor = 'text-[#FA3434]';
  }

  return (
    <div className={`${circleColor} rounded-xl w-4/12 md:w-3/4 lg:w-7/12 lg:`}>
      <h1 className={`px-2 ${textColor} text-sm text-center`}>{status}</h1>
    </div>
  );
};

const sampleOrder = [
  {
    id: 2323,
    name: 'Devon Lane',
    email: 'devon@gmail.com',
    price: '$778.35',
    status: 'Pending',
    date: '07.05.2020',
  },
  {
    id: 2323,
    name: 'Devon Lane',
    email: 'devon@gmail.com',
    price: '$778.35',
    status: 'Delivered',
    date: '07.05.2020',
  },
];

const Order = () => {
  return (
    <div className="p-4">
      {sampleOrder.map(({ id, name, email, price, status, date }) => (
        <div className="">
          <div className="md:hidden bg-[#252525]/70 p-4 rounded-md sm:p-6">
            <div className="flex justify-between flex-grow">
              <h3 className="font-medium text-sm uppercase sm:text-base">
                <span className="text-brand-purple">#</span>
                {id}
              </h3>
              <h2 className="font-light text-sm sm:text-base tracking-wide text-white/80">
                {name}
              </h2>
            </div>
            <div className="flex justify-between flex-grow mt-4 items-end">
              <div className="">
                <h2 className="font-light text-sm sm:text-base text-white/80">
                  {email}
                </h2>
                <h1 className="font-semibold text-xl mt-1">
                  <span className="mr-1">₹</span>
                  {price}
                </h1>
              </div>
              <Status status={status} />
            </div>
          </div>
          <div className="hidden md:block bg-[#252525]/70 p-3 rounded-md lg:p-4">
            <div className="grid grid-cols-[15%_15%_20%_20%_30%] w-full items-center">
              <div>
                <h3 className="font-medium text-base uppercase lg:text-lg">
                  <span className="text-brand-purple">#</span>
                  {id}
                </h3>
              </div>
              <div>
                <h2 className="font-light text-white/80 lg:text-lg">{date}</h2>
              </div>
              <div>
                <h2 className="font-light tracking-wide text-white/80 lg:text-lg md:font-normal">
                  {name}
                </h2>
              </div>
              <div>
                <h1 className="font-semibold text-xl mt-1">
                  <span className="mr-1">₹</span>
                  {price}
                </h1>
              </div>
              <div className="mt-2 ">
                <Status status={status} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
