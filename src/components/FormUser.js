import React, { Component } from 'react';

class FormUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            gender: '',
            email: '',
            phone: '',
            role: ''
        }
    }

    isChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        });
        // /////////////////
        // var item = {}
        // item.id = this.state.id
        // item.name = this.state.name
        // item.gender = this.state.gender
        // item.email = this.state.email
        // item.phone = this.state.phone
        // item.role = this.state.role
        // console.log(item);
    }

    onSubmit = () => {
        
        this.props.getFormData(this.state.name, this.state.gender, this.state.email, this.state.phone, this.state.role)
    }
    checkAddUserForm = () => {
        if (this.props.showAddUserForm === true) {
            return (
                <div className="col">

                    <div className="card border-info">
                        <div className="card-header bg-info text-white text-center">
                            Info new user
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <input  onChange={(e) => this.isChange(e)} type="text" name='name' className="form-control" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="form-group row text-left">
                                    <div className="col-sm-12">
                                        <div>Gender</div>
                                        <div className="form-check form-check-inline">
                                            <input onChange={(e) => this.isChange(e)} className="form-check-input" type="radio" name="gender" id="inlineRadio1"  value= {1}/>
                                            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input onChange={(e) => this.isChange(e)} className="form-check-input" type="radio" name="gender" id="inlineRadio2" value= {2} />
                                            <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <input  onChange={(e) => this.isChange(e)} type="email" name='email' className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-12">
                                        <input  onChange={(e) => this.isChange(e)} type="text" name='phone' className="form-control" placeholder="Phone" />
                                    </div>
                                </div>
                                <div className="form-group row text-left">
                                    <div className="col-sm-12">
                                        <label htmlFor="exampleFormControlSelect1">Role</label>
                                        <select onChange={(e) => this.isChange(e)} className="form-control" name='role' id="exampleFormControlSelect1">
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
                                        <button onClick={() => this.onSubmit()} type="reset" className="btn btn-primary">create</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div >
                {this.checkAddUserForm()}
            </div>
        );
    }
}

export default FormUser;