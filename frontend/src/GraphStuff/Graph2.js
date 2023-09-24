import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import './StackedAreaChart.css';

const StackedAreaChart = () => {
  const [cumulative, setCumulative] = useState(false); // State to track the display mode

  // Generate realistic data for 24 hours (unchanged)
  const data = [
    { hour: '12:00 AM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '1:00 AM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '2:00 AM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '3:00 AM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '4:00 AM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '5:00 AM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '6:00 AM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '7:00 AM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '8:00 AM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '9:00 AM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '10:00 AM', protein: 71, carbs: 240, fat: 130, other: 20 }, // Breakfast
    { hour: '11:00 AM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '12:00 PM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '1:00 PM', protein: 154, carbs: 320, fat: 220, other: 107 }, // Lunch
    { hour: '2:00 PM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '3:00 PM', protein: 0, carbs: 0, fat: 0, other: 20 }, // Snack
    { hour: '4:00 PM', protein: 70, carbs: 50, fat: 0, other: 0 },
    { hour: '5:00 PM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '6:00 PM', protein: 0, carbs: 0, fat: 0, other: 0 }, // Dinner
    { hour: '6:30 PM', protein: 145, carbs: 320, fat: 355, other: 60 },
    { hour: '7:00 PM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '8:00 PM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '9:00 PM', protein: 0, carbs: 0, fat: 0, other: 0 },
    { hour: '10:00 PM', protein: 120, carbs: 200, fat: 20, other: 0 }, // Late Snack
    { hour: '11:00 PM', protein: 0, carbs: 0, fat: 0, other: 0 },
  ];

  // Calculate Other calories as 5-10% of total calories during meal times (unchanged)
  const mealTimes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Late Snack'];

  // Function to calculate cumulative data
  const getCumulativeData = () => {
    const cumulativeData = [];
    let cumulativeProtein = 0;
    let cumulativeCarbs = 0;
    let cumulativeFat = 0;
    let cumulativeOther = 0;

    for (const item of data) {
      cumulativeProtein += item.protein;
      cumulativeCarbs += item.carbs;
      cumulativeFat += item.fat;
      cumulativeOther += item.other;

      cumulativeData.push({
        ...item,
        protein: cumulativeProtein,
        carbs: cumulativeCarbs,
        fat: cumulativeFat,
        other: cumulativeOther,
      });
    }

    return cumulativeData;
  };

  // Prepare the option for the chart
  const option = {
    title: {
      text: 'Daily Calorie Intake',
      x: 'center',
    },
    legend: {
      data: ['Protein', 'Carbs', 'Fat', 'Other'],
      x: 'right',
    },
    xAxis: {
      type: 'category',
      data: data.map(item => item.hour),
    },
    yAxis: {
      type: 'value',
      name: 'Calories',
      nameLocation: 'middle',
      nameGap: 40,
    },
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        const time = params[0].axisValue;
        let content = `${time}<br/>`;
        params.forEach((param) => {
          content += `${param.seriesName}: ${param.value} calories<br/>`;
        });
        return content;
      },
    },
    series: [
      {
        name: 'Protein',
        type: 'line',
        stack: 'total',
        smooth: true,
        areaStyle: {},
        data: data.map(item => item.protein),
      },
      {
        name: 'Carbs',
        type: 'line',
        stack: 'total',
        smooth: true,
        areaStyle: {},
        data: data.map(item => item.carbs),
      },
      {
        name: 'Fat',
        type: 'line',
        stack: 'total',
        smooth: true,
        areaStyle: {},
        data: data.map(item => item.fat),
      },
      {
        name: 'Other',
        type: 'line',
        stack: 'total',
        smooth: true,
        areaStyle: {},
        data: data.map(item => item.other),
      },
    ],
  };

  // Function to calculate cumulative option
  const getCumulativeOption = (cumulativeData) => {
    const cumulativeOption = {
      ...option, // Use the same option configuration
      series: [
        {
          name: 'Protein',
          type: 'line',
          stack: 'total',
          smooth: true,
          areaStyle: {},
          data: cumulativeData.map(item => item.protein),
        },
        {
          name: 'Carbs',
          type: 'line',
          stack: 'total',
          smooth: true,
          areaStyle: {},
          data: cumulativeData.map(item => item.carbs),
        },
        {
          name: 'Fat',
          type: 'line',
          stack: 'total',
          smooth: true,
          areaStyle: {},
          data: cumulativeData.map(item => item.fat),
        },
        {
          name: 'Other',
          type: 'line',
          stack: 'total',
          smooth: true,
          areaStyle: {},
          data: cumulativeData.map(item => item.other),
        },
      ],
    };
    return cumulativeOption;
  };

  // Function to toggle between daily and cumulative display
  const toggleDisplay = () => {
    setCumulative(!cumulative);
  };

  return (
    <div className="chart-container">
      <div className="green-overlay" style={{ display: cumulative ? 'block' : 'none' }}></div>
      <div>
        <button className="toggle-button" onClick={toggleDisplay}>
          {cumulative ? 'Switch to Daily' : 'Switch to Cumulative'}
        </button>
      </div>
      <ReactECharts
        option={cumulative ? getCumulativeOption(getCumulativeData()) : option}
        style={{ height: '400px' }}
      />
    </div>
  );
};

export default StackedAreaChart;
