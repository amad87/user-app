import React , {Component} from 'react';

//Functional Component
const TableHeader = () => {
    return(
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
            </thead>
    );
}
//Functional Component
const TableBody = (props) => {
  
    //Declarative code
    
    const rows = props.usersDetails.map( (user, index) => {
        console.log(rows);
        return(
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.city}</td>
                <td><button className="btn btn-sm btn-danger" onClick={() => props.removeUser(index)}>Delete</button></td>
            </tr>
        );
    });

    // console.log(rows);

    return (
    <tbody>{rows}</tbody>
    );
    
}

// Class Component
class Table extends Component {
    render() {

        const { usersDetails } = this.props;
        const { delUser } = this.props;

        return(

            
            
        <table className="table table-striped table-dark mt-3">
            <TableHeader />
            <TableBody usersDetails={usersDetails} removeUser = {delUser}/>
        </table>
        );
    }
}

export default Table;