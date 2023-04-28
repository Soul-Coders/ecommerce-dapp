import { XMarkIcon } from '@heroicons/react/20/solid';
import { parseEther } from 'ethers/lib/utils';
import { useContext } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';
import { convertEthToInr } from '../../utils/convertEthToInr';
import { saveTransactions } from './ProductForm';

export const UpdateForm = ({ setIsOpen, formData, fetchSellerProducts }) => {
  const { id, title, desc, price } = formData;
  const { getContract, currentAccount } = useContext(ConnectionContext);

  const updateProduct = async (event) => {
    try {
      event.preventDefault();
      const inrRate = await convertEthToInr();
      const productName = event.target.title.value;
      const productDescription = event.target.description.value;
      const productPriceInr = event.target.price.value;
      const productPriceEth = parseEther(
        (parseFloat(productPriceInr) / inrRate).toFixed(6)
      );

      const contract = getContract();
      const tx = await contract.updateProduct(
        id,
        productName,
        productDescription,
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
    <form onSubmit={updateProduct}>
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Update Product</h1>
        <XMarkIcon
          onClick={() => setIsOpen((prev) => !prev)}
          className="h-6 w-6 cursor-pointer md:h-7 md:w-7"
        />
      </div>
      <div className="py-2 flex flex-col gap-2">
        <label htmlFor="title">Product title</label>
        <input type="text" id="title" defaultValue={title} required />
      </div>
      <div className="py-2 flex flex-col gap-2">
        <label htmlFor="description">Full description</label>
        <textarea
          type="text"
          id="description"
          defaultValue={desc}
          className="resize-none h-32"
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
            defaultValue={price}
            className="block w-full rounded-md pl-7 pr-12"
            placeholder="0.00"
            required
          />
        </div>
      </div>
      <div className="w-full flex justify-end mt-4">
        <button className="px-5 py-2 bg-blue-800 font-semibold rounded-md">
          Save
        </button>
      </div>
    </form>
  );
};
