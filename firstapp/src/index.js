import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import JSON  from './db.json';
import NewsList from './component/NewsList'

class App extends Component {
    constructor(props){
        super(props)

        this.state={
            news:JSON,
            filtered: JSON
        }
    }

    filterNews(keyword){
        console.log("inside index", keyword)
        let output=  this.state.news.filter((item) => {
            return item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
        })
        this.setState({filtered: output})
    }

    /*
    ages.filter((age) => { return age >= 18; });
    */

    render(){
        console.log(this.state.news)
        return(  
            <div>
                <Header newsSearch={(userSearch)=>this.filterNews(userSearch)}/>
                <hr/>
                <NewsList mynews={this.state.filtered}/>
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
