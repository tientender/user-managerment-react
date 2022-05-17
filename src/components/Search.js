import React, { Component } from 'react';
import FormEditUser from './FormEditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValueSearch: '',
            userObj: {}
        }
    }

    getUserEditInfo = (userInfo) => {
        this.setState({
            userObj: userInfo
        });
        this.props.getInfoUserAfterEdit(userInfo)
    }
    showEditUserForm = () => {
        if (this.props.showEditUserForm === true) {
            return (
                <FormEditUser 
                    hideEditForm={() => this.props.hideEditUserForm()}
                    fillUser={this.props.fillUser}
                    getUserEditInfo={(userInfo) => this.getUserEditInfo(userInfo)}
                />
            )
        }
    }

    showButtonOpenFormAddUser = () => {
        if (this.props.showAddUserForm === true) {
            return (
                <button className="btn btn-outline-success" onClick={() => this.props.openAddUserForm()} >Close Add User</button>

            )
        } else {
            return (
                <button className="btn btn-outline-info" onClick={() => this.props.openAddUserForm()}>Add User</button>

            )
        }
    }

    isChange = (e) => {
        this.setState({
            tempValueSearch: e.target.value
        });
        this.props.getValueSearch(this.state.tempValueSearch)
    }
    render() {
        return (
            <div className="row mx-0 mb-2">
                {this.showEditUserForm()}
                <form className="form-inline">
                    <input className="form-control mr-2" onChange={(e) => this.isChange(e)} type="search" placeholder="User name..." aria-label="Search" />
                    <div className="btn btn-outline-success" onClick={(text) => this.props.getValueSearch(this.state.tempValueSearch)} style={{ cursor: 'pointer' }}>Search</div>
                </form>
                <div style={{ marginLeft: "61%" }}>
                    {this.showButtonOpenFormAddUser()}
                </div>

            </div>
        );
    }
}

export default Search;