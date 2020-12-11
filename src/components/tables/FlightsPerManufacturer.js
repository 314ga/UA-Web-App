
import React from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from 'react-redux'
import RefreshButton from '../RefreshButton'


const FlightsPerManufacturer = () => {
    const flightManufactObsCol = [
        {
            name: "manufacturer",
            label: "Manufacturer",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "flights",
            label: "Number Of Flights",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];
    const options = {
        filterType: 'checkbox',
    };
    const flightManufactData = useSelector(state => state.flightsManufactData);


    return (
        <div>
              <RefreshButton type = "flights-per-manufacturer"  data = "manufacturer"/>
            <MUIDataTable
                title={"Flights Per Manufacturer"}
                data={flightManufactData}
                columns={flightManufactObsCol}
                options={options}
            />
        </div>
    );
};

export default FlightsPerManufacturer;