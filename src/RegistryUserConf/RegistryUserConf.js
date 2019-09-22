import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    marginTop: "100px",
    flexGrow: 1
  },
  button: {
    marginTop: "20px"
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    marginTop: theme.spacing(3)
  },
  typos: {
    textAlign: "center",
    marginTop: "1rem"
  },
  radioboxdiv: {
    margin: "15px 0 0 100px"
  },
  kounyusha: {
    marginLeft: "20px"
  },
  label: {
    marginTop: "20px",
    textAlign: "center"
  },
  bodys: {
    textAlign: "center"
  }
});

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
