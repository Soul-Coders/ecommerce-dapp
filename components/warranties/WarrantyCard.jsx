import {
  ArrowUpRightIcon,
  CalendarIcon,
  EyeIcon,
} from '@heroicons/react/20/solid';

export const WarrantyCard = ({ productImage, expiryDate, productName }) => {
  return (
    <div className="bg-[#252525] rounded-lg p-3">
      <div className="grid grid-cols-[35%_65%] sm:grid-cols-[25%_75%] md:grid-cols-[35%_65%] xl:grid-cols-[30%_70%] gap-4 xl:gap-6 sm:items-center">
        <div className="">
          <img
            className="object-cover object-center aspect-1 rounded-md lg:rounded-lg max-h-32 xl:max-h-40"
            src={productImage}
            alt="product"
          />
        </div>
        <div className="">
          <h3 className="font-medium sm:text-xl md:text-base lg:text-xl xl:text-2xl">
            {productName}
          </h3>
          <div className="mt-2 sm:mt-4 xl:mt-6 sm:flex sm:gap-6 md:gap-3 xl:gap-5 md:flex-col md:mt-2 xl:flex-row">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-2 h-8 w-8 sm:h-9 sm:w-9 xl:w-10 xl:h-10 rounded-md bg-white/10">
                <CalendarIcon className="w-full" />
              </div>
              <div className="">
                <h2 className="text-white/70 font-light text-sm sm:text-base">
                  Expires on
                </h2>
                <h3 className="font-medium sm:text-lg">{expiryDate}</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-0">
              <div className="p-2 h-8 w-8 sm:h-9 sm:w-9 rounded-md bg-white/10">
                <EyeIcon className="w-full" />
              </div>
              <a className="flex gap-1 cursor-pointer items-center text-sm sm:text-base border-b border-b-blue-400 text-blue-400">
                <h2>Verify NFT</h2>
                <ArrowUpRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6 font-medium">
        <button className="w-full md:order-2 bg-green-700 rounded-md py-2">
          Accept
        </button>
        <button className="w-full bg-white/10 rounded-md py-2">
          Order details
        </button>
      </div>
    </div>
  );
};
