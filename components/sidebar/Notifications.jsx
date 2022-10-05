import { BellIcon } from '@heroicons/react/20/solid';

import { useState } from 'react';

const Notifications = () => {
  const [invisible, setInvisible] = useState(true);
  const notifications = [
    'PID is arriving tomorrow',
    'PID is on a discounted rate',
    'PID is on a discounted rate',
    'PID arriving Wednesday',
  ];

  return (
    <div className="flex">
      <button
        onClick={() => {
          setInvisible(!invisible);
        }}
      >
        <div className="flex justify-end">
          <BellIcon className="h-6 w-6 sm:inline cursor-pointer rounded" />
          {(notifications.length && (
            <div className="w-4 h-4 rounded-full bg-red-600 flex text-xs justify-center font-semibold items-center p-0.5">
              {notifications.length}
            </div>
          )) ||
            ''}
        </div>
      </button>
      <DropdownMenu invisible={invisible} notifications={notifications} />
    </div>
  );
};

export default Notifications;

const DropdownMenu = ({ invisible, notifications }) => {
  return (
    <div
      className={`${
        invisible && 'hidden'
      } px-5 py-1 absolute bg-dimmed-black/80 rounded-md backdrop-blur-sm w-full`}
    >
      <ul>
        {notifications.map((notification, i) => (
          <div key={i}>
            <li className="p-3">{notification}</li>
            <div className="w-full border border-white/20"></div>
          </div>
        ))}
      </ul>
    </div>
  );
};
