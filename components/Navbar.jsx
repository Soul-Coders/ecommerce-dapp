import { Bars3Icon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const Navbar = ({ onClick }) => {
  return (
    <header className="bg-dimmed-black shadow-md fixed top-0 w-full py-2 md:py-3">
      {/* Sidebar icon and Shoppingverse logo */}
      <div className="container flex justify-between gap-3">
        <div className="flex gap-1">
          <div className="flex items-center space-x-10 md:space-x-10 p-2 border-r-2 border-white/5">
            <button onClick={onClick}>
              <Bars3Icon className="h-6 w-6 sm:inline md:w-6 md:h-6 cursor-pointer" />
            </button>
          </div>
          <div className="flex items-center">
            <Link href={'/'}>
              <img
                src="/logo.svg"
                alt="logo"
                className="w-36 sm:inline cursor-pointer lg:w-40"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
