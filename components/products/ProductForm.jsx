import { XMarkIcon } from '@heroicons/react/20/solid';
import { parseEther } from 'ethers/lib/utils';
import { useContext } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';
import { convertEthToInr } from '../../utils/convertEthToInr';
import { Web3Storage } from 'web3.storage';
import { uid } from 'uid';
import { formatEther } from 'ethers/lib/utils';
import { db } from '../../firebase-config';
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const client = new Web3Storage({
  token: process.env.NEXT_PUBLIC_WEB3_STORAGE_API_TOKEN,
});

export const saveTransactions = async (
  { to, from, transactionHash, blockHash, blockNumber, gasUsed },
  currentAccount
) => {
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
  const docRef = doc(db, 'seller_transactions', currentAccount.walletAddress);
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

export const ProductForm = ({ setIsOpen, fetchSellerProducts }) => {
  const { getContract, currentAccount } = useContext(ConnectionContext);

  const addProduct = async (event) => {
    try {
      event.preventDefault();
      const productId = uid(6);
      const inrRate = await convertEthToInr();
      const productName = event.target.title.value;
      const productDescription = event.target.description.value;
      const productGallery = event.target.image.files;
      const web3URIs = await Promise.all(
        Object.values(productGallery).map(async (media) => {
          const fileName = uid(16);
          const newFile = new File([media], fileName, {
            type: media.type,
          });
          const rootCid = await client.put([newFile], {
            name: fileName,
          });
          const web3URI = `${
            media.type.split('/')[0]
          }|https://${rootCid}.ipfs.dweb.link/${fileName}`;
          return web3URI;
        })
      );

      const productPriceInr = event.target.price.value;
      const productPriceEth = parseEther(
        (parseFloat(productPriceInr) / inrRate).toFixed(6)
      );

      const contract = getContract();
      const tx = await contract.addProduct(
        productId,
        productName,
        productDescription,
        web3URIs,
        productPriceInr,
        productPriceEth
      );

      const receipt = await tx.wait(1);
      saveTransactions(receipt, currentAccount);
      console.log('Success');
      fetchSellerProducts();
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={addProduct}>
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Add Product</h1>
        <XMarkIcon
          onClick={() => setIsOpen((prev) => !prev)}
          className="h-6 w-6 cursor-pointer md:h-7 md:w-7"
        />
      </div>
      <div className="py-2 flex flex-col gap-2">
        <label htmlFor="title">Product title</label>
        <input type="text" id="title" defaultValue="" required />
      </div>
      <div className="py-2 flex flex-col gap-2">
        <label htmlFor="description">Full description</label>
        <textarea
          type="text"
          id="description"
          defaultValue=""
          className="resize-none h-32"
          required
        />
      </div>
      <div className="py-2 flex flex-col gap-2">
        <label htmlFor="image">Product image</label>
        <input
          type="file"
          id="image"
          className="file:py-2 file:px-5 file:border-0 file:text-sm hover:file:cursor-pointer file:rounded-md file:mr-5 file:bg-white/10 file:text-white file:-ml-3"
          accept="image/png, image/jpeg, video/mp4"
          multiple
          required
        />
      </div>
      <div className="py-2 flex flex-col gap-2">
        <label htmlFor="name">Price</label>
        <div className="relative rounded-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="">₹</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md pl-7 pr-12"
            placeholder="0.00"
            required
          />
        </div>
      </div>
      <div className="w-full flex justify-end mt-4">
        <button className="px-5 py-2 bg-blue-800 font-semibold rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
};
