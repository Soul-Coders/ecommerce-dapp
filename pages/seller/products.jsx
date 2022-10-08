import Page from '../../components/Page';
import { PlusIcon } from '@heroicons/react/20/solid';
import { ProductCard } from '../../components/products/ProductCard';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { ProductForm } from '../../components/products/ProductForm';

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    {
      img: '/product-1.jpg',
      name: 'Black fashion bag',
      price: '2000',
    },
    {
      img: '/product-2.jpg',
      name: 'Wood leather watch',
      price: '1000',
    },
    {
      img: '/product-3.jpg',
      name: 'Wireless headphones',
      price: '1500',
    },
    {
      img: '/product-4.jpg',
      name: 'Blue skate shoes',
      price: '800',
    },
    {
      img: '/product-5.jpg',
      name: 'Navy mens outerwear',
      price: '2000',
    },
    {
      img: '/product-6.jpg',
      name: 'Anchor leather bracelet',
      price: '500',
    },
  ];

  return (
    <div>
      <Page name='Products'
        options={
          <div className='flex'>
            <div className="flex justify-end items-center pr-1">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-sm px-1 md:text-base bg-blue-800 h-full font-semibold rounded-md flex items-center gap-1"
              >
                Add Product
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>

            <select
              id="status"
              className="pr-1 bg-dimmed-black w-fit h-fit cursor-pointer text-white  !outline-none font-semibold"
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
                      <ProductForm setIsOpen={setIsOpen} />
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {products.map(({ img, name, price }) => (
              <ProductCard key={img} img={img} name={name} price={price} />
            ))}
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Products;
