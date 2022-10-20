// 1. Import controllers, elements, etc. which you'll use
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
  BarController,
} from 'chart.js';

// 2. Register them
ChartJS.register(
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);
import Card from '../Card';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Brutto',
      borderRadius: 30,
      data: [0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3, 0.4, 0.9, 0.9, 0.2, 0.5],
      backgroundColor: '#2C7BE5',
      barThickness: 10,
    },
    {
      label: 'Netto',
      borderRadius: 20,

      data: [0.07, 0.3, 0.15, 0.2, 0.5, 0.3, 0.8, 0.2, 0.4],
      backgroundColor: '#D2DDEC',
      barThickness: 10,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: 'top',
      align: 'center',
      labels: {
        boxWidth: 7,
        usePointStyle: true,
        pointStyle: 'circle',
      },
      title: {
        text: 'Sales Report',
        display: true,
        color: '#FFF',
        font: {
          size: 18,
        },
      },
      scales: {
        xAxis: {
          display: false,
        },
        yAxis: {
          max: 1,
        },
      },
      elements: {
        bar: {
          barPercentage: 0.3,
          categoryPercentage: 1,
        },
      },
    },
  },
};

const Sales = () => {
  return (
    <div className="">
      <Card className="w-[85vw] md:w-[47.5vw] lg:w-[50vw] xl:w-[55vw]">
        <Bar
          data={data}
          className={'w-full'}
          height={'md:h-96'}
          options={options}
        ></Bar>
      </Card>
    </div>
  );
};

export default Sales;
