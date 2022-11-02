import Page from '../../../components/Page';
import { useContext, useEffect, useState } from 'react';
import { ConnectionContext } from '../../../context/ConnectionContext';
import { ProductCard } from '../../../components/products/ProductCard';

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const { getContract } = useContext(ConnectionContext);
  const fetchAllProducts = async () => {
    const contract = getContract();
    const products = await contract.getAllProducts();
    return products;
  };
  useEffect(() => {
    fetchAllProducts()
      .then((products) => {
        setAllProducts(products);
        return products;
      })
      .then((products) => {
        setSearchedProducts(products);
      });
  }, []);
  return (
    <div>
      <Page
        name={'Products'}
        items={allProducts}
        setSearches={setSearchedProducts}
      >
        <div className="w-full px-3 py-5 mb-7 bg-dimmed-black rounded-md mt-2 md:px-5 xl:p-7">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-5">
            {searchedProducts?.map(
              ({
                productId,
                productName,
                productDescription,
                productGallery,
                productPriceInr,
                productPriceEth,
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
                      ethPrice={productPriceEth}
                    />
                  );
                }
                return null;
              }
            )}
          </div>
          {!searchedProducts && (
            <h1 className="w-full flex justify-center p-3 font-bold text-lg">
              No products found :(
            </h1>
          )}
        </div>
      </Page>
    </div>
  );
};

export default Products;
