import React, {Component} from 'react';
import Banner from './banner';

import ArtistList from './artistList';

const URL = 'http://localhost:8900/artists'

class Home extends Component {
    constructor(props){
        super(props);

        this.state ={ 
            artists:''
        }
    }

    componentDidMount(){
        fetch(URL, {
            method:'GET'
        })
        .then((response) => response.json())
        .then((data) => this.setState({
            artists:data
        }))
    }

    render(){
        return(
            <div>
                <Banner></Banner>
                <ArtistList allArtist={this.state.artists}></ArtistList>
            </div>
        )
    }
}

export default Home