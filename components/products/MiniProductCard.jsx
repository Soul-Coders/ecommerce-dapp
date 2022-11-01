import { XCircleIcon } from '@heroicons/react/20/solid';
import { arrayRemove, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';
import { db } from '../../firebase-config';
import { BuyButton } from './BuyButton';
import { useRouter } from 'next/router';

export const MiniProductCard = ({
  id,
  img,
  name,
  price,
  ethPrice,
  setRemoveFromCart,
}) => {
  const router = useRouter();
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
    <div
      onClick={(e) =>
        !e.nativeEvent.target.id && router.push(`/buyer/products/${id}`)
      }
    >
      <div className="bg-[#252525] h-full justify-between rounded-xl p-3 w-full flex flex-col items-center">
        <div className="flex">
          <div>
            {/* Image */}
            <div className="flex flex-row md:items-center md:w-full">
              {/* Image */}
              <div className="w-3/5 md:w-3/5">
                <img
                  className="object-cover object-center w-4/5 aspect-1 rounded-xl"
                  src={img}
                  alt="product"
                />
              </div>

              {/* Name & Price*/}
              <div className="flex flex-col">
                <h2 className="text-sm lg:text-md xl:text-lg font-medium text-white/70">
                  {name}
                </h2>

                {/* Price */}
                <h3 className="text-sm lg:text-md xl:text-lg mt-1 font-bold">
                  ₹{price}
                </h3>
              </div>
            </div>
          </div>

          <div className="h-fit">
            <button onClick={remove}>
              <XCircleIcon className="w-6" id="button" />
            </button>
          </div>
        </div>
        <div className="pt-2 w-full">
          <BuyButton id={id} ethPrice={ethPrice} />
        </div>
      </div>
    </div>
  );
};
