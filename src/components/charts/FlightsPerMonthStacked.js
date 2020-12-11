import { Bar } from 'react-chartjs-2'
import React from "react";
import { useSelector } from 'react-redux';
import RefreshButton from '../RefreshButton'


const FlightsPerMonthStacked = () => {

    const flightData = useSelector(state => state.flightsStackedData);
    const flightsPerMonthStacked = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'EWR',
                backgroundColor: 'rgba(153, 102, 255, 1)',
                data: flightData.ewr
            },
            {
                label: 'JFK',
                backgroundColor: 'rgba(255, 99, 132, 1)',
                data: flightData.jfk
            },
            {
                label: 'LGA',
                backgroundColor: 'rgba(54, 162, 235, 1)',
                data: flightData.lga
            },


        ],

    }
    return (
        <div>
            <h2>Flights Per Month Stacked</h2>
            <RefreshButton type = "flights-per-month-stacked"  data = "flights"/>
     
            <Bar
                data={flightsPerMonthStacked}

                options={{
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }}

            />
        </div>
    );
};

export default FlightsPerMonthStacked;