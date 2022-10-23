import { ArrowRightIcon } from '@heroicons/react/20/solid';

const SearchBar = ({ searchFor, items, setSearches }) => {
  const performSearch = (e) => {
    e.preventDefault();
    const query = e.target.query.value.toLowerCase();
    const matchedProducts = items.filter(
      ({ productName, productDescription }) =>
        productName.toLowerCase().includes(query) ||
        productDescription.toLowerCase().includes(query)
    );
    setSearches(matchedProducts);
  };
  return (
    <header>
      <form
        className="flex justify-between items-center w-36 h-8 rounded-md bg-gradient-to-br from-brand-red to-brand-purple md:w-96"
        onSubmit={performSearch}
      >
        <input
          placeholder={`Search in ${searchFor}`}
          // placeholder={allProducts && allProducts.map(({productName}) => productName).join(' ') || ''}
          type="text"
          id="query"
          onChange={() => {}}
          className="!outline-none text-[0.5em] md:text-xs w-11/12 h-full rounded-r-xl"
        />
        <button className="cursor-pointer h-full flex flex-col justify-center">
          <ArrowRightIcon className="mr-1 md:mr-2 h-5 w-5 sm:inline md:w-6 md:h-6" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
