import { BlobServiceClient } from "@azure/storage-blob";
import store from '../store'
import { setBlobDateData} from '../actions';
require('dotenv').config();
const blobSasUrl = process.env.REACT_APP_AZURE_STORAGE_CONNECTION_STRING;
const blobServiceClient = new BlobServiceClient(blobSasUrl);
const containerName = "uadata";
// Get a container client from the BlobServiceClient
const containerClient = blobServiceClient.getContainerClient(containerName);
export function updateBlobData(dates,data,type)
{
    
    uploadFile(dates,type,data);
}

const uploadFile = async (dates,type,data) => {
    try {
        const blockBlobClient = containerClient.getBlockBlobClient(type);
        const uploadBlobResponse = await blockBlobClient.upload(JSON.stringify(data), Buffer.byteLength(data));
        updateModifiedDate(dates,blockBlobClient,type);
        return uploadBlobResponse;
    }
    catch (error) {
            console.log(error.message);
    }
}

const updateModifiedDate = async (dates,blobCLient,type) =>{

    let newArrayObj = dates.map((x) => x);
    const response = await blobCLient.download(0);
    switch(type)
    {
      case 'wo-origins.txt':
          console.log(newArrayObj[3]);
        newArrayObj[9] = response.lastModified.toString();//////////
          break;
      case 'temp-attributes.txt':
        newArrayObj[8] = response.lastModified.toString();////////////
          break;
      case 'dewp-attributes.txt':
        newArrayObj[7] = response.lastModified.toString();/////////////
          break;
      case 'avgtemp-origin.txt':
        newArrayObj[6] = response.lastModified.toString();////////////
          break;
      case "top-dest.txt":
        newArrayObj[2] = response.lastModified.toString();///////////////
          break;
      case "top-dest-table.txt":
        newArrayObj[3] = response.lastModified.toString();//////////
          break;
      case "flights-per-month-stacked.txt":
        newArrayObj[4] = response.lastModified.toString();//////////////
          break;
      case "flights-per-month.txt":
        newArrayObj[5] = response.lastModified.toString();///////////
          break;
      case "avg-airtime.txt":
        newArrayObj[1] = response.lastModified.toString();/////////
          break;
      case "flights-per-manufacturer.txt":
        newArrayObj[11] = response.lastModified.toString();
            break;
      case "planes-per-manufacturer.txt":
        newArrayObj[12] = response.lastModified.toString();
            break;
      case "airbus-per-manufaturer.txt":
        newArrayObj[10] = response.lastModified.toString();//////////
            break;
      case "delays.txt":
        newArrayObj[0] = response.lastModified.toString();//////
          break;
      default:
          break;
            
    }
    store.dispatch(setBlobDateData(newArrayObj));
}