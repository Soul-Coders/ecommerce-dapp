import React from 'react';

import { useState, useContext, useEffect, useRef } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';

import { ClipboardDocumentCheckIcon } from '@heroicons/react/20/solid';

const UserProfile = () => {
  const [invisible, setInvisible] = useState(true);
  const ref = useRef(null);
  const { currentAccount } = useContext(ConnectionContext);

  useEffect(() => {
    const hideProfile = (e) =>
      ref.current && !ref.current.contains(e.target) && setInvisible(true);
    window.addEventListener('mousedown', hideProfile);
    return () => window.removeEventListener('mousedown', hideProfile);
  }, []);

  return (
    <div>
      <button onClick={() => setInvisible(false)}>
        <img
          src={currentAccount.info.imgURL}
          alt="User profile picture"
          className="cursor-pointer rounded"
          width={30}
          height={30}
        />
      </button>
      <DropdownMenu
        wrapperRef={ref}
        invisible={invisible}
        info={currentAccount.info}
        address={currentAccount.walletAddress || 'No wallet found'}
        user={
          (currentAccount.sellerStatus &&
            'Seller' + `${(currentAccount.buyerStatus && ' / Buyer') || ''}`) ||
          (currentAccount.buyerStatus && 'Buyer') ||
          'Visitor'
        }
      />
    </div>
  );
};

export default UserProfile;

const DropdownMenu = ({ wrapperRef, invisible, info, address, user }) => {
  const [copied, setCopied] = useState(false);
  return (
    !invisible && (
      <div
        ref={wrapperRef}
        className={`${
          invisible && 'hidden'
        } px-5 py-1 absolute bg-dimmed-black/80 rounded-md backdrop-blur-sm`}
      >
        <div className="p-3 flex justify-evenly items-center">
          <img
            src={info.imgURL}
            alt="User profile picture"
            className="cursor-pointer rounded"
            width={60}
            height={60}
          />
          <div className="p-3 w-full">
            <h1 className="font-extrabold">{info.name || 'Unknown name'}</h1>
            <p className="font-semibold">{info.email || 'Unknown email'}</p>
          </div>
        </div>
        <div className="w-full border border-white/20"></div>
        <ul className="mt-2 py-2  rounded-md shadow-md text-blue-100">
          <li className="block px-4 py-2 hover:bg-indigo-400/40 hover:text-white rounded-md">
            <div className="flex gap-3">
              <p>Wallet: </p>
              <p className="font-semibold">
                {address.slice(0, 4) + '...' + address.slice(35)}
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(address);
                }}
              >
                <ClipboardDocumentCheckIcon
                  className={`w-4 h-4 ${copied && 'text-green-400'}`}
                  onClick={() => setCopied(true)}
                />
              </button>
            </div>
          </li>
          <li className="block px-4 py-2 hover:bg-indigo-400/40 hover:text-white rounded-md">
            <div className="flex gap-3">
              <p>User is:</p>
              <p className="font-semibold">{user}</p>
            </div>
          </li>
        </ul>
      </div>
    )
  );
};
