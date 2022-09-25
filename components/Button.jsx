export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`${className} w-full rounded-full text-sm flex gap-4 items-center justify-center lg:text-base`}
      {...props}
    >
      {children}{' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 lg:h-7 lg:w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  );
};
