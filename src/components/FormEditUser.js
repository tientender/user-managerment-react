import React, { Component } from 'react';

class FormEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.fillUser.id,
            name: this.props.fillUser.name,
            gender: this.props.fillUser.gender,
            email: this.props.fillUser.email,
            phone: this.props.fillUser.phone,
            role: this.props.fillUser.role,
        }
    }
    
    isChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        });
    }

    saveUserEditInfo = () => {
        this.props.hideEditForm()
        
        var info = {}
        info.id = this.state.id
        info.name = this.state.name
        info.gender = Number(this.state.gender)
        info.email = this.state.email
        info.phone = this.state.phone
        info.role = Number(this.state.role)
        this.props.getUserEditInfo(info)
    }
    render() {
        return (
                    <div className="col-12 card border-warning mb-3">
                        <div className="card-header bg-warning text-center">
                            Info user
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <input defaultValue={this.props.fillUser.name} onChange={(e) => this.isChange(e)} type="text" name='name' className="form-control" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="form-group row text-left">
                                    <div className="col-sm-12">
                                        <div>Gender</div>
                                        <div className="form-check form-check-inline">
                                            <input onChange={(e) => this.isChange(e)} className="form-check-input" type="radio" name="gender" id="inlineRadio1" value={1} defaultChecked={this.props.fillUser.gender === 1}/>
                                            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input onChange={(e) => this.isChange(e)} className="form-check-input" type="radio" name="gender" id="inlineRadio2" value={2} defaultChecked={this.props.fillUser.gender === 2}/>
                                            <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <input defaultValue={this.props.fillUser.email} onChange={(e) => this.isChange(e)} type="email" name='email' className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <input defaultValue={this.props.fillUser.phone} onChange={(e) => this.isChange(e)} type="text" name='phone' className="form-control" placeholder="Phone" />
                                    </div>
                                </div>
                                <div className="form-group row text-left">
                                    <div className="col-sm-12">
                                        <label htmlFor="exampleFormControlSelect1">Role</label>
                                        <select defaultValue={this.props.fillUser.role} onChange={(e) => this.isChange(e)} className="form-control" name='role' id="exampleFormControlSelect1">
                                            <option>Set role for Account</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Manager</option>
                                            <option value={3}>User</option>
                                        </select>
                                    </div>
                                </div>
                                <hr />
                                <div className="form-group row text-center">
                                    <div className="col-sm-12">
                                        <button onClick={() => this.saveUserEditInfo()} type="button" className="btn btn-success">save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
        );
    }
}

export default FormEditUser;