export default function blobDatesReducer (state = [], action) {
    switch(action.type){
        case 'SETBLOBMODIFDATES':
            return action.payload;
        default:
            return state;
    } 
}