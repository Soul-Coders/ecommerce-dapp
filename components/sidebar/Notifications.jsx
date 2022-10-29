import { BellIcon } from '@heroicons/react/20/solid';

import { useEffect, useState, useRef } from 'react';

const Notifications = () => {
  const [invisible, setInvisible] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    const hideNotifications = (e) =>
      ref.current && !ref.current.contains(e.target) && setInvisible(true);
    window.addEventListener('mousedown', hideNotifications);
    return () => window.removeEventListener('mousedown', hideNotifications);
  }, []);
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
          setInvisible(false);
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
      <DropdownMenu
        wrapperRef={ref}
        invisible={invisible}
        notifications={notifications}
      />
    </div>
  );
};

export default Notifications;

const DropdownMenu = ({ invisible, wrapperRef, notifications }) => {
  return (
    !invisible && (
      <div
        ref={wrapperRef}
        className="px-5 py-1 absolute mt-7 bg-dimmed-black/80 rounded-md backdrop-blur-sm w-full"
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
    )
  );
};
