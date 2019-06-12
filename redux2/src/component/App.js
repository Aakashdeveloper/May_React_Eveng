import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

// conatiner
import Home from '../container/Home';
import News from '../container/News';
import GalleryDetails from '../container/GalleryDetail';

//component
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/details/:id" component={News}></Route>
                    <Route path="/gallery/:id" component={GalleryDetails}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <br/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}


export default App;