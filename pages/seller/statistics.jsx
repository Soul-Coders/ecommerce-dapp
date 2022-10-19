import Page from '../../components/Page';
import Sales from '../../components/charts/Sales';
import PieChart from '../../components/charts/Pie';
import LineChart from '../../components/charts/Line';
import Dough from '../../components/charts/Doughnut';
import { ProductCard } from '../../components/products/ProductCard';

const Statistics = () => {
  const products = [
    {
      img: '/product-1.jpg',
      name: 'Black fashion bag',
      description: 'test',
      price: '2000',
      id: '321341',
      rating: 4,
    },
    {
      img: '/product-2.jpg',
      name: 'Wood leather watch',
      description: 'test',
      price: '1000',
      id: '321342',
      rating: 1.5,
    },
    {
      img: '/product-3.jpg',
      name: 'Wireless headphones',
      description: 'test',
      price: '1500',
      id: '321343',
      rating: 3.5,
    },
    {
      img: '/product-4.jpg',
      name: 'Blue skate shoes',
      description: 'test',
      price: '800',
      id: '321344',
      rating: 2.5,
    },
  ];
  return (
    <div>
      <Page name="Statistics">
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="">
            {products.map(
              ({
                productId,
                productName,
                productDescription,
                productImage,
                productPriceInr,
              }) => {
                <ProductCard
                  id={productId}
                  img={productImage}
                  name={productName}
                  description={productDescription}
                  price={productPriceInr}
                />;
              }
            )}
          </div>
          <div className="pt-3 md:pt-5">
            <LineChart />
          </div>
          <div className="pt-3 md:pt-5">
            <Dough />
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Statistics;
