import {getPropertyData,getPropertyDetail} from './propertySearch';

export function openHouseData(response) {
    return {type: 'GET_OPENHOUSES_DATA', payload: response };
}

const getPropertyList = () => async (dispatch) => {
    try {
        const response = await getPropertyData();
        dispatch(openHouseData(response));
    } catch(error) {
        dispatch(openHouseData([]));
    }
};


export const fetchProperty = {
    openHouseData,
    getPropertyList
};