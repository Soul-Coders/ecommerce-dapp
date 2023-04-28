import { useContext } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';
import { uploadJsonToIpfs } from '../../utils/uploadJsonToIpfs';
import { db } from '../../firebase-config';
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { formatEther } from 'ethers/lib/utils';
import { uid } from 'uid';

export const BuyButton = ({ id, ethPrice, name, description, image }) => {
  const { getContract, getNftContract, currentAccount } =
    useContext(ConnectionContext);

  const saveTransactions = async ({
    to,
    from,
    transactionHash,
    blockHash,
    blockNumber,
    gasUsed,
  }) => {
    const receipt = {
      to,
      from,
      transactionHash,
      blockHash,
      blockNumber,
      gasUsed: formatEther(gasUsed),
      date: new Date().toJSON().slice(0, 10),
      name: currentAccount.info.name,
    };
    const docRef = doc(db, 'buyer_transactions', currentAccount.walletAddress);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(docRef, {
        transactions: arrayUnion(receipt),
      });
    } else {
      await setDoc(docRef, {
        transactions: [receipt],
      });
    }
  };

  const buyProduct = async () => {
    try {
      const contract = getContract();
      const tx = await contract.buyProduct(id, { value: ethPrice });
      const buyReceipt = await tx.wait(1);
      saveTransactions(buyReceipt);
      const nftMetadata = { name, description, image };
      const tokenUri = await uploadJsonToIpfs(nftMetadata);
      const nftContract = getNftContract();
      const token = await nftContract.mint(tokenUri);
      const nftReceipt = await token.wait(1);
      saveTransactions(nftReceipt);
      const product = await contract.getProduct(id);
      const orderTx = await contract.placeOrder(
        uid(6),
        new Date().toJSON().slice(0, 10),
        currentAccount.info,
        product,
        1,
        50
      );
      const orderReceipt = await orderTx.wait(1);
      saveTransactions(orderReceipt);
      console.log(token.hash);
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
