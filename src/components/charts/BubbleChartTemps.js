import React from "react";
import {useSelector} from 'react-redux'
import { Bubble, } from 'react-chartjs-2'


const BubbleChartTemps = () => 
{
  const weatherData = useSelector(state =>  state.tempData);
  var timeFormat = 'YYYY-MM-DDTHH:mm:ssZ';

  /** GRAPHS */
  var popData = {
    datasets: [{
      label: ['JFK temperatures in °C'],
      data: weatherData.JFK,
      backgroundColor: "#52FF9966",
      borderColor: "#FF9966"
    },
    {
      label: ['EWR temperatures in °C'],
      data: weatherData.EWR,
      backgroundColor: "#520083c9",
      borderColor: "#0083c9"
    },
    {
      label: ['LBA temperatures in °C'],
      data: weatherData.LGA,
      backgroundColor: "#5200c928",
      borderColor: "#00c928"
    },]
  };
  
    return (

        <Bubble
        data = {popData}
        label= {'Mean Daily temperature for origin'}
        width={600}
        height={400}
        options={{
          responsive: true,
            scales: {
              xAxes: [{
                  type: 'time',
                  time: {
                      unit: 'month',
                      format: timeFormat,
                      tooltipFormat: timeFormat,
                      displayFormats: {
                        quarter: 'MMM YYYY'
                    }
                  },
              }]
          },
        }}
    />
    );
};

export default BubbleChartTemps;