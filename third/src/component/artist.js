import React, {Component } from 'react';

class Artist extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: ''
        }
    }
    render(){
        console.log(this.props)
        return(
            <div>Details for artist  id = {this.props.match.params.artistid}</div>
        )
    }
}

export default Artist
