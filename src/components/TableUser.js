import React, { Component } from 'react';
import TableUserRow from './TableUserRow';

class TableUser extends Component {
    deleteUserById = (id) => {
        this.props.deleteUserById(id)
    }
    mappingDataUser = () => this.props.dataUser.map((value, key) => (
            <TableUserRow 
                key={key}
                id={value.id}
                stt={key+1}
                userName={value.name}
                gender={value.gender}
                email={value.email}
                phone={value.phone}
                role={value.role}

                getUser={() => this.props.getDataUser(value)}
                editUser={() => this.props.openEditUserForm()}
                deleteUserById={(id) => this.deleteUserById(id)}
            />
    ))
    

    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Role</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableUser;