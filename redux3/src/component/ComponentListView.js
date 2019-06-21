import React from 'react';
import DisplayProerty from './DisplayProerty';

class ComponentListView extends React.PureComponent {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.fetchProperty();
    }

    render(){
        const {list} = this.props;
        return(
            <div>
                <br/>
               <DisplayProerty propertyData={list}></DisplayProerty>
            </div>
            
        )
    }

}

export default ComponentListView;