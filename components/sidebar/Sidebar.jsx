import Link from 'next/link';
import { useRouter } from 'next/router';
import { XCircleIcon, SunIcon } from '@heroicons/react/20/solid';

import seller_sidebar from '../../utils/seller_sidebar';
import buyer_sidebar from '../../utils/buyer_sidebar';

import UserProfile from './UserProfile';
import Notifications from './Notifications';

const Sidebar = ({ onClick, collapsed, name }) => {
  const router = useRouter();
  const root = router.asPath.split('/')[1];

  const sidebarItems = (root == 'seller' && seller_sidebar) || buyer_sidebar;
  return (
    <div>
      <div className="backdrop-blur-sm bg-black/30 flex flex-col justify-between text-brand-lavender w-64 fixed top-0 left-0 h-full z-10">
        <div>
          <div className="flex justify-between p-2">
            <div className="flex items-center space-x-4 font-light p-3">
              <UserProfile />
              <Notifications />
              <SunIcon className="h-6 w-6 sm:inline" />
            </div>
            <button onClick={onClick}>
              <XCircleIcon className="h-7 w-7 sm:inline cursor-pointer" />
            </button>
          </div>
          <ul>
            {sidebarItems.above.map(({ icon, title, id }) => (
              <li key={title} className="p-2">
                <Link href={`/${root}/${id}`}>
                  <div
                    className={`${
                      name.toLowerCase() == id && 'bg-[#242323]/80 rounded-md'
                    } p-3 hover:bg-blue-500 rounded-md`}
                  >
                    <div className="flex flex-wrap gap-2 w-fit h-fit cursor-pointer">
                      {icon}
                      <h3 className="text-sm lg:text-base xl:text-base font-semibold">
                        {title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-1">
          <div className="w-full h-[1px] bg-white/20"></div>
          <ul>
            {sidebarItems.below.map(({ icon, title, id }) => (
              <li key={title} className="p-2">
                <Link href={`/${root}/${id}`}>
                  <div
                    className={`${
                      name.toLowerCase() == id && 'bg-[#242323]'
                    } p-3 hover:bg-blue-500 rounded-md`}
                  >
                    <div className="flex flex-wrap gap-2 w-fit h-fit cursor-pointer">
                      {icon}
                      <h3 className="text-sm lg:text-base xl:text-base font-semibold">
                        {title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {!collapsed && (
        <div
          onClick={onClick}
          className="z-[1] w-full h-screen fixed top-0 right-0 bg-black/40"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
