import React, {Component } from 'react';
import Header from './Header';
import Albumlist from './AlbumList';

const REQ_URL = `http://localhost:8900/artists`

class Artist extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: ''
        }
    }

    componentDidMount(){
        fetch(`${REQ_URL}/${this.props.match.params.artistid}`,{
            method:'GET'
        })
        .then(response => response.json())
        .then((outdata) => {
            this.setState({
                data:outdata
            })
        })
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <Header/>
                <div className="artist_bio" key={this.state.data.id}>
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.data.cover}.jpg') no-repeat`}}>
                        </span>
                    </div>
                    <div>
                        <h3>{this.state.data.name}</h3>
                        <div className="bio_text">
                            {this.state.data.bio}
                        </div>
                        <Albumlist albumList = {this.state.data.albums}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Artist
