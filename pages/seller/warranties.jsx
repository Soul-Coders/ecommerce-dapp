import Page from '../../components/Page';
import { WarrantyCard } from '../../components/warranties/WarrantyCard';

const Warranties = () => {
  const warranties = [
    {
      productImage: '/product-5.jpg',
      expiryDate: '29 Aug 2024',
      productName: 'Navy Mens Outerwear',
    },
    {
      productImage: '/product-3.jpg',
      expiryDate: '20 Aug 2023',
      productName: 'Wireless Headphones',
    },
  ];

  return (
    <div>
      <Page name="Warranties">
        <div className="w-full px-3 py-5 mb-7 bg-dimmed-black rounded-md mt-2 md:px-5 xl:p-7">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:gap-8">
            {warranties.map(({ productImage, expiryDate, productName }) => (
              <WarrantyCard
                key={productImage}
                productImage={productImage}
                expiryDate={expiryDate}
                productName={productName}
              />
            ))}
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Warranties;
