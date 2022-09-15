export const Features = () => {
  const features = [
    {
      icon: '/payment.svg',
      title: 'Instant Payments',
    },
    {
      icon: '/fraud.svg',
      title: 'Fraud Prevention',
    },
    {
      icon: './nft.svg',
      title: 'NFT Based Warranties',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto xl:max-w-5xl">
      <div className="grid grid-cols-3">
        {features.map(({ icon, title }) => (
          <div
            className="flex gap-4 items-center justify-center even:border-x-2 border-white/20"
            key={title}
          >
            <img
              src={icon}
              alt={title}
              className="w-9 h-9 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
            />
            <h3 className="text-sm lg:text-base xl:text-lg">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
