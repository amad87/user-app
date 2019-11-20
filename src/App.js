import React , {Component} from 'react';
import Table from './Table';
import Form from './Form';
import Header from './Header';

class App extends Component {

    //State use when retrive the data
    state = {
        users : [
            // {
            //     name : 'Ahmad',
            //     city : 'Cyberjaya'
            // },
            // {
            //     name : 'Ali',
            //     city : 'Melaka'
            // },
            // {
            //     name : 'Peter',
            //     city : 'Johor'
            // }
        ],
    };

    //Don't use state if there is an action function
    removeUser = (index) => {

        // ES5
        // const users = this.state.users;

        //ES6
        const {users} = this.state;
        
        //Change the state
        this.setState({
            users: users.filter((user, i) => {
                return (i !== index);
            })
        });
    }

    //Create a new user
    addUser = (newUserObj) => {
        //Add User | add user to the array
        this.setState({
            users : [...this.state.users, newUserObj],
        });
    }

    render(){

        // const usersArr = [
        //     {
        //         name : 'Ahmad',
        //         city : 'Cyberjaya'
        //     },
        //     {
        //         name : 'Ali',
        //         city : 'Melaka'
        //     },
        //     {
        //         name : 'Peter',
        //         city : 'Johor'
        //     }
        // ];


        return(
            <div>
                <div>
                    <Header siteName="UserApp"/>
                </div>
                <div className="container mt-4">
                
                    <Form />
                    <div className="mt-4"></div>
                    <div className = "card">
                        <h5 className ="card-header">User List</h5>
                        <div className ="card-body">
                            <Table usersDetails = {this.state.users} delUser = {this.removeUser}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;