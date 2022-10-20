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
import { Line } from 'react-chartjs-2';

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
      label: 'Revenue per month',
      data: [65, 59, 80, 81, 56, 55, 40, 50, 69, 75, 85, 60],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
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
      scales: {
        xAxis: {
          display: false,
        },
        yAxis: {
          max: 1,
        },
      },
    },
  },
};

const LineChart = () => {
  return (
    <div className="">
      <Card className="w-[78vw] md:w-[47.5vw] lg:w-[50vw] xl:w-[55vw]">
        <Line
          data={data}
          className={'w-full'}
          height={'md:h-96'}
          options={options}
        ></Line>
      </Card>
    </div>
  );
};

export default LineChart;
