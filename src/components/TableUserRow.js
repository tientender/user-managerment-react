import React, { Component } from 'react';

class TableUserRow extends Component {
    showGender = () => {
        if (this.props.gender === 1) {
            return "Male"
        } else {
            return "Female"
        }
    }

    showRole = () => {
        if (this.props.role === 1) {
            return "Admin"
        } else if (this.props.role === 2){
            return "Manager"
        }else {
            return "User"
        }
    }

    getInfoUser = () => {
        this.props.getUser()
        this.props.editUser()
    }

    deleteUserById = (id) => {
        this.props.deleteUserById(id)
    }
    render() {
        return (
                <tr className='text-left'>
                    <td className='text-center'>{this.props.stt}</td>
                    <td>{this.props.userName}</td>
                    <td>{this.showGender()}</td>
                    <td>{this.props.email}</td>
                    <td className='text-right'>{this.props.phone}</td>
                    <td>{this.showRole()}</td>
                    <td>
                        <div className="btn-group" aria-label="Basic example">
                            <button type="button" onClick={() => this.getInfoUser()} className="btn btn-warning">Edit</button>
                            <button type="button" onClick={(id) => this.deleteUserById(this.props.id)} className="btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
        );
    }
}

export default TableUserRow;