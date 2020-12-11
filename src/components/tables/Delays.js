
import React from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from 'react-redux'
import RefreshButton from '../RefreshButton'


const Delays = () => {
    const delaysObsCol = [
        {
            name: "origin",
            label: "Origin",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "avgerage_ari_delay",
            label: "Average Arrival Delay",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "average_dep_delay",
            label: "Average Depature Delay",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];
    const options = {
        filterType: 'checkbox',
    };
    const delayData = useSelector(state => state.arrivalDelayData);


    return (
        <div>
            <h2>Delays</h2>
            <RefreshButton type = "delays"  data = "flights"/>
        
            <MUIDataTable
                title={"Average Delays"}
                data={delayData}
                columns={delaysObsCol}
                options={options}
            />
        </div>
    );
};

export default Delays;