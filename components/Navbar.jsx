import { Bars3Icon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import SearchBar from './SearchBar';

const Navbar = ({ onClick, page, items, setSearches }) => {
  const search =
    (['products', 'orders', 'transactions'].includes(page.toLowerCase()) &&
      page) ||
    'Products';
  return (
    <header className="bg-dimmed-black shadow-md fixed top-0 w-full py-2 md:py-3 bordmer-b-2 border-b-rose-800">
      <div className="container flex justify-between gap-4 items-center">
        {/* Sidebar icon and Shoppingverse logo */}
        <div className="flex justify-between gap-3">
          <div className="flex gap-1">
            <div className="flex items-center space-x-10 md:space-x-10 p-2 border-r-2 border-white/5">
              <button onClick={onClick}>
                <Bars3Icon className="h-4 w-4 sm:inline md:w-6 md:h-6 cursor-pointer" />
              </button>
            </div>
            <div className="flex items-center">
              <Link href={'/'}>
                <img
                  src="/logo.svg"
                  alt="logo"
                  className="w-48 sm:inline cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
        <SearchBar searchFor={search} items={items} setSearches={setSearches} />
      </div>
    </header>
  );
};

export default Navbar;
