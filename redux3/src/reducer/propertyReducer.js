const defaultState = {
    data: [],
};

export default function(state = defaultState, action) {
    switch (action.type) {
        case 'GET_OPENHOUSES_DATA':
            return {...state, data: action.payload };
        case 'GET_OPENHOUSES_DETAILS':
            return {...state, details: action.payload };
        default:
            return state;        
    }
}