import React, {Component} from 'react';

class Form extends Component{

    constructor(props){
        super(props);// to use 'this' and access parent properties

        this.initialState = {
            name: '',
            city: ''
        };

        //Set the initial state
        this.state = this.initialState;
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        //Change the state form the default
        this.setState({
            [name] : value
        });
    }

    handleSubmit = () => {
        // console.log('submitted');
        this.props.handleSubmit(this.state);
        this.setState(this.initialState); //
    }

    render(){
        return(
            <div className = "card">
                <h5 className ="card-header">Add User</h5>
                <div className ="card-body">
                    <form handleSubmit={this.addUser}>
                        <div className="form-group">
                            <label>Name :</label>
                            <input type="text" name="name" placeholder="Please insert your name" value={this.state.name} className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>City :</label>
                            <input type="text" name="city" placeholder="Please insert your city" value={this.state.city} className="form-control" onChange={this.handleChange} />
                        </div>
                        

                        <button type="button" className="btn btn-sm btn-success" onClick={this.handleSubmit} >Create</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;