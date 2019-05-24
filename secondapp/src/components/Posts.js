import React, {Component } from 'react';
import { Link } from 'react-router-dom'
import './post.css';

class Posts extends Component {
    
    render(){
        return(
            <div>
               <div class="panel panel-danger">
                    <div class="panel-heading">
                        <h2>Posts Heading Page</h2>
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
                        <h2>Javascript</h2>
                        <Link to="/posts/JavaScript/es6?author='John'&date='234345'">Details</Link>
                        <h2>Redux</h2>
                        <Link to="/posts/Redux">Details</Link>
                        <h2>NodeJs</h2>
                        <Link to="/posts/NodeJs">Details</Link>
                        <br/>
                        <button type="button" class="btn btn-info">Submit</button>&nbsp;
                        <button type="button" class="btn btn-warning">Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts;




/*
<div class="row">
                    <div class="mydiv1 col-md-6 col-sm-6 col-xs-6">
                    </div>
                    <div class="mydiv2 col-md-6 col-sm-6 col-xs-6">
                    </div>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-6">
                    <input type="text"/>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-6">
                    <input type="text"/>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-6">
                    <input type="text"/>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-6">
                    <input type="text"/>
                </div>
*/