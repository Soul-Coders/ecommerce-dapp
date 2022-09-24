import { ListBulletIcon, SunIcon, BellIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

import React, { Component } from 'react'

export default class Navbar extends Component {
  handleClick = (event) => {
    this.props.onClick(event)
  };
  render() {
    return (
      <header className="bg-dimmed-black flex justify-between shadow-md">
      {/* Logo and the sidebar icon */}
      <div className=" flex wrap items-centre space-x-10 md:space-x-10 p-3">
        <Link href={'/'}>
          <img
            src="/logo.svg"
            width={150}
            height={150}
            alt="Shoppingverse Logo"
            className="cursor-pointer"
          />
        </Link>
        <button onClick={this.handleClick}>
          <ListBulletIcon className="h-6 w-6 sm:inline cursor-pointer" />
        </button>
      </div>

      {/* FOR THE ICONS IN RHS */}
      <div className="flex items-center space-x-4 font-light p-3">
        <SunIcon className="hidden h-6 w-6 sm:inline" />
        <BellIcon className="hidden h-6 w-6 sm:inline" />
        <Link href="/">
          <img
            src="./user.png"
            alt="Netflix profile icon blue"
            className="cursor-pointer rounded"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </header>
    )
  }
}



// function Navbar(props) {
//   const handleClick = (event) => {
//     console.log('List button clicked')
//     console.log(this.props)
//   };
//   return (
//     <header className="bg-dimmed-black flex justify-between shadow-md">
//       {/* Logo and the sidebar icon */}
//       <div className=" flex wrap items-centre space-x-10 md:space-x-10 p-3">
//         <Link href={'/'}>
//           <img
//             src="/logo.svg"
//             width={150}
//             height={150}
//             alt="Shoppingverse Logo"
//             className="cursor-pointer"
//           />
//         </Link>
//         <button onClick={handleClick}>
//           <ListBulletIcon className="h-6 w-6 sm:inline cursor-pointer" />
//         </button>
//       </div>

//       {/* FOR THE ICONS IN RHS */}
//       <div className="flex items-center space-x-4 font-light p-3">
//         <SunIcon className="hidden h-6 w-6 sm:inline" />
//         <BellIcon className="hidden h-6 w-6 sm:inline" />
//         <Link href="/">
//           <img
//             src="./user.png"
//             alt="Netflix profile icon blue"
//             className="cursor-pointer rounded"
//             width={30}
//             height={30}
//           />
//         </Link>
//       </div>
//     </header>
//   );
// }

// export default Navbar;
