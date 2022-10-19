import Page from '../../components/Page';
import { useContext, useEffect, useState } from 'react';
import { ConnectionContext } from '../../context/ConnectionContext';
import { ProductCard } from '../../components/products/ProductCard';

const Products = () => {
  const { getContract } = useContext(ConnectionContext);
  const [allProducts, setAllProducts] = useState([]);

  const fetchAllProducts = async () => {
    const contract = getContract();
    const products = await contract.getAllProducts();
    setAllProducts(products);
  };

  useEffect(() => {
    fetchAllProducts();
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
      <Page name={'Products'}>
        <div className="w-full px-3 py-5 mb-7 bg-dimmed-black rounded-md mt-2 md:px-5 xl:p-7">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-5">
            {products.map(({ id, img, name, description, price }) => (
              <ProductCard
                key={id}
                id={id}
                img={img}
                name={name}
                description={description}
                price={price}
              />
            ))}
            {allProducts &&
              allProducts.map(
                ({
                  productId,
                  productName,
                  productDescription,
                  productImage,
                  productPriceInr,
                }) => {
                  if (productId.length > 0) {
                    return (
                      <ProductCard
                        key={productId}
                        id={productId}
                        img={productImage}
                        name={productName}
                        description={productDescription}
                        price={productPriceInr}
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
