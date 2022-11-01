import { useContext } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';

export const BuyButton = ({ id, ethPrice }) => {
  const { getContract } = useContext(ConnectionContext);
  const buyProduct = async () => {
    try {
      const contract = getContract();
      const tx = await contract.buyProduct(id, { value: ethPrice });
      await tx.wait();
      console.log('Success');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        id="button"
        onClick={buyProduct}
        className="w-full md:order-2 bg-green-600 rounded-md py-2"
      >
        Buy Now
      </button>
    </div>
  );
};
