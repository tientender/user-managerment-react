import { Component } from 'react';
import '../App.css';
import FormUser from './FormUser';
import Header from './Header';
import Search from './Search';
import TableUser from './TableUser';
import DataUser from './DataUser.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddUserForm: false,
      showEditUserForm: false,
      data: [],
      valueSearch: '',
      userEditObject: {}
    }
  }
  
  componentDidMount() {
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(DataUser))
    } else {
      var temp = JSON.parse(localStorage.getItem("userData"))
      this.setState({
        data: temp
      });
    }
  }

  changeStatusShowAddUserForm = () => {
    this.setState({
      showAddUserForm: !this.state.showAddUserForm
    })
  }

  changeStatusShowEditUserForm = () => {
    this.setState({
      showEditUserForm: !this.state.showEditUserForm
    })
  }

  getInfoUserAfterEdit = (userInfo) => {
    this.state.data.forEach((value, key) => {
      if (userInfo.id === value.id) {
        value.name = userInfo.name
        value.gender = userInfo.gender
        value.email = userInfo.email
        value.phone = userInfo.phone
        value.role = userInfo.role
      }
    })
    
    localStorage.setItem("userData", JSON.stringify(this.state.data))
  }

  getValueSearch = (text) => {
    this.setState({
      valueSearch: text
    });
  }

  getFormUserData = (name, gender, email, phone, role) => {
    var item = {}
    item.id = uuidv4()
    item.name = name
    item.gender = Number(gender)
    item.email = email
    item.phone = phone
    item.role = Number(role)

    var items = this.state.data
    items.push(item)

    this.setState({
      data: items
    });
    console.log(items);

    localStorage.setItem("userData", JSON.stringify(items))
  }

  getUserFormTable = (user) => {
    console.log(user);
    this.setState({
      userEditObject: user
    });
  }

  deleteUserById = (id) => {
    console.log(id);
    var tempData = this.state.data
    var newData = tempData.filter(item => item.id !== id)

    this.setState({
      data: newData
    });

    localStorage.setItem("userData", JSON.stringify(newData))
  }
  render() {
    var findUser = []
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.valueSearch) !== -1 || item.phone.indexOf(this.state.valueSearch) !== -1 || item.email.indexOf(this.state.valueSearch) !== -1) {
        findUser.push(item)
      }
    })
    return (
      <div className="App">
        <div>
          <Header />
          <div className="container">
            <Search
              getValueSearch={(text) => this.getValueSearch(text)}

              showAddUserForm={this.state.showAddUserForm}
              openAddUserForm={() => this.changeStatusShowAddUserForm()}

              showEditUserForm={this.state.showEditUserForm}
              hideEditUserForm={() => this.changeStatusShowEditUserForm()}

              fillUser={this.state.userEditObject}

              getInfoUserAfterEdit={(userInfo) => this.getInfoUserAfterEdit(userInfo)}
            />
            <div className="row">

              <TableUser
                dataUser={findUser}
                getDataUser={(user) => this.getUserFormTable(user)}

                openEditUserForm={() => this.changeStatusShowEditUserForm()}

                deleteUserById={(id) => this.deleteUserById(id)}
              />
              <FormUser
                showAddUserForm={this.state.showAddUserForm}
                getFormData={(name, gender, email, phone, role) => this.getFormUserData(name, gender, email, phone, role)}
              />
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default App;
