import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import axios from "axios";

import Header from "./Header/Header";
import RegistryUser from "./RegistryUser/RegistryUser";
import RegistryUserConf from "./RegistryUserConf/RegistryUserConf";
import RegistryInfo from "./RegistryInfo/RegistryInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: { userId: "", nickname: "" },
      users: [],
      registUser: {
        email: "",
        nickname: "",
        password: "",
        passwordConf: "",
        account: ""
      },
      isLogin: false
    };
  }

  componentDidMount() {
    // 助っ人情報取得
  }

  handleChangeLogin = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };

  // タイピング取得メソッド
  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ registUser: { email: e.target.value } });
        return;
      case "nickname":
        this.setState({ registUser: { nickname: e.target.value } });
        return;
      case "password":
        this.setState({ registUser: { password: e.target.value } });
        return;
      case "passwordConf":
        this.setState({ registUser: { passwordConf: e.target.value } });
        return;
      default:
        return;
    }
  };

  render() {
    return (
      <Router>
        <div>
          <Header
            user={this.state.user}
            isLogin={this.state.isLogin}
            handleChangeLogin={this.handleChangeLogin}
          />
          <switch>
            <Route
              path="/regist"
              exact
              render={() => (
                <RegistryUser
                  userTyping={this.userTyping}
                  registUser={this.state.registUser}
                  isChecked={this.state.isChecked}
                  checkeUserRegist={this.handleCheckeUserRegist}
                />
              )}
            />
            <Route
              path="/registConf"
              exact
              render={() => <RegistryUserConf />}
            />
            <Route path="/registInfo" exact render={() => <RegistryInfo />} />
          </switch>
        </div>
      </Router>
    );
  }
}

export default App;
