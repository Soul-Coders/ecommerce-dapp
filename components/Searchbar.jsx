import { ArrowRightIcon } from '@heroicons/react/20/solid';

const Searchbar = ({ searchFor }) => {
  return (
    <div className="flex justify-between items-center w-36 h-8 rounded-md bg-gradient-to-br from-brand-red to-brand-purple md:w-96">
      <input
        placeholder={`Search in ${searchFor}`}
        type="text"
        className="!outline-none text-[0.5em] md:text-xs w-11/12 h-full rounded-r-xl"
      />
      <ArrowRightIcon className="mr-1 md:mr-2 h-4 w-4 sm:inline md:w-6 md:h-6 cursor-pointer" />
    </div>
  );
};

export default Searchbar;
