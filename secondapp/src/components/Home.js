import React, {Component } from 'react';

class Home extends Component {
    render(){
        return(
            <div>
               <div class="panel panel-info">
                    <div class="panel-heading">
                        <h2>Home Heading</h2>
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
                        <button type="button" class="btn btn-success">Submit</button>&nbsp;
                        <button type="button" class="btn btn-danger">Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;