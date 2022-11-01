import { useContext } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';
import ReactStars from 'react-rating-stars-component';
import { useRouter } from 'next/router';
import Link from 'next/link';
import BuyButton from './BuyButton';
import CartButton from './CartButton';

export const ProductCard = ({
  id,
  img,
  name,
  description,
  price,
  rating,
  fetchSellerProducts,
  setIsOpen,
  setFormType,
  setFormData,
  viewOnly,
}) => {
  const { getContract } = useContext(ConnectionContext);

  const updateProduct = async () => {
    setFormData({
      id: id,
      title: name,
      desc: description,
      price: price,
    });
    setFormType('Update');
    setIsOpen((prev) => !prev);
  };

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
  const router = useRouter();
  const root = router.asPath.split('/')[1];

  return (
    // <Link href={`/${root}/products/${id}`}>
    
      <div
        className="bg-[#252525] rounded-xl p-3 flex flex-col flex-1 justify-between min-h-full">
        <div className="">
          <img
            className="object-cover object-center w-full aspect-1 rounded-xl"
            src={img}
            alt="product"
          />
          <div className="mt-4">
            <div className="flex justify-between">
              {root == 'seller' && (
                <h2 className="text-lg font-medium">
                  <span className="text-brand-purple">#</span>
                  {id.toUpperCase()}
                </h2>
              )}
              <ReactStars
                count={5}
                size={18}
                edit={false}
                value={rating}
                isHalf={true}
                activeColor="#ffd700"
              />
            </div>
            <div className="flex justify-between items-baseline gap-2">
              <h2 className="text-xl font-medium text-white/70 mt-2">{name}</h2>
              <h3 className="text-xl mt-1 font-bold">₹{price}</h3>
            </div>
          </div>
        </div>
        {!viewOnly && (
          <div>
            {(root == 'seller' && (
              <div className="flex flex-col md:flex-row justify-between gap-3 mt-6 font-medium">
                <button
                  onClick={updateProduct}
                  className="w-full md:order-2 bg-white/20 rounded-md py-2"
                >
                  Edit
                </button>
                <button
                  onClick={deleteProduct}
                  className="w-full bg-red-500 rounded-md py-2"
                >
                  Discard
                </button>
              </div>
            )) || (
              <div className="flex flex-col md:grid md:grid-cols-2 justify-between gap-3 mt-6 font-medium">
                <CartButton id={id} />
                <BuyButton id={id} />
              </div>
            )}
          </div>
        )}
      </div>
    // </Link>
  );
};
