const List = ({ colnames, children, align, className }) => {
  return (
    <div className="w-full px-3 p-5 py-5 mb-7 text-base bg-dimmed-black rounded-md mt-2 md:px-5 xl:p-7">
      <div
        className={`hidden md:${align} rounded-md text-white/50 pt-6 pb-2 text-sm p-3 ${className}`}
      >
        {colnames.map((colname, i) => (
          <h2 key={i}>{colname}</h2>
        ))}
      </div>
      {children.map(({ props }, i) => (
        <div key={i} className="">
          <Row
            className={
              'flex gap-4 flex-wrap justify-between md:gap-0 md:' + align
            }
          >
            {props.children}
          </Row>
        </div>
      ))}
    </div>
  );
};

const Row = ({ children, className, key }) => {
  return (
    <div
      key={key}
      className={
        className + '  items-center mt-4  bg-[#252525]/70 p-4 rounded-md lg:p-4'
      }
    >
      {children.map((child, i) => (
        <div key={i} className="basis-1/3 md:basis-0">
          {child}
        </div>
      ))}
    </div>
  );
};

export default List;
