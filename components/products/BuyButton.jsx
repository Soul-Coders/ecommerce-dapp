import { useContext } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';
import { uploadJsonToIpfs } from '../../utils/uploadJsonToIpfs';

export const BuyButton = ({ id, ethPrice, name, description, image }) => {
  const { getContract, getNftContract, currentAccount } = useContext(ConnectionContext);
  const buyProduct = async () => {
    try {
      const contract = getContract();
      const tx = await contract.buyProduct(id, { value: ethPrice });
      await tx.wait();
      const nftMetadata = { name, description, image };
      const tokenUri = await uploadJsonToIpfs(nftMetadata);
      const nftContract = getNftContract();
      const token = await nftContract.mint(tokenUri);
      await token.wait();
      const product = await contract.getProduct(id)
      const orderTx = await contract.placeOrder(
        token.hash,
        (new Date()).toJSON().slice(0, 10),
        currentAccount.info,
        product,
        1,
        50
      )
      await orderTx.wait()
      console.log(token.hash)
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
