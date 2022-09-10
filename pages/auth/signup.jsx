import Head from 'next/head';
import Card from '../../components/Card'

import {
  UserIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  MapPinIcon, 
  CursorArrowRippleIcon, 
  CursorArrowRaysIcon,
  CakeIcon,
  UserPlusIcon
} from '@heroicons/react/24/outline'

const Signup = () => {
  return (
    <div>
      <Head>
        <title>Sign up - ShoppingVerse</title>
        <meta name="description" content="Sign up page for the ShoppingVerse distributed ecommerce app" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className='container'>
        <div className='p-3 flex justify-center'>
          <img src="/logo.svg" alt="ShoppingVerse Logo" />
        </div>
        <div className='p-4 flex justify-center'>
          <Card>
            <div>
              <h1 className="text-1xl p-1 font-bold">Sign up</h1>
            </div>
            <form onSubmit='' className='text-1l p-1 text-[#AEB6CA]'>
              {/* Name field */}
              <div className='flex text-sm p-2'>
                <UserIcon className="h-5 w-5"/>
                <label className='pd-0.5'>&nbsp;Name</label>
              </div>
              <input type="text" /><br />

              {/* e-mail field */}
              <div className='flex text-sm p-2'>
                <EnvelopeIcon className="h-5 w-5 align-middle"/>
                <label>&nbsp;Email</label>
              </div>
              <input type="text" />
              
              {/* Phone no. */}
              <div className='flex text-sm p-2'>
                <PhoneIcon className="h-5 w-5 align-middle"/>
                <label>&nbsp;Phone</label>
              </div>
              <input type="text" />

              {/* Birthday and Gender */}
              <div className='flex justify-between space-x-4'>
                {/* Birthday */}
                <div>
                  <div className='flex text-sm p-2'>
                    <CakeIcon className="h-5 w-5"/>
                    <label for="">&nbsp;Birthday</label>
                  </div>
                  <input type="date" id="dob" name="birthday"/>
                </div>   
                 
                {/* Gender */}
                <div>
                  <div className='flex text-sm p-2'>
                    <UserPlusIcon className="h-5 w-5 "/>
                    <label>&nbsp;Gender</label>
                  </div>
                  <select value='' onChange=''>
                    <option value="na">Do not specify</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div className='flex text-sm p-2'>
                <MapPinIcon className="h-5 w-5"/>
                <label>&nbsp;Address</label>
              </div>
              <input type="text" />
              
              {/* City and Zip code */}
              <div className='flex space-x-4 text-sm'>

                {/* City name */}
                <div>
                  <div className='flex text-sm p-2'>
                    <CursorArrowRippleIcon className='h-5 w-5' />
                    <label>&nbsp;City</label>
                  </div>
                  <input type="text" />
                </div>
                


                {/* Zip code */}
                <div>
                  <div className='flex text-sm p-2'>
                    <CursorArrowRaysIcon className='h-5 w-5'/>
                    <label>&nbsp;Zip Code</label>
                  </div>
                  <input type="text" />
                </div>
              </div>
              <br />



              <button onclick="activateLasers()" className='bg-gradient-to-r from-[#EB0C2B] to-[#7B38BA] text-white font-bold'>
                Signup as Buyer
              </button><br></br><br></br>
              <div class="items-center justify-center">
                <div class="rounded-md bg-gradient-to-r from-[#EB0C2B] to-[#7B38BA] p-0.5">
                <button onclick="activateLasers()" className='bg-[#181818] text-white font-bold'>
                  Signup as Seller
                </button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Signup;
