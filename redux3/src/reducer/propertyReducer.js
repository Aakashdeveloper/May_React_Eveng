export default function(state = [], action){
    switch(action.type){
        case 'GET_OPENHOUSE_DATA':
            return{...state, data:action.payload}
        default:
            return state;
    }
}