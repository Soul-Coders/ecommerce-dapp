import { XCircleIcon } from '@heroicons/react/20/solid';
import { arrayRemove, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';
import { db } from '../../firebase-config';

export const MiniProductCard = ({
  id,
  img,
  name,
  price,
  setRemoveFromCart,
}) => {
  const { currentAccount } = useContext(ConnectionContext);
  const close = async () => {
    const docRef = doc(db, 'cart', currentAccount.walletAddress);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(docRef, {
        productId: arrayRemove(id),
      });
      setRemoveFromCart((prev) => !prev);
    }
  };
  return (
    <div className="bg-[#252525] rounded-xl p-3 w-full flex">
      <div className="flex flex-col items-center">
        <div className="flex flex-row md:items-center md:w-full">
          <div className="w-3/5 md:w-3/5">
            <img
              className="object-cover object-center w-4/5 aspect-1 rounded-xl"
              src={img}
              alt="product"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-sm lg:text-md xl:text-lg font-medium text-white/70">
              {name}
            </h2>
            <h3 className="text-sm lg:text-md xl:text-lg mt-1 font-bold">
              ₹{price}
            </h3>
          </div>
        </div>
        <button className="w-full mt-2 md:mt-4 lg:w-56 text-xs md:h-8 lg:h-10 lg:text-sm xl:text-md bg-green-700 rounded-md py-2 md:py-0">
          Buy Single
        </button>
      </div>
      <div className="h-fit">
        <button onClick={close}>
          <XCircleIcon className="w-6" />
        </button>
      </div>
    </div>
  );
};

// export default MiniProductCard
