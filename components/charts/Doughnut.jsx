import { Doughnut } from 'react-chartjs-2';
import Card from '../Card';

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Sales by Category',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
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

const Dough = () => {
  return (
    <div className="">
      <Card className={'w-[85vw] md:w-[25.75vw] lg:w-[26.8vw] xl:w-[29vw]'}>
        <Doughnut
          data={data}
          width={'w-max'}
          className={'w-[80vw] md:w-[23.5vw]'}
          options={options}
        />
      </Card>
    </div>
  );
};

export default Dough;
