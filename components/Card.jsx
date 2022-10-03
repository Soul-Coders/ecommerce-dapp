const Card = ({ children, className }) => {
  return (
    <div className={`p-4 bg-[#181818] w-fit rounded-md md:p-5 ${className}`}>
      <div className="flex flex-1 flex-col justify-center">{children}</div>
    </div>
  );
};

export default Card;
