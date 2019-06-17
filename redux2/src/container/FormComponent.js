import React, {Component} from 'react';


class FormComponent extends Component {
    constructor(){
        super()

        this.state={
            fname:'John',
            lname:'Stephen'
        }

        this.handleChangeFname = this.handleChangeFname.bind(this);
        this.handleChangeLname = this.handleChangeLname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFname(event){
        this.setState({fname:event.target.value})
    }

    handleChangeLname(event){
        this.setState({lname:event.target.value})
    }

    handleSubmit(event){
        var a = 'fname>'+this.state.fname+'lname>'+this.state.lname
        alert(a)
    }
    render(){
        return(
            <div class="container">
                <form>
                    <div className="form-group">
                        <label>FirstName</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.fname}
                            id="fname"
                            onChange={this.handleChangeFname}
                        />
                    </div>
                    <div className="form-group">
                        <label>LastName</label>
                        <input type="text"
                            className="form-control"
                            id="lname"
                            value={this.state.lname}
                            onChange={this.handleChangeLname}
                        />
                    </div>
                    <button type="submit" className="btn btn-success"
                        onClick={this.handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default FormComponent;