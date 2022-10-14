export const ProductCard = ({ id, img, name, price }) => {
  return (
    <div className="bg-[#252525] rounded-xl p-3">
      <div className="">
        <img
          className="object-cover object-center w-full aspect-1 rounded-xl"
          src={img}
          alt="product"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-medium">
          <span className="text-brand-purple">#</span>
          {id}
        </h2>
        <h2 className="text-xl font-medium text-white/70 mt-2">{name}</h2>
        <h3 className="text-xl mt-1 font-bold">₹{price}</h3>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-3 mt-6 font-medium">
        <button className="w-full md:order-2 bg-white/20 rounded-md py-2">
          Edit
        </button>
        <button className="w-full bg-red-500 rounded-md py-2">Discard</button>
      </div>
    </div>
  );
};
