import React from "react";
import MUIDataTable from "mui-datatables";
import {useSelector} from 'react-redux'
import RefreshButton from '../RefreshButton'

const TableObservationsPerOrigin = () => 
{
    const weatherObsCol = [
    {
        name: "origin",
        label: "Origin",
        options: {
        filter: true,
        sort: true,
        }
    },
    {
        name: "weather_obs_origin",
        label: "Observations for origin",
        options: {
        filter: true,
        sort: false,
        }
    },
];
const options = {
    filterType: 'checkbox',
};
  const weatherData = useSelector(state =>  state.observData);
  
    return (
        <div>
      <RefreshButton type = "wo-origins"  data = "weather" typeNumber = {9} />
        <MUIDataTable
        title={"Weather observation for origins"}
        data={weatherData}
        columns={weatherObsCol}
        options={options}
        /></div>
    );
};

export default TableObservationsPerOrigin;