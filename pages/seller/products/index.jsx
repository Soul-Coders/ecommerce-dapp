import Page from '../../../components/Page';
import { PlusIcon } from '@heroicons/react/20/solid';
import { ProductCard } from '../../../components/products/ProductCard';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useContext, useEffect, useState } from 'react';
import { ProductForm } from '../../../components/products/ProductForm';
import { ConnectionContext } from '../../../context/ConnectionContext';
import { UpdateForm } from '../../../components/products/UpdateForm';

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState('');
  const [formData, setFormData] = useState({});
  const [sellerProducts, setSellerProducts] = useState([]);
  const { getContract } = useContext(ConnectionContext);

  const fetchSellerProducts = async () => {
    const contract = getContract();
    const products = await contract.getSellerProducts();
    setSellerProducts(products);
  };

  useEffect(() => {
    fetchSellerProducts();
  }, []);

  const products = [
    {
      img: '/product-1.jpg',
      name: 'Black fashion bag',
      description: 'test',
      price: '2000',
      id: '321341',
    },
    {
      img: '/product-2.jpg',
      name: 'Wood leather watch',
      description: 'test',
      price: '1000',
      id: '321342',
    },
    {
      img: '/product-3.jpg',
      name: 'Wireless headphones',
      description: 'test',
      price: '1500',
      id: '321343',
    },
    {
      img: '/product-4.jpg',
      name: 'Blue skate shoes',
      description: 'test',
      price: '800',
      id: '321344',
    },
    {
      img: '/product-5.jpg',
      name: 'Navy mens outerwear',
      description: 'test',
      price: '2000',
      id: '321345',
    },
    {
      img: '/product-6.jpg',
      name: 'Anchor leather bracelet',
      description: 'test',
      price: '500',
      id: '321346',
    },
  ];

  return (
    <div>
      <Page
        name="Products"
        options={
          <div className="flex w-fit gap-5 items-center">
            <button
              onClick={() => {
                setFormType('Add');
                setIsOpen((prev) => !prev);
              }}
              className="text-sm px-5 sm:px-6 py-3 md:text-base bg-blue-800 font-semibold rounded-md flex items-center gap-3"
            >
              Add Product
              <PlusIcon className="h-5 w-5" />
            </button>
            <select
              id="status"
              className="bg-dimmed-black w-32 md:w-40 text-sm py-3 md:text-base cursor-pointer text-white !outline-none font-semibold"
            >
              <option value="All" defaultChecked>
                All
              </option>
              <option value="Active">Active</option>
              <option value="NA">Not Available</option>
            </select>
          </div>
        }
      >
        <div className="w-full px-3 py-5 mb-7 bg-dimmed-black rounded-md mt-2 md:px-5 xl:p-7">
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={() => setIsOpen((prev) => !prev)}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px]" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-dimmed-black p-6 text-left align-middle shadow-xl transition-all">
                      {formType == 'Add' ? (
                        <ProductForm
                          setIsOpen={setIsOpen}
                          fetchSellerProducts={fetchSellerProducts}
                        />
                      ) : (
                        <UpdateForm
                          setIsOpen={setIsOpen}
                          formData={formData}
                          fetchSellerProducts={fetchSellerProducts}
                        />
                      )}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-5">
            {sellerProducts &&
              sellerProducts.map(
                ({
                  productId,
                  productName,
                  productDescription,
                  productGallery,
                  productPriceInr,
                }) => {
                  if (productId.length > 0) {
                    return (
                      <ProductCard
                        key={productId}
                        id={productId}
                        img={productGallery[0].split('|')[1]}
                        name={productName}
                        description={productDescription}
                        price={productPriceInr}
                        fetchSellerProducts={fetchSellerProducts}
                        setIsOpen={setIsOpen}
                        setFormType={setFormType}
                        setFormData={setFormData}
                      />
                    );
                  }
                  return null;
                }
              )}
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Products;
