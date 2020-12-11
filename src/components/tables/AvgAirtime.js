
import React from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from 'react-redux'
import RefreshButton from '../RefreshButton'


const AvgAirtime = () => {
    const avgAirtimeObsCol = [
        {
            name: "origin",
            label: "Origin",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "average_air_time",
            label: "Airtime",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];
    const options = {
        filterType: 'checkbox',
    };
    const avgAirtimeData = useSelector(state => state.avgAirtimeData);


    return (
        <div>
            <h2>Average Airtime</h2>
            <RefreshButton type = "avg-airtime"  data = "flights" typeNumber = {1} />
        
            <MUIDataTable
                title={"Average Airtime"}
                data={avgAirtimeData}
                columns={avgAirtimeObsCol}
                options={options}
            />
        </div>
    );
};

export default AvgAirtime;