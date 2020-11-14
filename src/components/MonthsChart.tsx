import React from 'react';
import { Line } from 'react-chartjs-2';
import { RiFlag2Fill } from 'react-icons/ri';

import '../assets/css/compenents/monthsChart.css';

// interface MonthsChartInterface {
//   months: Array<{
//     monthName: string;
//   }>;
// }

function MonthsChart() {
  let data = {
    labels: ['Nov', 'Dez', 'Jan', 'Fev'],
    datasets: [
      {
        data: [10, 59, 39, 20],
        backgroundColor: ['rgba(255, 255, 255, 1)'],
        borderColor: ['rgba(0,102,153,.5)'],
        borderWidth: 4,
      },
    ],
  };
  return (
    <section className="monthsChart">
      <h2 className="title2">Resumo</h2>
      <div className="monthsChart-secChart">
        <header className="secChart-header">
          <h3 className="title2">
            <span className="secChart-header__span">Valor a pagar:</span> R$
            39,00
          </h3>
          <div className="secChart-header-flags">
            <RiFlag2Fill size={24} color={'var(--color-flag-green)'} />
            <RiFlag2Fill size={24} color={'var(--color-flag-yellow)'} />
            <RiFlag2Fill size={24} color={'var(--color-flag-red1)'} />
            <RiFlag2Fill size={24} color={'var(--color-flag-red2)'} />
          </div>
        </header>

        <Line data={data} width={100} height={80} />
      </div>
    </section>
  );
}

export default MonthsChart;
