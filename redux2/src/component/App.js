import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

// conatiner
import Home from '../container/Home';

//component
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Home}></Route>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}


export default App;