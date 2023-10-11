import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Solapur',
    Software_1: 40,
    Softwrae_2: 22,
  },
  {
    name: 'Pune',
    Software_1: 60,
    Softwrae_2: 55,
  },
  {
    name: 'Latur',
    Software_1: 43,
    Softwrae_2: 29,
  },
  {
    name: 'Mohol',
    Software_1: 93,
    Softwrae_2: 78,
  },
  {
    name: 'Ombad',
    Software_1: 60,
    Softwrae_2: 90,
  },
  {
    name: 'Hydrad',
    Software_1: 34,
    Softwrae_2: 40,
  },
  {
    name: 'Nashik',
    Software_1: 43,
    Softwrae_2: 58,
  },
];

export default function App() {
  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Software_1" fill="#FF9B50" />
        <Bar dataKey="Softwrae_2" fill="#A8DF8E" />
      </BarChart>
    </div>
  );
}
