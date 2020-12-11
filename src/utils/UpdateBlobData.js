import { BlobServiceClient } from "@azure/storage-blob";

require('dotenv').config();
const blobSasUrl = process.env.REACT_APP_AZURE_STORAGE_CONNECTION_STRING;
const blobServiceClient = new BlobServiceClient(blobSasUrl);
const containerName = "uadata";
// Get a container client from the BlobServiceClient
const containerClient = blobServiceClient.getContainerClient(containerName);
export function updateBlobData(data,type)
{
    uploadFile(data,type);
}

const uploadFile = async (data,filename) => {
    try {

        const blockBlobClient = containerClient.getBlockBlobClient(filename);
        const uploadBlobResponse = await blockBlobClient.upload(JSON.stringify(data), Buffer.byteLength(data));
        console.log(uploadBlobResponse.requetId);
    }
    catch (error) {
            console.log(error.message);
    }
}