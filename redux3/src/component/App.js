import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import ListView from '../container/ListView';
import PropertDetail from '../container/PropertyDetail';

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={ListView}></Route>
                    <Route exact path="/openhouse/:id" component={PropertDetail}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;