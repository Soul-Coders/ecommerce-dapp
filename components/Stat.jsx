const Stat = ({ title, imagePath, bgColor, children }) => {
  console.log();
  return (
    <div className="px-3 py-4 flex gap-4 rounded-md bg-dimmed-black items-center">
      <div
        className={`p-4 flex justify-center rounded-full w-fit h-fit ${bgColor}`}
      >
        <img
          src={imagePath}
          alt="dollar"
          className="text-orange-600 w-6 lg:w-7"
        />
      </div>
      <div className="flex lg:gap-2 flex-col justify-center text-bold text-md md:text-sm lg:text-md">
        <h1 className="text-sm text-white/50 lg:text-base">{title}</h1>
        {children}
      </div>
    </div>
  );
};

Stat.defaultProps = {
  color: 'blue-400',
};

export default Stat;

// FF8500
