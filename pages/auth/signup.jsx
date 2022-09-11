import Head from 'next/head';
import Card from '../../components/Card';

import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CursorArrowRippleIcon,
  CursorArrowRaysIcon,
  CakeIcon,
  UserPlusIcon,
} from '@heroicons/react/24/outline';

const Signup = () => {
  return (
    <div>
      <Head>
        <title>Signup | ShoppingVerse</title>
        <meta
          name="description"
          content="Signup page for the ShoppingVerse distributed ecommerce app"
        />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main className="container py-12">
        <div className="flex justify-center">
          <div className="w-44">
            <img src="/logo.svg" alt="logo" className="w-full" />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Card>
            <h1 className="text-xl font-bold md:text-2xl">Sign up</h1>
            <form onSubmit={() => {}} className="mt-4 text-[#AEB6CA]">
              {/* Name field */}
              <div className="py-2 flex flex-col gap-2">
                <div className="flex gap-1 text-sm">
                  <UserIcon className="h-5 w-5" />
                  <label className="">Name</label>
                </div>
                <input type="text" />
              </div>

              {/* e-mail field */}
              <div className="py-2 flex flex-col gap-2">
                <div className="flex gap-1 text-sm">
                  <EnvelopeIcon className="h-5 w-5" />
                  <label className="">Email</label>
                </div>
                <input type="email" />
              </div>

              {/* Phone no. */}
              <div className="py-3 flex flex-col gap-2">
                <div className="flex gap-1 text-sm">
                  <PhoneIcon className="h-5 w-5" />
                  <label className="">Phone</label>
                </div>
                <input type="text" />
              </div>

              {/* Birthday and Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
                {/* Birthday */}
                <div className="py-3 flex flex-col gap-2">
                  <div className="flex gap-1 text-sm">
                    <CakeIcon className="h-5 w-5" />
                    <label className="">Birthday</label>
                  </div>
                  <input type="date" id="dob" name="birthday" />
                </div>

                {/* Gender */}
                <div className="py-3 flex flex-col gap-2">
                  <div className="flex gap-1 text-sm">
                    <UserPlusIcon className="h-5 w-5 " />
                    <label className="">Gender</label>
                  </div>
                  <select className="px-5 py-[9px]">
                    <option value="na">Do not specify</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div className="py-3 flex flex-col gap-2">
                <div className="flex gap-1 text-sm">
                  <MapPinIcon className="h-5 w-5" />
                  <label className="">Address</label>
                </div>
                <input type="text" />
              </div>

              {/* City and Zip code */}
              <div className="flex gap-4">
                {/* City name */}
                <div className="py-3 flex flex-col gap-2">
                  <div className="flex gap-1 text-sm">
                    <CursorArrowRippleIcon className="h-5 w-5" />
                    <label className="">City</label>
                  </div>
                  <input type="text" />
                </div>

                {/* Zip code */}
                <div className="py-3 flex flex-col gap-2">
                  <div className="flex gap-1 text-sm">
                    <CursorArrowRaysIcon className="h-5 w-5" />
                    <label className="">Zip Code</label>
                  </div>
                  <input type="text" />
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-6 mb-2 md:gap-5 text-white font-medium">
                <button className="bg-gradient-to-r from-brand-red to-brand-purple rounded-md py-2.5 text-sm lg:text-base">
                  Signup as Buyer
                </button>
                <button className="rounded-md bg-gradient-to-r from-brand-red to-brand-purple">
                  <div className="rounded-md py-2.5 bg-[#252525] m-[1px] text-sm lg:text-base">
                    Signup as Seller
                  </div>
                </button>
              </div>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Signup;
