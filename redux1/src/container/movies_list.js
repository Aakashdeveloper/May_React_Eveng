import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Listmov from '../component/list_mov';

class MoviesList extends Component {

    componentWillMount(){
        this.props.moviesList();
    }
    
    render(){
        return(
            <div>
                <Listmov datalist={this.props.movies}></Listmov>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        movies:state.movies
    }
}

export default connect(mapStateToProps, actions)(MoviesList);