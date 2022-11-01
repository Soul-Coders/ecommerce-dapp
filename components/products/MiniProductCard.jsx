import { XCircleIcon } from '@heroicons/react/20/solid';
import { arrayRemove, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';
import { db } from '../../firebase-config';
import Link from 'next/link';
import BuyButton from './BuyButton';
export const MiniProductCard = ({
  id,
  img,
  name,
  price,
  setRemoveFromCart,
}) => {
  const { currentAccount } = useContext(ConnectionContext);
  const remove = async () => {
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
    <Link href={`/buyer/products/${id}`}>
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
          <div className='pt-2 w-full'>
            <BuyButton id={id} />
          </div>
        </div>
        <div className="h-fit">
          <button onClick={remove}>
            <XCircleIcon className="w-6" />
          </button>
        </div>
      </div>
    </Link>
  );
};

// export default MiniProductCard
