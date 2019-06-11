export default function(state={}, action){
    switch(action.type){
        case 'GET_LATEST_GALLERY':
            return {...state, gallerydata:action.payload}
        default:
            return state
    }
}