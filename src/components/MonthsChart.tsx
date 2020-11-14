import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { RiFlag2Fill } from 'react-icons/ri';

import '../assets/css/compenents/monthsChart.css';

function MonthsChart() {
  let data = {
    labels: ['Nov', 'Dez', 'Jan', 'Fev'],
    datasets: [
      {
        data: [10, 59, 39, 67],
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderColor: 'rgba(0,102,153,.5)',
        borderWidth: 5,
        pointBorderWidth: 20,
        fill: false,
        hoverBorderColor: '',
        hitRadius: 10,
      },
    ],
  };

  const [infoMonth, setInfoMonth] = useState<any>();
  const [valuePay, setValuePay] = useState<number>(
    data.datasets[0].data[data.datasets[0].data.length - 1]
  );

  useEffect(() => {
    if (infoMonth)
      infoMonth.forEach((element: any) => {
        console.log(element);
        let idx = element['_index'];
        setValuePay(element['_chart'].config.data.datasets[0].data[idx]);
      });
  }, [infoMonth]);

  return (
    <section className="monthsChart">
      <h2 className="title2">Resumo</h2>
      <div className="monthsChart-secChart">
        <header className="secChart-header">
          <h3 className="title2">
            <span className="secChart-header__span">Valor a pagar:</span> R$
            {valuePay},00
          </h3>
          <div className="secChart-header-flags">
            <RiFlag2Fill size={24} color={'var(--color-flag-green)'} />
            <RiFlag2Fill size={24} color={'var(--color-flag-yellow)'} />
            <RiFlag2Fill size={24} color={'var(--color-flag-red1)'} />
            <RiFlag2Fill size={24} color={'var(--color-flag-red2)'} />
          </div>
        </header>

        <Line
          // onElementsClick={handleData}
          data={data}
          width={100}
          height={80}
          options={{
            onClick: function (evt, item) {
              // console.log(item.);
              setInfoMonth(item);
            },
            legend: {
              display: false,
            },
            // events: ['click'],
            scales: {
              xAxes: [
                {
                  display: true,
                  gridLines: { display: false },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    suggestedMin: 50,
                    suggestedMax: 90,
                  },
                  display: true,
                  gridLines: { display: false },
                },
              ],
            },
          }}
        />
      </div>
    </section>
  );
}

export default MonthsChart;
