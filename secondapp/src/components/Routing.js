import React, {Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import Posts from './Posts';

class Routing extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <header>
                        <Link to="/">Home</Link>
                        <Link to="/posts">Posts</Link>
                        <Link to="/profile">Profile</Link>
                        <hr/>
                    </header>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/posts" component={Posts}></Route>
                    <Route path="/profile" component={Profile}></Route>
                </div>
            </BrowserRouter> 
        )
    }
}

export default Routing