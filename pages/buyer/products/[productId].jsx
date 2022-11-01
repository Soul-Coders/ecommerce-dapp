import Page from '../../../components/Page';
import Review from '../../../components/products/Review';
import ReactStars from 'react-rating-stars-component';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { ConnectionContext } from '../../../context/ConnectionContext';
import BuyButton from '../../../components/products/BuyButton';
import CartButton from '../../../components/products/CartButton';

const seller = {
    name: 'Mynt Clothings',
    rating: 4.5,
}
const reviews = [
//   {
//     title: 'A very good product',
//     description: 'I absolutely love the product... An amazing purchase!!!',
//     rating: 3,
//     sentiment: 'positive',
//   },
//   {
//     title: 'What a bad purchase',
//     description: 'I made a huge mistake purchasing this product...',
//     rating: 2,
//     sentiment: 'negative',
//   },
//   {
//     title: 'A very good product',
//     description: 'I kinda loved the product... An amazing purchase!!!',
//     rating: 1.5,
//     sentiment: 'positive',
//   },
//   {
//     title: 'Ehhh Lorem ipsum??? ',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     rating: 5,
//     sentiment: 'neutral',
//   },
];

const ProductDetails = () => {
  const { getContract } = useContext(ConnectionContext);
  const router = useRouter();
  const { productId } = router.query;
  
  const getProduct = async (id) => {
    const contract = getContract();
    return await contract.getProduct(id);
  };
  const [product, setProduct] = useState();

  useEffect(() => {
    router.isReady && getProduct(productId).then(product => setProduct(product))
  }, [productId, router.isReady]);
  const rating = 5;
  const galley = [
    '/product-1.jpg',
    '/product-2.jpg',
    '/product-3.jpg',
    '/product-4.jpg',
    'product-5.jpg',
  ];
  const [imageSRC, setImgSRC] = useState()
  return (
    <div>
      <Page name={'Product Details'}>
        <div className="w-full px-3 py-5 mb-7 bg-dimmed-black rounded-t-lg mt-2 md:px-5 xl:p-7">
          <h1 className="font-bold text-x md:text-2xl mb-2">
            {product?.productName}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-2">
            {/* Image gallery */}
            <div className="bg-[#252525] p-2 rounded-lg">
              {product && <img
                src={imageSRC || product.productImage}
                alt="product image"
                className="object-cover object-center w-full max-h-96 aspect-1 rounded-xl"
              /> || 'Loading'}
              <hr className="mt-2" />
              <div className="w-full rounded-lg mt-2 flex gap-2 scrollbar-hide overflow-x-scroll">
                {galley?.map((imgURL) => (
                  <img
                    src={imgURL}
                    alt="product image"
                    className="w-40 rounded-lg cursor-pointer"
                    onClick={() => setImgSRC(imgURL)}
                  />
                ))}
              </div>
            </div>

            {/* Description, info */}
            <div className="flex flex-col justify-between">
              <div className="mb-2 h-full bg-[#252525] rounded-lg p-3 font-medium text-sm sm:text-base">
                {product?.productDescription}
              </div>
              <div className='bg-[#252525] rounded-lg p-3 mb-2 font-semibold text-base mt-1 items-center gap-2 flex'>
                <p className='mr-1'>Seller:</p>
                <p>{seller.name}</p>
                <ReactStars
                    count={5}
                    size={12}
                    edit={false}
                    value={seller.rating}
                    isHalf={true}
                    activColor="#ffd700"
                />
              </div>
              <div className="">
                <div className=" bg-[#252525] rounded-lg p-3 font-medium text-sm sm:text-base flex justify-between gap-3">
                  <ReactStars
                    count={5}
                    size={18}
                    edit={false}
                    value={rating}
                    isHalf={true}
                    activeColor="#ffd700"
                  />
                  <h1 className="font-semibold text-xl mt-1 items-center">
                        <span className="mr-1">₹</span>
                        {product?.productPriceInr}
                    </h1>
                </div>
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 justify-between gap-3 mt-2 font-medium">
                  <CartButton id={product?.productId} />
                  <BuyButton id={product?.productId} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-h-96 overflow-y-scroll px-3 py-5 mb-7 bg-dimmed-black rounded-b-lg mt-2 md:px-5 xl:p-7 ">
          <h1 className="font-bold text-base md:text-xl">Reviews</h1>
          { reviews.length &&
          reviews.map(({ title, description, rating }) => (
            <Review title={title} description={description} rating={rating} /> || <h1>Loading</h1>
          )) 
          || 
          <h1 className='h-full flex justify-center text-lg'>No reviews yet :(</h1>
          } 
        </div>
      </Page>
    </div>
  );
};

export default ProductDetails;
