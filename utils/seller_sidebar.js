import {
  PresentationChartBarIcon,
  ChartBarSquareIcon,
  InboxStackIcon,
  CreditCardIcon,
  ShoppingCartIcon,
  BanknotesIcon,
  Cog6ToothIcon,
} from '@heroicons/react/20/solid';

const sidebarItems = {
  above: [
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
  ],
  below: [
    {
      icon: <Cog6ToothIcon className="h-6 w-6 sm:inline p-1" />,
      title: 'Settings',
      id: 'settings',
    },
  ],
};

export default sidebarItems;
