import Link from 'next/link';

export const NftCard = ({ id, index, name, image }) => {
  return (
    <div
      key={index}
      className="bg-white/[0.03] rounded-xl border border-white/25 shadow-lg p-3 flex flex-col flex-1 justify-between min-h-full"
    >
      <div className="">
        <img
          className="object-cover object-center w-full aspect-1 rounded-xl"
          src={image}
          alt="product"
        />
        <div className="mt-4">
          <h2 className="text-lg font-medium text-white mt-2">{name}</h2>
        </div>
        <div className="flex flex-col justify-between gap-3 mt-6 font-medium">
          <Link
            href={`https://testnets.opensea.io/assets/goerli/${process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS}/${id}`}
            passHref={true}
          >
            <a target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-gradient-to-r from-brand-red to-brand-purple rounded-md py-2">
                View NFT
              </button>
            </a>
          </Link>
          <button
            //onClick={deleteProduct}
            className="w-full bg-white/10 rounded-md py-2"
          >
            Claim Warranty
          </button>
        </div>
      </div>
    </div>
  );
};
