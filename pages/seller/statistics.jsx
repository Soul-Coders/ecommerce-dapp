import Page from '../../components/Page';
import Sales from '../../components/charts/Sales';
import PieChart from '../../components/charts/Pie';
import LineChart from '../../components/charts/Line';
import Dough from '../../components/charts/Doughnut';

const Statistics = () => {
  return (
    <div>
      <Page name="Statistics">
        <div className="grid grid-cols-1 md:grid-cols-[65%_35%]">
          <div className="">
            <Sales />
          </div>
          <div className="pt-3 md:pt-0">
            <PieChart />
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
