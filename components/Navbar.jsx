import { Bars3Icon, SunIcon, BellIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

function Navbar({ onClick }) {
  return (
    <header className="bg-dimmed-black shadow-md fixed top-0 w-full py-1">
      <div className="container flex justify-between">
        {/* Logo and the sidebar icon */}
        <div className="flex items-center space-x-10 md:space-x-10 p-3">
          <button onClick={onClick}>
            <Bars3Icon className="h-6 w-6 sm:inline cursor-pointer" />
          </button>
        </div>

        {/* FOR THE ICONS IN RHS */}
        <div className="flex items-center space-x-4 font-light p-3">
          <SunIcon className="hidden h-6 w-6 sm:inline" />
          <BellIcon className="hidden h-6 w-6 sm:inline" />
          <Link href="/">
            <img
              src="/user.png"
              alt="User profile icon"
              className="cursor-pointer rounded"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
