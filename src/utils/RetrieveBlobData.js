import { BlobServiceClient  } from "@azure/storage-blob";
import store from '../store'
import { setPlanesPerManufact, setFlightsPerManufact, setairbusPerManufact } from '../actions';
import { setDestinationData, setDestinationTableData, setFlightsPerMonthData, setAvgAirtime, setArrivalDelay, setFlightsPMStackedData } from '../actions';
import { setBlobDateData, setTempData,setDewpTempData,setObservationData, setAvgTempData} from '../actions';

require('dotenv').config();
const blobSasUrl = process.env.REACT_APP_AZURE_STORAGE_CONNECTION_STRING;
const blobServiceClient = new BlobServiceClient(blobSasUrl);
const containerName = "uadata";
let blobDatesArray = [];
// Get a container client from the BlobServiceClient
const containerClient = blobServiceClient.getContainerClient(containerName);

export function retrieveAllBlobData()
{

  let retrieveAllData = 13;
  let dataName;
  while (retrieveAllData>0)
  {
    switch(retrieveAllData)
    {
        case 1:
            blobDatesArray = [];
            dataName = "planes-per-manufacturer.txt";
            break;
        case 2:
            dataName = "flights-per-manufacturer.txt";
            break;
        case 3:
            dataName = "airbus-per-manufaturer.txt";
            break;
        case 4:
            dataName = "wo-origins.txt";
            break;
        case 5:
            dataName = "temp-attributes.txt";
            break;
        case 6:
            dataName = "dewp-attributes.txt";
            break;
        case 7:
            dataName = "avgtemp-origin.txt";
            break;
        case 8:
            dataName = "flights-per-month.txt";
            break;
        case 9:
            dataName = "flights-per-month-stacked.txt";
            break;
        case 10:
            dataName = "top-dest-table.txt";
            break;
        case 11:
            dataName = "top-dest.txt";
            break;
        case 12:
            dataName = "avg-airtime.txt";
            break;
        case 13:
            dataName = "delays.txt";
            break;
        default:
            dataName = "error";
            break;     
    }
    downloadBlobs(dataName);
    retrieveAllData--;
  }
  console.log(blobDatesArray);
  store.dispatch(setBlobDateData(blobDatesArray));
}
async function downloadBlobs(dataName) {
    const blockBlobClient = containerClient.getBlockBlobClient(dataName);
    const downloadBlockBlobResponse = await blockBlobClient.download(0);
    blobDatesArray.push(downloadBlockBlobResponse.lastModified.toString());
    downloadBlockBlobResponse.blobBody.then(function(blob){
      dispatchBlobData(blob,dataName);
    })

  };       
async function dispatchBlobData(blob,type)
{
  const data = await blob.text();
  let dataObj = JSON.parse(data);
  switch(type)
  {
    case 'wo-origins.txt':
        store.dispatch(setObservationData(dataObj));
        break;
    case 'temp-attributes.txt':
      store.dispatch(setTempData(dataObj));
        break;
    case 'dewp-attributes.txt':
      store.dispatch(setDewpTempData(dataObj));
        break;
    case 'avgtemp-origin.txt':
      store.dispatch(setAvgTempData(dataObj));
        break;
    case "top-dest.txt":
      store.dispatch(setDestinationData(dataObj));
        break;
    case "top-dest-table.txt":
      store.dispatch(setDestinationTableData(dataObj));
        break;
    case "flights-per-month-stacked.txt":
      store.dispatch(setFlightsPMStackedData(dataObj));
        break;
    case "flights-per-month.txt":
      store.dispatch(setFlightsPerMonthData(dataObj));
        break;
    case "avg-airtime.txt":
      store.dispatch(setAvgAirtime(dataObj));
        break;
    case "flights-per-manufacturer.txt":
      store.dispatch(setFlightsPerManufact(dataObj));
          break;
    case "planes-per-manufacturer.txt":
      store.dispatch(setPlanesPerManufact(dataObj));
          break;
    case "airbus-per-manufaturer.txt":
      store.dispatch(setairbusPerManufact(dataObj));
          break;
    case "delays.txt":
      store.dispatch(setArrivalDelay(dataObj));
        break;
    default:
        break;
          
  }
}