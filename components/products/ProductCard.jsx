import ReactStars from 'react-rating-stars-component';
import { useRouter } from 'next/router';
import { BuyButton } from './BuyButton';
import { CartButton } from './CartButton';
import DiscardButton from './DiscardButton';
import EditButton from './EditButton';

export const ProductCard = ({
  id,
  img,
  name,
  description,
  price,
  ethPrice,
  rating,
  fetchSellerProducts,
  setIsOpen,
  setFormType,
  setFormData,
  viewOnly,
}) => {
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

  const router = useRouter();
  const root = router.asPath.split('/')[1];

  return (
    <div
      onClick={(e) =>
        e.target.id !== 'button' && router.push(`/${root}/products/${id}`)
      }
    >
      <div className="bg-[#252525] rounded-xl p-3 flex flex-col flex-1 justify-between min-h-full">
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
              <div className="z-0 flex flex-col md:grid md:grid-cols-2 justify-between gap-3 mt-6 font-medium">
                <EditButton updateProduct={updateProduct}/> 
                <DiscardButton id={id} fetchSellerProducts={fetchSellerProducts}/>
              </div>
            )) || (
              <div className="z-0 flex flex-col md:grid md:grid-cols-2 justify-between gap-3 mt-6 font-medium">
                <CartButton id={id} />
                <BuyButton
                  id={id}
                  ethPrice={ethPrice}
                  name={name}
                  description={description}
                  image={img}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
