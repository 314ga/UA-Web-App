//variable imports
import store from '../store'
import { retrieveFlightData } from '../reducers/flightData'
import { retrieveWeatherData } from '../reducers/weatherData'
import { retrieveManufacturerData } from '../reducers/manufacturerData'


//function to dipatch weather forecast & weather history, function called by eventListeners for exammple
export const retrieveData = (dates,storeType, type) => {
    switch (storeType) {
        case 'weather':
            store.dispatch(retrieveWeatherData(dates,type));
            break;
        case 'manufacturer':
            store.dispatch(retrieveManufacturerData(dates,type));
            break;
        case 'flights':
            store.dispatch(retrieveFlightData(dates,type));
            break;
        default:
            break;
    }
}