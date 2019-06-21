import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import ListView from '../container/ListView';
import PropertDetails from './PropertyDetail';

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={ListView}></Route>
                    <Route exact path="/porperty/:id" component={PropertDetails}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;