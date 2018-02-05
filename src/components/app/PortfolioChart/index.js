import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import { format } from 'date-fns';

import './styles.css';

const PortfolioCharts = (props) => {
  const { data } = props;

  const formatDate = (ts) => format(new Date(ts * 1000), 'HH:mm MMM DD');

  return (
    <AreaChart
      width={800}
      height={320}
      data={data}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 0
      }}>
      <XAxis
        dy={10}
        tickCount={10}
        tickFormatter={formatDate}
        tickLine={false}
        stroke="rgba(255, 255, 255, 0.25)"
        dataKey="timestamp"
        allowDataOverflow={true}/>
      <YAxis
        dx={-10}
        tickLine={false}
        stroke="rgba(255, 255, 255, 0.25)"
        allowDataOverflow={true}/>
      <CartesianGrid
        vertical={false}
        stroke="rgba(255, 255, 255, 0.25)"/>
      <Tooltip
        labelFormatter={formatDate}
        itemStyle={{
          color: '#000'
        }}/>
      <Area type='monotone' dataKey='value' stroke='rgba(75, 161, 244, 0.5)' fill='rgba(75, 161, 244, 0.25)' />
    </AreaChart>
  );
};

export default PortfolioCharts;
