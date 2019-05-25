import React from 'react';
import { Link } from 'react-router-dom';


const ArtistList = (props) => {
    console.log('Artist list>>>>>',props);

    const list = ({allArtist}) => {
        if(allArtist){
            return allArtist.map((data) => {

                const style = {
                    background:`url('/images/covers/${data.cover}.jpg')`
                }

                return(
                    <Link to={`/artist/${data.id}`} key={data.id}
                        className="artist_item"
                        style={style}>
                        <div>{data.name}</div>
                        
                    </Link>
                )
            })
        }
        
    }
    return(
        <div className="artist_list">
            <h4>Artist List</h4>
            {list(props)}
        </div>
    )
}

export default ArtistList;