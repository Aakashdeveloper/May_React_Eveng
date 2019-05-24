import React, { Component } from 'react';

class Lifecycle extends Component {
    // 1 Get Default State
    constructor(props){
        super(props)

        // 2 SET Initial State
        this.state = {
            title: 'About React Lifecycle',
        }
        console.log('inside constructor')
    }

    // 3 Before Get Created 
    componentWillMount(){
        console.log('before get created')
        // document.querySelector('h4').style.color="red"
    }

    componentWillUpdate(){
        console.log('Before update')
    }

    componentDidUpdate() {
        console.log('After update')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        if(nextState.title === "CHange title click"){
            return false
        }

        return true;
    }
    
    

    // 4 Render JSX
    render(){
        console.log('Render JSX')
        return (
            <div>
                <h4>{this.state.title}</h4>
                <div onClick={() => this.setState({title:'Change title click'})}>
                Click to change
                </div>
            </div>
        )
    }

    // 5 After Component Mounted
    componentDidMount(){
        console.log('After Component Mounted')
        document.querySelector('h4').style.color="red"
    }

    componentWillUnmount() {
        alert('do yo want to leave')
    }
    
}


export default Lifecycle;