import {getPropertyData,getPropertyDetail} from './propertySearch';

export function openHouseData(response) {
    return {type: 'GET_OPENHOUSES_DATA', payload: response };
}

export function openHouseDetails(response) {
    return {type: 'GET_OPENHOUSES_DETAILS', payload: response };
}

const getPropertyList = () => async (dispatch) => {
    try {
        const response = await getPropertyData();
        dispatch(openHouseData(response));
    } catch(error) {
        dispatch(openHouseData([]));
    }
};

const getPropertyDetails = (id) => async (dispatch) => {
    try {
        const response = await getPropertyDetail(id);
        dispatch(openHouseDetails(response));
    } catch(error) {
        dispatch(openHouseDetails([]));
    }
};

export const fetchProperty = {
    openHouseData,
    getPropertyList,
    openHouseDetails,
    getPropertyDetails
};