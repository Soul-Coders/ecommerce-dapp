import Link from 'next/link';
import { useRouter } from 'next/router';
import { XCircleIcon, SunIcon } from '@heroicons/react/20/solid';

import seller_sidebar from '../../utils/seller_sidebar';
import buyer_sidebar from '../../utils/buyer_sidebar';

import UserProfile from './UserProfile';
import Notifications from './Notifications';
import { useState } from 'react';

const Sidebar = ({ onClick, collapsed, setCollapsed, name }) => {
  const router = useRouter();
  const root = router.asPath.split('/')[1];
  const pageID = router.asPath.split('/')[2];

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
          <List
            sidebarItems={sidebarItems.above}
            root={root}
            pageID={pageID}
            setCollapsed={setCollapsed}
          />
        </div>
        <div className="p-1">
          <div className="w-full h-[1px] bg-white/20"></div>
          <List
            sidebarItems={sidebarItems.below}
            root={root}
            pageID={pageID}
            setCollapsed={setCollapsed}
          />
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

const List = ({ sidebarItems, root, pageID, setCollapsed }) => {
  return (
    <div>
      <ul>
        {sidebarItems.map(({ icon, title, id }) => (
          <li key={title} className="p-2">
            <Link href={`/${root}/${id}`}>
              <button
                id={id}
                onClick={() => id === pageID && setCollapsed(true)}
                className={`${
                  id === pageID && 'bg-[#242323]'
                } p-3 hover:bg-blue-500 rounded-md w-full`}
              >
                <div className="flex flex-wrap gap-2 w-fit h-fit cursor-pointer">
                  {icon}
                  <h3 className="text-sm lg:text-base xl:text-base font-semibold">
                    {title}
                  </h3>
                </div>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
