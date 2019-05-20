import React, {Component } from 'react';
import { Link } from 'react-router-dom';

class PostDetails extends Component {
    constructor(props){
        super(props)

        console.log(">>>>>>",props)
        this.state={
            title: this.props.match.params.id,
            detail:this.props.match.params.details
        }
    }
    render(){
        return(
            <div>
               <div class="panel panel-success">
                    <div class="panel-heading">
                        <h2> {this.state.title} {this.state.detail}</h2>
                    </div>
                    <div class="panel-body">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been
                         the industry's standard dummy text ever since t
                         he 1500s, when an unknown printer took a
                          galley of type and scrambled it to make 
                          a type specimen book. It has survived 
                          not only five centuries, but also the leap into electronic 
                          typesetting, remaining essentially unchanged. 
                          It was popularised in the 1960s with the release of 
                          Letraset sheets containing Lorem Ipsum passages, 
                          and more recently with desktop publishing 
                            software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                        <Link to="/posts" type="button" class="btn btn-danger">
                         Back
                        </Link>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDetails;