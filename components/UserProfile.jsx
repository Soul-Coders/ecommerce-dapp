import React from 'react'

import { useState } from 'react';
import { useContext } from 'react';
import { ConnectionContext } from '../context/ConnectionContext';

function UserProfile() {

  const [invisible, make_visible] = useState(true);
  const { currentAccount } = useContext(ConnectionContext);
  console.log(currentAccount)
  return (
    <div>
        <button onClick={() => {make_visible(!invisible)}}>
            <img
            src="/user.png"
            alt="User profile icon"
            className="cursor-pointer rounded"
            width={30}
            height={30}
            />
        </button>
        <DropdownMenu invisible={invisible}
            name={'Unknown'}
            address={currentAccount.walletAddress || 'No wallet found'}
            user={currentAccount.formType || 'Visitor'}    
        />
    </div>
  )
}

export default UserProfile

const DropdownMenu = ( {invisible, name, address, user} ) => {
    return (
        <div className={`${invisible && 'hidden'} absolute bg-dimmed-black/80 rounded-md backdrop-blur-sm`}>
            <div className='p-3 flex justify-evenly items-center'>
                <img
                    src="/user.png"
                    alt="User profile icon"
                    className="cursor-pointer rounded"
                    width={50}
                    height={50}
                />
                <h1 className='font-extrabold'>{name}</h1>
            </div>
            <hr />
            <ul className='mt-2 py-2  rounded-md shadow-md text-blue-100'>
                <li className='block px-4 py-2 hover:bg-indigo-800/40 hover:text-white rounded-md'>Wallet | {address}</li>
                <li className='block px-4 py-2 hover:bg-indigo-800/40 hover:text-white rounded-md'>Account type | {user}</li>
            </ul>
        </div>
    )
}
  