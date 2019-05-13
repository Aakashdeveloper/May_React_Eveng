import React, {Component} from 'react';
import './Header.css'

class Header extends Component {

    inputdetect(event){
        console.log(event.target.value)
    }
    render(){
        return(
            <header>
                <div className="logo"
                onClick={() => {console.log('logo clicked')}}>Logo</div>
                <center>
                    <input onChange={this.inputdetect}/>
                </center>
                <hr/>
            </header>
        )
    }
}
export default Header;