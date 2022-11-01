import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { useContext } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';
import { useRouter } from 'next/router';

export const CartButton = ({ id }) => {
  const router = useRouter();
  const { currentAccount } = useContext(ConnectionContext);
  const addToCart = async () => {
    try {
      const docRef = doc(db, 'cart', currentAccount.walletAddress);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await updateDoc(docRef, {
          productId: arrayUnion(id),
        });
      } else {
        await setDoc(docRef, {
          productId: [id],
        });
      }
      console.log('Success');
      router.push('/buyer/cart');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        id="button"
        onClick={addToCart}
        className="w-full bg-blue-600 rounded-md py-2"
      >
        To cart
      </button>
    </div>
  );
};
