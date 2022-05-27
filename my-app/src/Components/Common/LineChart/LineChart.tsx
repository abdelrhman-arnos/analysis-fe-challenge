import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { DataSet } from '../../../types';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  interface Props{
      dataSets: DataSet[]
  }
  
const LineChart : React.FC<Props> = ({dataSets}) => {
    const options = {
        responsive: true,
        interaction: {
          mode: 'index' as const,
          intersect: false,
        },
        stacked: false,
        scales: {
          y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
          }
        },
      };
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const data = {
        labels,
        datasets: dataSets?.map((dataSet)=>{
            return {
                label: dataSet.schoolName,
                data: dataSet.no,
                borderColor: '#'+ Math.floor(Math.random()*16777215).toString(16),
                yAxisID: 'y'
            }
        })
      };
    return <Line options={options} data={data} />;
}

export default LineChart;
