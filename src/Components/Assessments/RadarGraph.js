import React from 'react';
import {Radar} from "react-chartjs-2";

const data = {
    labels: ['one', 'Two', 'Three', 'Four', 'Five', 'Six'],
    datasets : [
        {
        label: '# of Votes',
        data: [2, 9, 3, 5, 3, 7],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 1,
        },
]
}

const options = {
  scale: {
    ticks: {beginAtZero: true}
  }
}

const RadarGraph = () => {
  return (
    <div>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarGraph;
