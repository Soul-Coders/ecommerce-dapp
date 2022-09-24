import {
  PresentationChartBarIcon,
  ChartBarSquareIcon,
  InboxStackIcon,
  CreditCardIcon,
  ShoppingCartIcon,
  BanknotesIcon,
  Cog6ToothIcon,
} from '@heroicons/react/20/solid';

import Link from 'next/link';
import { useRouter } from 'next/router';

const sidebarItems = [
  {
    icon: <PresentationChartBarIcon className="h-6 w-6 sm:inline p-1" />,
    title: 'Dashboard',
    id: 'dashboard',
  },
  {
    icon: <InboxStackIcon className="h-6 w-6 sm:inline p-1" />,
    title: 'Products',
    id: 'products',
  },
  {
    icon: <ShoppingCartIcon className="h-6 w-6 sm:inline p-1" />,
    title: 'Orders',
    id: 'orders',
  },
  {
    icon: <CreditCardIcon className="h-6 w-6 sm:inline p-1" />,
    title: 'Transactions',
    id: 'transactions',
  },
  {
    icon: <BanknotesIcon className="h-6 w-6 sm:inline p-1" />,
    title: 'Warranties',
    id: 'warranties',
  },
  {
    icon: <ChartBarSquareIcon className="h-6 w-6 sm:inline p-1" />,
    title: 'Statistics',
    id: 'statistics',
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <div>
      <div
        className={
          'flex flex-col justify-between bg-dimmed-black border-t-2 border-blue-500 min-w-[15rem] min-h-full'
        }
      >
        <ul>
          {sidebarItems.map(({ icon, title, id }) => (
            <li key={title} className="p-2">
              <Link href={`/${id}`}>
                <div
                  className={`${
                    router.asPath.split('/').pop() == id &&
                    'bg-[#242323] rounded-md'
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
        <div className="p-3">
          <hr className="p-1" />
          <Link href={'/settings'} className="">
            <div
              className={`p-3 ${
                router.asPath.split('/').pop() == 'settings' &&
                'bg-[#242323] rounded-md'
              } p-3 hover:bg-blue-500 rounded-md`}
            >
              <div className="flex flex-wrap gap-2 w-fit h-fit cursor-pointer">
                <Cog6ToothIcon className="h-6 w-6 sm:inline" />
                <h3 className="text-sm lg:text-base xl:text-base font-semibold">Settings</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
