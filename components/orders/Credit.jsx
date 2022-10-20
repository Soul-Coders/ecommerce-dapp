const Credit = ({ name, txnHash, paymentMethod, method, block, value }) => {
  return (
    <div className=" h-56 md:w-80 xl:w-96 m-auto bg-dimmed-black rounded-xl relative text-brand-lavender">
      <div className="w-full px-8 absolute top-8">
        <div className="flex justify-between">
          <div className="">
            <p className="font-light">Buyer Name</p>
            <p className="font-medium tracking-widest">{name}</p>
          </div>
          <img className="w-14 h-14" src={paymentMethod} />
        </div>
        <div className="pt-1">
          <p className="font-light">Transaction Hash</p>
          <p className="font-medium tracking-more-wider">{txnHash}</p>
        </div>
        <div className="pt-6 pr-6">
          <div className="flex justify-between">
            <div className="">
              <p className="font-light text-xs">Method</p>
              <p className="font-medium tracking-wider text-sm">{method}</p>
            </div>
            <div className="">
              <p className="font-light text-xs ">Block</p>
              <p className="font-medium tracking-wider text-sm">{block}</p>
            </div>

            <div className="">
              <p className="font-light text-xs">Value(Ether)</p>
              <p className="font-bold tracking-more-wider text-sm">{value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;
