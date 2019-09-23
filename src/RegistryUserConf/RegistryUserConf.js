import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import styles from "./styles";

import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";

class RegistryUserConf extends Component {
  constructor(props) {
    super(props);
  }

  handleBack = () => {
    this.props.history.push("/regist");
  };

  render() {
    const { classes } = this.props;
    const { email, nickname, account } = this.props.location.state;
    return (
      <div className={classes.root}>
        <form className={classes.container} autoComplete="off">
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.typos}>
              ユーザー登録の確認
            </Typography>
            <Typography variant="subtitle1" className={classes.typos}>
              登録内容に間違えがなければ、登録ボタンを押してください
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              className={classes.label}
            >
              メールアドレス
            </Typography>
            <Typography variant="body2" gutterBottom className={classes.bodys}>
              <strong>{email}</strong>
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              className={classes.label}
            >
              ニックネーム
            </Typography>
            <Typography variant="body2" gutterBottom className={classes.bodys}>
              <strong>{nickname}</strong>
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              className={classes.label}
            >
              登録区分
            </Typography>
            <Typography variant="body2" gutterBottom className={classes.bodys}>
              {account === "0" ? (
                <strong>助っ人登録</strong>
              ) : (
                <strong>購入者登録</strong>
              )}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => this.handleCheckValue()}
              fullWidth
            >
              登録する
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => this.handleBack()}
              fullWidth
            >
              戻る
            </Button>
          </Paper>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(RegistryUserConf));
