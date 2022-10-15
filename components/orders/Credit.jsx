const Credit = ({ name, txnHash, paymentMethod, method, block, value }) => {
  return (
    <div class=" h-56 md:w-80 xl:w-96 m-auto bg-dimmed-black rounded-xl relative text-brand-lavender">
      <div class="w-full px-8 absolute top-8">
        <div class="flex justify-between">
          <div class="">
            <p class="font-light">Buyer Name</p>
            <p class="font-medium tracking-widest">{name}</p>
          </div>
          <img class="w-14 h-14" src={paymentMethod} />
        </div>
        <div class="pt-1">
          <p class="font-light">Transaction Hash</p>
          <p class="font-medium tracking-more-wider">{txnHash}</p>
        </div>
        <div class="pt-6 pr-6">
          <div class="flex justify-between">
            <div class="">
              <p class="font-light text-xs">Method</p>
              <p class="font-medium tracking-wider text-sm">{method}</p>
            </div>
            <div class="">
              <p class="font-light text-xs ">Block</p>
              <p class="font-medium tracking-wider text-sm">{block}</p>
            </div>

            <div class="">
              <p class="font-light text-xs">Value(Ether)</p>
              <p class="font-bold tracking-more-wider text-sm">{value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;
