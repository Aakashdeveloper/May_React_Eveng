import React, {Component} from 'react';


class ListView extends React.PureComponent{
    componentDidMount(){
        this.props.fetchProperty()
    }

    render(){

        return(
            <h1>Property</h1>
        )
    }
}

export default ListView;