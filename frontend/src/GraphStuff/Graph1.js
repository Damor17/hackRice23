import React from 'react';
import ReactEcharts from 'echarts-for-react';
s
const Graph1 = ({ onDayClick }) => {
  const randomData = Array.from({ length: 30 }, () => Math.floor(300 + Math.random() * 30));
  const randomData2 = Array.from({ length: 30 }, () => Math.floor(600 + Math.random() * 150));
  const randomData3 = Array.from({ length: 30 }, () => Math.floor(400 + Math.random() * 300));
  const randomData4 = Array.from({ length: 30 }, () => Math.floor(400 + Math.random() * 250));

  const xLabels = Array.from({ length: 30 }, (_, index) => `9/${index + 1}`);

  const option = {
    color: ['#FF0000', '#FFFF00', '#00FF00', '#0000FF'],
    title: {
      text: 'Calories',
      textStyle: {
        color: '#333',
        fontSize: 16,
      },
      padding: 10,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
      formatter: function (params) {
        let tooltipContent = params[0].name + '<br/>';
        params.forEach(function (item) {
          tooltipContent += item.seriesName + ': ' + item.value + ' calories<br/>';
        });
        return tooltipContent;
      },
    },
    legend: {
      data: ['Protein', 'Carbs', 'Fat', 'Other'],
      textStyle: {
        color: '#333',
      },
      selected: {
        'Protein': true,
        'Carbs': true,
        'Fat': true,
        'Other': true,
      },
    },
    toolbox: {
      feature: {
        dataView: {
          title: 'Data View',
          readOnly: false,
        },
        magicType: {
          title: {
            line: 'Line Chart',
            bar: 'Bar Chart',
          },
          type: ['line', 'bar'],
        },
      },
      iconStyle: {
        color: '#333',
      },
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 100,
      },
      {
        show: true,
        type: 'slider',
        start: 0,
        end: 100,
        height: 20,
        bottom: 10,
      },
    ],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: xLabels,
        axisLabel: {
          textStyle: {
            color: '#333',
          },
          formatter: function (value) {
            return value;
          },
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Calories',
        nameTextStyle: {
          color: '#333',
        },
        axisLabel: {
          textStyle: {
            color: '#333',
          },
        },
      },
    ],
    series: [
      {
        name: 'Protein',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {
          opacity: 0.4,
          color: 'rgba(255, 0, 0, 0.8)',
        },
        emphasis: {
          focus: 'series',
        },
        data: randomData,
      },
      {
        name: 'Carbs',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {
          opacity: 0.4,
          color: 'rgba(255, 255, 0, 0.8)',
        },
        emphasis: {
          focus: 'series',
        },
        data: randomData2,
      },
      {
        name: 'Fat',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {
          opacity: 0.4,
          color: 'rgba(0, 255, 0, 0.8)',
        },
        emphasis: {
          focus: 'series',
        },
        data: randomData3,
      },
      {
        name: 'Other',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {
          opacity: 0.4,
          color: 'rgba(0, 0, 255, 0.8)',
        },
        emphasis: {
          focus: 'series',
        },
        data: randomData4,
      },
    ],
  };
  const handleDayClick = (day) => {
    // Call the onDayClick function passed as a prop with the selected day
    onDayClick(day);
  };
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '1200px', height: '800px', marginTop: '100px' }}>
        <ReactEcharts
          option={option}
          // Add a click event listener to the chart
          onEvents={{
            click: (params) => {
              // Check if the click event is on a specific data point
              if (params.seriesType === 'line' && params.dataIndex !== undefined) {
                // Extract the clicked day from your data
                const clickedDay = xLabels[params.dataIndex];
                // Call the handleDayClick function with the selected day
                handleDayClick(clickedDay);
              }
            },
          }}
        />
      </div>
    </div>
  );
};

export default Graph1;
