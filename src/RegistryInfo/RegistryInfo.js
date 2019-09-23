import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./styles";

import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";

class RegistryInfo extends Component {
  constructor() {
    super();
    this.state = {
      user_id: "",
      name: "",
      kana: "",
      todouhuken: "",
      city: "",
      address: "",
      tel: "",
      age: "",
      gender: "",
      transportation: "",
      career: "",
      error: []
    };
  }

  userTyping = (type, e) => {
    switch (type) {
      case "name":
        this.setState({ name: e.target.value });
        return;
      case "kana":
        this.setState({ kana: e.target.value });
        return;
      case "city":
        this.setState({ city: e.target.value });
        return;
      case "address":
        this.setState({ address: e.target.value });
        return;
      case "tel":
        this.setState({ tel: e.target.value });
        return;
      default:
        return;
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // バリデート
  handleJumpToConf = () => {
    const { name, kana, city, address, gender, tel, todouhuken } = this.state;
    const errors = [];
    var count = 0;
    this.state.error.splice(0);

    if (name === "") {
      errors.push("お名前は必須項目です");
      count++;
    } else if (name.length > 30) {
      errors.push("お名前は30文字以内で入力してください");
      count++;
    }
    if (kana === "") {
      errors.push("ふりがなは必須項目です");
      count++;
    } else if (kana.length > 30) {
      errors.push("ふりがなは30文字以内で入力してください");
      count++;
    }
    if (todouhuken === "") {
      errors.push("都道府県は必須項目です");
      count++;
    }
    if (city.length > 30) {
      errors.push("市町村は30文字以内で入力してください");
      count++;
    }
    if (address.length > 100) {
      errors.push("市町村は100文字以内で入力してください");
      count++;
    }
    if (gender === "") {
      errors.push("性別は必須選択です");
      count++;
    }
    if (tel === "") {
      errors.push("電話番号は必須項目です");
      count++;
    } else if (tel.length > 11) {
      errors.push("電話番号は11ケタ以内で入力してください");
      count++;
    }

    this.setState({
      error: this.state.error.concat(errors)
    });

    if (count === 0) {
      this.props.history.push({
        pathname: "/registInfoConf",
        state: {
          userId: this.props.userId,
          name: this.state.name,
          kana: this.state.kana,
          todouhuken: this.state.todouhuken,
          city: this.state.city,
          address: this.state.address,
          tel: this.state.tel,
          age: this.state.age,
          gender: this.state.gender,
          transportation: this.state.transportation,
          career: this.state.career
        }
      });
    }
  };

  render() {
    const { classes } = this.props;
    const todouhukens = [
      "北海道",
      "青森県",
      "岩手県",
      "宮城県",
      "秋田県",
      "山形県",
      "福島県",
      "茨城県",
      "栃木県",
      "群馬県",
      "埼玉県",
      "千葉県",
      "東京都",
      "神奈川県",
      "新潟県",
      "山梨県",
      "長野県",
      "富山県",
      "石川県",
      "福井県",
      "岐阜県",
      "静岡県",
      "愛知県",
      "三重県",
      "滋賀県",
      "京都府",
      "大阪府",
      "兵庫県",
      "奈良県",
      "和歌山県",
      "鳥取県",
      "島根県",
      "岡山県",
      "広島県",
      "山口県",
      "徳島県",
      "香川県",
      "愛媛県",
      "高知県",
      "福岡県",
      "佐賀県",
      "長崎県",
      "熊本県",
      "大分県",
      "宮崎県",
      "鹿児島県",
      "沖縄県"
    ];
    const todouhuken = [];
    for (var i = 0; i < todouhukens.length; i++) {
      todouhuken.push(
        <MenuItem key={i + 1} value={todouhukens[i]}>
          {todouhukens[i]}
        </MenuItem>
      );
    }

    const age = [];
    for (var o = 16; o < 100; o++) {
      age.push(
        <MenuItem key={o} value={o}>
          {o}
        </MenuItem>
      );
    }

    const careers = [];
    for (var j = 0; j < 100; j++) {
      careers.push(
        <MenuItem key={j} value={j}>
          {j}
        </MenuItem>
      );
    }

    const transportations = [
      "徒歩",
      "電車",
      "自転車",
      "原付き",
      "バイク",
      "自動車"
    ];
    const transportation = [];
    for (var p = 0; p < transportations.length; p++) {
      transportation.push(
        <MenuItem key={p + 1} value={transportations[p]}>
          {transportations[p]}
        </MenuItem>
      );
    }

    const errorList = [];
    for (var q = 0; q < this.state.error.length; q++) {
      errorList.push(
        <li key={q} className={classes.error}>
          {this.state.error[q]}
        </li>
      );
    }

    return (
      <div className={classes.root}>
        <form className={classes.container} autoComplete="off">
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.typos}>
              情報登録
            </Typography>
            {this.state.error.length === 0 ? (
              <Typography variant="subtitle1" className={classes.typos2}>
                ※は必須項目です
              </Typography>
            ) : (
              <ul className={classes.ul}>{errorList}</ul>
            )}
            <FormControl className={classes.nameInput}>
              <InputLabel htmlFor="name-helper">お名前 ※</InputLabel>
              <Input
                id="name-helper"
                onChange={e => this.userTyping("name", e)}
              />
            </FormControl>
            <FormControl className={classes.kanaInput}>
              <InputLabel htmlFor="kana-helper">ふりがな ※</InputLabel>
              <Input
                id="kana-helper"
                onChange={e => this.userTyping("kana", e)}
              />
            </FormControl>
            <br />
            <FormControl className={classes.age}>
              <InputLabel htmlFor="age-helper">年齢</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange}
                inputProps={{
                  name: "age",
                  id: "age-helper"
                }}
              >
                {age}
              </Select>
            </FormControl>
            <FormControl className={classes.gender}>
              <InputLabel htmlFor="gender-helper">性別 ※</InputLabel>
              <Select
                value={this.state.gender}
                onChange={this.handleChange}
                inputProps={{
                  name: "gender",
                  id: "gender-helper"
                }}
              >
                <MenuItem value={0}>男</MenuItem>
                <MenuItem value={1}>女</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.telInput}>
              <InputLabel htmlFor="tel-helper">電話番号 ※</InputLabel>
              <Input
                id="tel-helper"
                onChange={e => this.userTyping("tel", e)}
              />
            </FormControl>
            <br />
            <FormControl className={classes.todouhuken}>
              <InputLabel htmlFor="todouhuken-helper">都道府県 ※</InputLabel>
              <Select
                value={this.state.todouhuken}
                onChange={this.handleChange}
                inputProps={{
                  name: "todouhuken",
                  id: "todouhuken-helper"
                }}
              >
                {todouhuken}
              </Select>
            </FormControl>
            <FormControl className={classes.cityInput}>
              <InputLabel htmlFor="city-helper">市町村</InputLabel>
              <Input
                id="city-helper"
                onChange={e => this.userTyping("city", e)}
              />
            </FormControl>
            <TextField
              id="standard-with-placeholder"
              label="番地 / マンション等"
              margin="dense"
              onChange={e => this.userTyping("address", e)}
              className={classes.address}
              fullWidth
            />
            <FormControl className={classes.transportation}>
              <InputLabel htmlFor="transportation-helper">移動手段</InputLabel>
              <Select
                value={this.state.transportation}
                onChange={this.handleChange}
                inputProps={{
                  name: "transportation",
                  id: "transportation-helper"
                }}
              >
                {transportation}
              </Select>
            </FormControl>
            <FormControl className={classes.career}>
              <InputLabel htmlFor="career-helper">野球歴</InputLabel>
              <Select
                value={this.state.career}
                onChange={this.handleChange}
                inputProps={{
                  name: "career",
                  id: "career-helper"
                }}
              >
                {careers}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => this.handleJumpToConf()}
              fullWidth
            >
              登録する
            </Button>
          </Paper>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(RegistryInfo));
