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
    this.props.history.push("/registInfo");
  };

  render() {
    const { classes } = this.props;
    const {
      name,
      kana,
      todouhuken,
      city,
      address,
      tel,
      age,
      gender,
      transportation,
      career
    } = this.props.location.state;

    const titles = [
      "お名前",
      "ふりがな",
      "都道府県",
      "市町村",
      "番地 / マンション等",
      "電話番号",
      "年齢",
      "性別",
      "移動手段",
      "野球歴"
    ];
    const params = [];
    params.push(name);
    params.push(kana);
    params.push(todouhuken);
    params.push(city);
    params.push(address);
    params.push(tel);
    age !== "" ? params.push(age + "歳") : params.push(age);
    gender === 0 && params.push("男");
    gender === 1 && params.push("女");
    gender === "" && params.push(gender);
    params.push(transportation);
    career !== "" ? params.push(career + "年") : params.push(career);
    const confList = [];
    for (var i = 0; i < titles.length; i++) {
      confList.push(
        <>
          <Typography
            gutterBottom
            variant="subtitle1"
            className={classes.label}
          >
            {titles[i]}
          </Typography>
          <Typography variant="body2" gutterBottom className={classes.bodys}>
            {params[i] === "" ? (
              <span>未記入</span>
            ) : (
              <strong>{params[i]}</strong>
            )}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            className={classes.label}
          />
        </>
      );
    }

    return (
      <div className={classes.root}>
        {console.log(this.props.location.state.transportation)}
        <form className={classes.container} autoComplete="off">
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.typos}>
              ユーザー登録の確認
            </Typography>
            <Typography variant="subtitle1" className={classes.typos}>
              登録内容に間違えがなければ、登録ボタンを押してください
            </Typography>
            {confList}
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
