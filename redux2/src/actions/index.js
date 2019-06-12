const url = " http://localhost:8900"

export function latestNews(){
    const output = fetch(`${url}/articles?_end=3`,
                {method : 'GET'})
        .then((response) => response.json());

        return{
            type:'GET_LATEST',
            payload: output
        }
}

export function otherNews(){
    const output = fetch(`${url}/articles?_start=3&_end=10`,
                {method : 'GET'})
        .then((response) => response.json());

        return{
            type:'GET_OTHER',
            payload: output
        }
}

export function latestGallery(){
    const output = fetch(`${url}/galleries?_limit=2`,
                {method : 'GET'})
        .then((response) => response.json());

        return{
            type:'GET_LATEST_GALLERY',
            payload: output
        }
}


////////////////////Get Details///////////////

export function selectedNews(id){
    const output = fetch(`${url}/articles?id=${id}`,
                {method : 'GET'})
        .then((response) => response.json());

        return{
            type:'GET_SELCETED_NEWS',
            payload: output
        }
}

export function clearselectedNews(){
        return{
            type:'CLEAR_SELCETED_NEWS',
            payload: []
        }
}

////////////////////Get Gallery Details///////////////

export function selectedGallery(id){
    const output = fetch(`${url}/galleries?id=${id}`,
                {method : 'GET'})
        .then((response) => response.json());

        return{
            type:'GET_SELCETED_GALLERY',
            payload: output
        }
}

export function clearselectedGallery(){
        return{
            type:'CLEAR_SELCETED_GALLERY',
            payload: []
        }
}