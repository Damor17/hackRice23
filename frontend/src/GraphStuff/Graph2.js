import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const GraphWithPieCharts = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize ECharts chart
    const myChart = echarts.init(chartRef.current);

    // This example requires ECharts v5.4.0 or later
    const cellSize = [80, 80];
    const pieRadius = 30;

    function getVirtualData() {
      const date = +echarts.time.parse('2017-02-01');
      const end = +echarts.time.parse('2017-03-01');
      const dayTime = 3600 * 24 * 1000;
      const data = [];
      for (let time = date; time < end; time += dayTime) {
        data.push([
          echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
          Math.floor(Math.random() * 10000)
        ]);
      }
      return data;
    }
    const scatterData = getVirtualData();
    const pieSeries = scatterData.map(function (item, index) {
      return {
        type: 'pie',
        id: 'pie-' + index,
        center: item[0],
        radius: pieRadius,
        coordinateSystem: 'calendar',
        label: {
          formatter: '{c}',
          position: 'inside'
        },
        data: [
          { name: 'Work', value: Math.round(Math.random() * 24) },
          { name: 'Entertainment', value: Math.round(Math.random() * 24) },
          { name: 'Sleep', value: Math.round(Math.random() * 24) }
        ]
      };
    });
    const option = {
      tooltip: {},
      legend: {
        data: ['Work', 'Entertainment', 'Sleep'],
        bottom: 20
      },
      calendar: {
        top: 'middle',
        left: 'center',
        orient: 'vertical',
        cellSize: cellSize,
        yearLabel: {
          show: false,
          fontSize: 30
        },
        dayLabel: {
          margin: 20,
          firstDay: 1,
          nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        monthLabel: {
          show: false
        },
        range: ['2017-02']
      },
      series: [
        {
          id: 'label',
          type: 'scatter',
          coordinateSystem: 'calendar',
          symbolSize: 0,
          label: {
            show: true,
            formatter: function (params) {
              return echarts.time.format(params.value[0], '{dd}', false);
            },
            offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
            fontSize: 14
          },
          data: scatterData
        },
        ...pieSeries
      ]
    };

    // Set the option and render the chart
    myChart.setOption(option);

    // Cleanup when unmounting
    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '500px' }} />;
};

export default GraphWithPieCharts;
