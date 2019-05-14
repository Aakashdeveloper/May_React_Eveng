import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            title:'React App',
            keyword:'User text Here'
        }
    }

    inputdetect(event){
        //console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
    }
    render(){
        return(
            <header>
                <div className="logo"
                onClick={() => {console.log('logo clicked')}}>
                {this.state.title}
                </div>
                <center>
                    <input onChange={this.inputdetect.bind(this)}/>
                    <p>{this.state.keyword}</p>
                </center>
                <hr/>
            </header>
        )
    }
}
export default Header;