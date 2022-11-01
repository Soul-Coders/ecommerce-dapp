const BuyButton = ({ id }) => {
  return (
    <div className="">
      <button
        id="button"
        // onClick={buyNow}
        className="w-full md:order-2 bg-green-600 rounded-md py-2"
      >
        Buy Now
      </button>
    </div>
  );
};

export default BuyButton;
