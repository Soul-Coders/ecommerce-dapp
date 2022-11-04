import { useContext } from "react";
import { ConnectionContext } from "../../context/ConnectionContext";

const DiscardButton = ({id, fetchSellerProducts}) => {
    const { getContract } = useContext(ConnectionContext);
    const deleteProduct = async () => {
        try {
          const contract = getContract();
          const tx = await contract.deleteProduct(id);
          await tx.wait();
          console.log('Success');
          fetchSellerProducts();
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div>
      <button
            id={'button'}
            onClick={deleteProduct}
            className="w-full bg-red-500 rounded-md py-2"
        >
            Discard
        </button>
    </div>
  )
}

export default DiscardButton
