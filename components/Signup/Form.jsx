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

export default function Form() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      dob: event.target.dob.value,
      gender: event.target.gender.value,
      addr: event.target.addr.value,
      city: event.target.city.value,
      zip: event.target.zip.value
    };

    console.log(data)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 text-[#AEB6CA]"
    >
      {/* Name field */}
      <div className="py-2 flex flex-col gap-2">
        <div className="flex gap-1 text-sm">
          <UserIcon className="h-5 w-5" />
          <label htmlFor='name'>Name</label>
        </div>
        <input type="text" id='name'/>
      </div>

      {/* e-mail field */}
      <div className="py-2 flex flex-col gap-2">
        <div className="flex gap-1 text-sm">
          <EnvelopeIcon className="h-5 w-5" />
          <label htmlFor='email'>Email</label>
        </div>
        <input type="email" id='email' required/>
      </div>

      {/* Phone no. */}
      <div className="py-3 flex flex-col gap-2">
        <div className="flex gap-1 text-sm">
          <PhoneIcon className="h-5 w-5" />
          <label htmlFor='phone'>Phone</label>
        </div>
        <input type="tel" id="phone" name="phone" pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$" required />


      </div>

      {/* Birthday and Gender */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
        {/* Birthday */}
        <div className="py-3 flex flex-col gap-2">
          <div className="flex gap-1 text-sm">
            <CakeIcon className="h-5 w-5" />
            <label htmlFor='dob'>Birthday</label>
          </div>
          <input type="date" id="dob" name="birthday" />
        </div>

        {/* Gender */}
        <div className="py-3 flex flex-col gap-2">
          <div className="flex gap-1 text-sm">
            <UserPlusIcon className="h-5 w-5 " />
            <label htmlFor='gender'>Gender</label>
          </div>
          <select id='gender' className="px-5 py-[9px]">
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
          <label htmlFor='address'>Address</label>
        </div>
        <input type="text" id='addr' required/>
      </div>

      {/* City and Zip code */}
      <div className="flex gap-4">
        {/* City name */}
        <div className="py-3 flex flex-col gap-2">
          <div className="flex gap-1 text-sm">
            <CursorArrowRippleIcon className="h-5 w-5" />
            <label htmlFor='City'>City</label>
          </div>
          <input type="text" id='city' required />
        </div>

        {/* Zip code */}
        <div className="py-3 flex flex-col gap-2">
          <div className="flex gap-1 text-sm">
            <CursorArrowRaysIcon className="h-5 w-5" />
            <label htmlFor='zip'>Zip Code</label>
          </div>
          <input id="zip" name="zip" type="text" pattern='[0-9]*' />
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
  );
}
