import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import Header from './component/Header';
import JSON  from './db.json';

class App extends Component {
    constructor(props){
        super(props)

        this.state={
            news:JSON
        }
    }
    render(){
        console.log(this.state.news)
        return(  
            <div>
                <Header/>
                <h1>Hello to react</h1>
                <h2>This is about frist app</h2>
                <Home/>
            </div>
        )
    }
    
}

ReactDOM.render(<App/>,document.getElementById('root'))



/*
const App = () => {
    return <div>
                <Header/>
                <h1>Hello to react</h1>
                <h2>This is about frist app</h2>
                <Home/>
            </div>
}
*/
