import React, { Component } from "react";
import axios from "axios";

import Header from "./Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: { userId: "", nickname: "" },
      isLogin: false
    };
  }

  componentDidMount() {
    // 助っ人情報取得
  }

  handleChangeLogin = () => {
    this.setState({ isLogin: !this.state.isLogin });
  };

  render() {
    return (
      <div>
        <Header
          user={this.state.user}
          isLogin={this.state.isLogin}
          handleChangeLogin={this.handleChangeLogin}
        />
        <h1> hello </h1>
      </div>
    );
  }
}

export default App;
