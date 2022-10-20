import Page from '../../components/Page';
import Sales from '../../components/charts/Sales';
import PieChart from '../../components/charts/Pie';
import LineChart from '../../components/charts/Line';
import Dough from '../../components/charts/Doughnut';
import { ProductCard } from '../../components/products/ProductCard';

const Statistics = () => {
  const products = [
    {
      id: '321341',
      name: 'Black fashion bag',
      img: '/product-1.jpg',
      price: '2000',
      rating: 4,
    },
    {
      id: '321342',
      name: 'Wood leather watch',
      img: '/product-2.jpg',
      price: '1000',
      rating: 1.5,
    },
    {
      id: '321343',
      name: 'Wireless headphones',
      img: '/product-3.jpg',
      price: '1500',
      rating: 3.5,
    },
    {
      id: '321344',
      name: 'Blue skate shoes',
      img: '/product-4.jpg',
      price: '800',
      rating: 2.5,
    },
  ];
  return (
    <div>
      <Page name="Statistics">
        <div className="flex flex-col ">
          <div className="">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 ">
              {products.map(({ id, name, img, price, rating }) => (
                <ProductCard
                  key={id}
                  id={id}
                  img={img}
                  name={name}
                  price={price}
                  rating={rating}
                  viewOnly={true}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly">
            <div className="pt-3 md:pt-5">
              <LineChart />
            </div>
            <div className="pt-3 md:pt-5 md:ml-5">
              <Dough />
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Statistics;
