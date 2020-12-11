
import React from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from 'react-redux'
import RefreshButton from '../RefreshButton'


const PlanesPerManufacturer = () => {
    const PlanesManufactObsCol = [
        {
            name: "manufacturer",
            label: "Manufacturer",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "plane_count",
            label: "Number Of Planes",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];
    const options = {
        filterType: 'checkbox',
    };
    const planesManufactData = useSelector(state => state.planesManufactData);


    return (
        <div>
  <RefreshButton type = "planes-per-manufacturer"  data = "manufacturer"></RefreshButton>
            <MUIDataTable
                title={"Planes Per Manufacturer"}
                data={planesManufactData}
                columns={PlanesManufactObsCol}
                options={options}
            />
        </div>
    );
};

export default PlanesPerManufacturer;