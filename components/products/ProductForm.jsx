import { XMarkIcon } from '@heroicons/react/20/solid';

export const ProductForm = ({ setIsOpen }) => {
  return (
    <form onSubmit={() => {}}>
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Add Product</h1>
        <XMarkIcon
          onClick={() => setIsOpen((prev) => !prev)}
          className="h-6 w-6 cursor-pointer md:h-7 md:w-7"
        />
      </div>
      <div className="py-2 flex flex-col gap-2">
        <label htmlFor="title">Product title</label>
        <input type="text" id="title" defaultValue="" required />
      </div>
      <div className="py-2 flex flex-col gap-2">
        <label htmlFor="description">Full description</label>
        <textarea
          type="text"
          id="description"
          defaultValue=""
          className="resize-none h-32"
          required
        />
      </div>
      <div className="py-2 flex flex-col gap-2">
        <label htmlFor="image">Product image</label>
        <input
          type="file"
          id="image"
          className="file:py-2 file:px-5 file:border-0 file:text-sm hover:file:cursor-pointer file:rounded-md file:mr-5 file:bg-white/10 file:text-white file:-ml-3"
          accept="image/png, image/jpeg"
          required
        />
      </div>
      <div className="py-2 flex flex-col gap-2">
        <label htmlFor="name">Price</label>
        <div className="relative rounded-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="">₹</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md pl-7 pr-12"
            placeholder="0.00"
          />
        </div>
      </div>
      <div className="w-full flex justify-end mt-4">
        <button className="px-5 py-2 bg-blue-800 font-semibold rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
};