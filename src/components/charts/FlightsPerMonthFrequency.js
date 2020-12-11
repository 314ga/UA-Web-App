import { Bar } from 'react-chartjs-2'
import React from "react";
import { useSelector } from 'react-redux';
import RefreshButton from '../RefreshButton'

const FlightsPerMonthFrequency = () => {
    const flightData = useSelector(state => state.flightsPerMonthData);
    const flightsPerMonth = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{

            backgroundColor: 'rgb(255, 99, 132)',
            label: 'Number of flights',
            borderColor: 'rgb(255, 99, 132)',
            data: flightData.flights,
        }],
    }
    return (
        <div>
            <h2>Number Of Flights Per Month</h2>
            <RefreshButton type = "flights-per-month"  data = "flights" typeNumber = {5} />
        
            <Bar
                data={flightsPerMonth}
                options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}

            />
        </div>
    );
};

export default FlightsPerMonthFrequency;