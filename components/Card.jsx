const Card = ({ children }) => {
  return (
    <div className="p-4 bg-[#181818] w-fit rounded-md md:p-5">
      <div className="flex flex-1 flex-col justify-center">{children}</div>
    </div>
  );
};

export default Card;
