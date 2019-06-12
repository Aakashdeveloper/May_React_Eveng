export default function(state={}, action){
    switch(action.type){
        case 'GET_LATEST_GALLERY':
            return {...state, gallerydata:action.payload}
        case 'GET_SELCETED_GALLERY':
            return {...state, selected:action.payload}
        case 'CLEAR_SELCETED_GALLERY':
            return {...state, selected:action.payload}
        default:
            return state
    }
}