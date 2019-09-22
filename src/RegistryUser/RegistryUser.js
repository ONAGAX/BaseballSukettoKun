import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import styles from "./styles";

import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";

class RegistryUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      email: "",
      nickname: "",
      password: "",
      passwordConf: "",
      account: "",
      emailError: "",
      nicknameError: "",
      passwordError: "",
      passwordConfError: "",
      doubleError: "",
      errors: []
    };
  }

  handleChange = event => {
    this.setState({ account: event.target.value });
  };

  handleSelect0 = () => {
    this.setState({ account: "0" });
  };
  handleSelect1 = () => {
    this.setState({ account: "1" });
  };

  // valueを取得
  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        return;
      case "nickname":
        this.setState({ nickname: e.target.value });
        return;
      case "password":
        this.setState({ password: e.target.value });
        return;
      case "passwordConf":
        this.setState({ passwordConf: e.target.value });
        return;
      default:
        return;
    }
  };

  // Validation
  handleJumpConf = () => {
    this.setState({ isChecked: false });
    var check = 0;
    const { email, nickname, password, passwordConf } = this.state;
    if (email === "") {
      this.setState({ emailError: "メールアドレスが未記入です" });
    } else if (email.length > 30) {
      this.setState({ emailError: "30文字以内で入力してください" });
    } else {
      this.setState({ emailError: "" });
      check++;
    }
    if (nickname === "") {
      this.setState({ nicknameError: "ニックネームが未記入です" });
    } else if (nickname.length > 30) {
      this.setState({ nicknameError: "30文字以内で入力してください" });
    } else {
      this.setState({ nicknameError: "" });
      check++;
    }
    if (password === "") {
      this.setState({ passwordError: "パスワードが未記入です" });
    } else if (password.length > 30) {
      this.setState({ passwordError: "30文字以内で入力してください" });
    } else {
      this.setState({ passwordError: "" });
      check++;
    }
    if (passwordConf === "") {
      this.setState({ passwordConfError: "確認用パスワードが未記入です" });
    } else if (passwordConf > 30) {
      this.setState({ passwordConfError: "30文字以内で入力してください" });
    } else {
      this.setState({ passwordConfError: "" });
      check++;
    }
    if (password !== passwordConf) {
      this.setState({ doubleError: "パスワードが一致していません" });
    } else {
      this.setState({ doubleError: "" });
      check++;
    }
    if (check === 5) {
      this.props.history.push({
        pathname: "/registConf",
        state: {
          nickname: this.state.nickname,
          email: this.state.email,
          password: this.state.password,
          account: this.state.account
        }
      });
    }
  };

  render() {
    const { classes } = this.props;
    const sukettoBtn = (
      <>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => this.handleJumpConf()}
          fullWidth
        >
          助っ人で登録する
        </Button>
      </>
    );
    const kounyushaBtn = (
      <>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => this.handleJumpConf()}
          fullWidth
        >
          購入者で登録する
        </Button>
      </>
    );
    const unknownBtn = (
      <>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          disabled
          fullWidth
        >
          選択してください
        </Button>
      </>
    );
    const {
      nicknameError,
      emailError,
      passwordError,
      passwordConfError,
      doubleError
    } = this.state;
    return (
      <div className={classes.root}>
        <form className={classes.container} autoComplete="off">
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.typos}>
              新規ユーザー登録
            </Typography>
            <div className={classes.radioboxdiv}>
              <span className={classes.suketto}>助っ人で登録</span>
              <Radio
                checked={this.state.account === "0"}
                onChange={this.handleChange}
                value="0"
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
                color="primary"
                onClick={() => this.setState({ account: "1" })}
              />
              <span />
              <span className={classes.kounyusha}>購入者で登録</span>
              <Radio
                checked={this.state.account === "1"}
                onChange={this.handleChange}
                value="1"
                name="radio-button-demo"
                inputProps={{ "aria-label": "B" }}
                onClick={() => this.setState({ account: "1" })}
              />
            </div>
            <TextField
              id="standard-with-placeholder"
              label="メールアドレス"
              placeholder="sample@gmail.com"
              margin="dense"
              autoComplete="email"
              onChange={e => this.userTyping("email", e)}
              fullWidth
            />
            {emailError !== "" ? (
              <span className={classes.alertSpan}>{emailError}</span>
            ) : (
              ""
            )}
            <TextField
              id="standard-with-placeholder"
              label="ニックネーム"
              placeholder="風吹けば名無し"
              className={classes.textField}
              margin="dense"
              onChange={e => this.userTyping("nickname", e)}
              fullWidth
            />
            {nicknameError !== "" ? (
              <span className={classes.alertSpan}>{nicknameError}</span>
            ) : (
              ""
            )}
            <TextField
              id="standard-password-input"
              label="パスワード"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="dense"
              onChange={e => this.userTyping("password", e)}
              fullWidth
            />
            {passwordError !== "" ? (
              <span className={classes.alertSpan}>{passwordError}</span>
            ) : (
              ""
            )}
            <TextField
              id="standard-password-input"
              label="再度パスワードを入力"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="dense"
              onChange={e => this.userTyping("passwordConf", e)}
              fullWidth
            />
            {passwordConfError !== "" ? (
              <span className={classes.alertSpan}>{passwordConfError}</span>
            ) : (
              ""
            )}
            <br />
            {doubleError !== "" ? (
              <span className={classes.alertSpan}>{doubleError}</span>
            ) : (
              ""
            )}
            {this.state.account === "0" && sukettoBtn}
            {this.state.account === "1" && kounyushaBtn}
            {this.state.account === "" && unknownBtn}
          </Paper>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(RegistryUser));
