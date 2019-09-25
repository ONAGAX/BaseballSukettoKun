import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import styles from "./styles";

import clsx from "clsx";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

class SkillRegist extends Component {
  constructor() {
    super();
    this.state = {
      valueText: "",
      battingLevel: 5,
      pitchingLevel: 5,
      armLevel: 5,
      positionLevel: 5,
      runLevel: 5,
      pitchingFast: 110,
      pitchingCon: 5,
      pitchingChange: 5,
      error: []
    };
  }

  handleBattingDominant = e => {
    this.setState({ battingDominant: e.target.value });
  };
  handlePitchingDominant = e => {
    this.setState({ pitchingDominant: e.target.value });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClickedBtn = () => {
    console.log(this.state);
  };

  userTyping = (type, e) => {
    switch (type) {
      case "height":
        this.setState({ height: e.target.value });
        return;
      case "weight":
        this.setState({ weight: e.target.value });
        return;
      case "price":
        this.setState({ price: e.target.value });
        return;
      default:
        return;
    }
  };

  // すごい冗長だが、解決策が見えない。nameがとれない
  handleChangeBL = (event, value) => {
    this.setState({ battingLevel: value });
  };
  handleChangePL = (event, value) => {
    this.setState({ pitchingLevel: value });
  };
  handleChangePoL = (event, value) => {
    this.setState({ positionLevel: value });
  };
  handleChangeAL = (event, value) => {
    this.setState({ armLevel: value });
  };
  handleChangeRL = (event, value) => {
    this.setState({ runLevel: value });
  };
  handleChangeFast = (event, value) => {
    this.setState({ pitchingFast: value });
  };
  handleChangePcontL = (event, value) => {
    this.setState({ pitchingCon: value });
  };
  handleChangePchangeL = (event, value) => {
    this.setState({ pitchingChange: value });
  };

  handleJumpToConf = () => {
    this.setState({ user: [] });

    const {
      pitchingDominant,
      battingDominant,
      positionMain,
      positionSub,
      weekend,
      height,
      weight,
      price
    } = this.state;

    var errors = [];
    pitchingDominant == null &&
      errors.push("ピッチングの利き腕を選択してください");
    battingDominant == null &&
      errors.push("バッティングの利き打ちを選択してください");
    positionMain == null && errors.push("ポジションを選択してください");
    positionSub == null && errors.push("サブポジションを選択してください");
    weekend == null && errors.push("出動可能な曜日を選択してください");
    if (height == null) {
      errors.push("身長を入力してください");
    } else if (parseInt(height, 10) > 250) {
      errors.push("身長は250com以下で入力してください");
    } else if (parseInt(height, 10) < 0) {
      errors.push("身長は0以上の自然数で入力してください");
    }
    if (weight == null) {
      errors.push("体重を入力してください");
    } else if (parseInt(weight, 10) > 150) {
      errors.push("体重は150kgm以下で入力してください");
    } else if (parseInt(weight, 10) < 0) {
      errors.push("体重は0以上の自然数で入力してください");
    }
    if (price == null) {
      errors.push("希望日給を入力してください");
    } else if (parseInt(price, 10) > 100000000) {
      errors.push("希望日給は1億円以下で入力してください");
    } else if (parseInt(price, 10) < 0) {
      errors.push("希望日給は0以上の自然数で入力してください");
    }

    if (errors.length === 0) {
      console.log("スキル詳細画面へstateを持って飛ぶ（確認用として）");
      this.props.history.push({
        // 一時的にskillにする
        pathname: "/skill",
        state: {
          pitchingDominant: parseInt(this.state.pitchingDominant, 10),
          battingDominant: parseInt(this.state.battingDominant, 10),
          positionMain: this.state.positionMain,
          positionSub: this.state.positionSub,
          weekend: this.state.weekend,
          height: parseInt(this.state.height, 10),
          weight: parseInt(this.state.weight, 10),
          price: parseInt(this.state.price, 10),
          battingType: this.state.battingType,
          pitchingType: this.state.pitchingType,
          battingLevel: this.state.battingLevel,
          pitchingLevel: this.state.pitchingLevel,
          armLevel: this.state.armLevel,
          positionLevel: this.state.positionLevel,
          runLevel: this.state.runLevel,
          pitchingFast: this.state.pitchingFast,
          pitchingCon: this.state.pitchingCon,
          pitchingChange: this.state.pitchingChange,
          career: this.props.career,
          nickname: this.props.nickname,
          email: this.props.email,
          sukettoId: this.props.sukettoId
        }
      });
    } else {
      this.setState({ error: errors });
    }
  };

  render() {
    const { classes } = this.props;
    const errorList = [];
    for (var i = 0; i < this.state.error.length; i++) {
      errorList.push(
        <li key={i} className={classes.error}>
          {this.state.error[i]}
        </li>
      );
    }

    return (
      <div className={classes.root}>
        <form className={classes.container} autoComplete="off">
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.typos}>
              スキル情報登録
            </Typography>
            {this.state.error.length === 0 ? (
              <Typography variant="subtitle1" className={classes.typos2}>
                すべて必須項目です
              </Typography>
            ) : (
              <ul className={classes.ul}>{errorList}</ul>
            )}
            <div>
              <span className={classes.leftLabel}>
                バッティングレベル(自称)
              </span>
              <span className={classes.rightLabel}>ピッチングレベル(自称)</span>
            </div>
            <Slider
              className={classes.slider1}
              defaultValue={5}
              name="pitchingLevel"
              value={this.state.value}
              onChange={this.handleChangeBL}
              getAriaValueText={this.state.valueText}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
            />
            <Slider
              className={classes.slider2}
              defaultValue={5}
              value={this.state.value}
              onChange={this.handleChangePL}
              getAriaValueText={this.state.valueText}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
            />
            <div className={classes.sliderDiv}>
              <span className={classes.leftLabel}>守備レベル(自称)</span>
              <span className={classes.rightLabel2}>肩力レベル(自称)</span>
            </div>
            <Slider
              className={classes.slider1}
              defaultValue={5}
              value={this.state.value}
              onChange={this.handleChangePoL}
              getAriaValueText={this.state.valueText}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
            />
            <Slider
              className={classes.slider2}
              defaultValue={5}
              value={this.state.value}
              onChange={this.handleChangeAL}
              getAriaValueText={this.state.valueText}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
            />
            <div className={classes.sliderDiv}>
              <span className={classes.leftLabel}>走力レベル(自称)</span>
            </div>
            <Slider
              className={classes.slider1}
              defaultValue={5}
              value={this.state.value}
              onChange={this.handleChangeRL}
              getAriaValueText={this.state.valueText}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
            />
            <div className={classes.dominat}>
              <div className={classes.battindDominant}>
                <FormLabel component="legend">バッティング</FormLabel>
                <RadioGroup
                  aria-label="battingDominant"
                  name="battingDominant"
                  value={this.state.dominant}
                  onChange={e => this.handleBattingDominant(e)}
                  row
                >
                  <FormControlLabel
                    value="0"
                    control={<Radio color="primary" />}
                    label="左打ち"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="1"
                    control={<Radio className={classes.btnMarginRight} />}
                    label="右打ち"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </div>
              <div className={classes.pitchingDominant}>
                <FormLabel component="legend">ピッチング</FormLabel>
                <RadioGroup
                  aria-label="pitchingDominant"
                  name="pitchingDominant"
                  value={this.state.dominant}
                  onChange={e => this.handlePitchingDominant(e)}
                  row
                >
                  <FormControlLabel
                    value="0"
                    control={<Radio color="primary" />}
                    label="左投げ"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="1"
                    control={<Radio className={classes.btnMarginRight} />}
                    label="右投げ"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </div>
            </div>
            <FormControl className={classes.battingType}>
              <InputLabel htmlFor="btype-helper">バッティングタイプ</InputLabel>
              <Select
                value={this.state.battingType}
                onChange={this.handleChange}
                inputProps={{
                  name: "battingType",
                  id: "btype-helper"
                }}
              >
                <MenuItem value={0}>出塁率重視</MenuItem>
                <MenuItem value={1}>ヒッティング重視</MenuItem>
                <MenuItem value={2}>長打重視</MenuItem>
                <MenuItem value={3}>フライボール革命</MenuItem>
                <MenuItem value={4}>特になし</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.pitchingType}>
              <InputLabel htmlFor="ptype-helper">ピッチングタイプ</InputLabel>
              <Select
                value={this.state.pitchingType}
                onChange={this.handleChange}
                inputProps={{
                  name: "pitchingType",
                  id: "ptype-helper"
                }}
              >
                <MenuItem value={0}>打たせて取る</MenuItem>
                <MenuItem value={1}>三振重視</MenuItem>
                <MenuItem value={2}>喧嘩投法</MenuItem>
                <MenuItem value={3}>ストライクオンリー</MenuItem>
                <MenuItem value={4}>特になし</MenuItem>
              </Select>
            </FormControl>
            <div className={classes.sliderDiv2}>
              <span className={classes.leftLabel}>最高球速</span>
            </div>
            <Slider
              className={classes.slider3}
              defaultValue={110}
              getAriaValueText={this.state.valueText}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={5}
              value={this.state.value}
              onChange={this.handleChangeFast}
              marks
              min={80}
              max={165}
            />
            <div className={classes.sliderDiv}>
              <span className={classes.leftLabel}>
                コントロールレベル(自称)
              </span>
              <span className={classes.rightLabel3}>変化球レベル(自称）</span>
            </div>
            <Slider
              className={classes.slider1}
              defaultValue={5}
              value={this.state.value}
              onChange={this.handleChangePcontL}
              getAriaValueText={this.state.valueText}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
            />
            <Slider
              className={classes.slider2}
              defaultValue={5}
              value={this.state.value}
              onChange={this.handleChangePchangeL}
              getAriaValueText={this.state.valueText}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
            />
            <div className={classes.positionDiv}>
              <FormControl className={classes.positionMain}>
                <InputLabel htmlFor="positionMain-helper">
                  ポジション
                </InputLabel>
                <Select
                  value={this.state.positionMain}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "positionMain",
                    id: "positionMain-helper"
                  }}
                >
                  <MenuItem value={1}>投手</MenuItem>
                  <MenuItem value={0}>捕手</MenuItem>
                  <MenuItem value={2}>内野手</MenuItem>
                  <MenuItem value={3}>外野手</MenuItem>
                  <MenuItem value={4}>マネージャー</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.positionSub}>
                <InputLabel htmlFor="positionSub-helper">
                  サブポジション
                </InputLabel>
                <Select
                  value={this.state.positionSub}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "positionSub",
                    id: "positionSub-helper"
                  }}
                >
                  <MenuItem value={1}>投手</MenuItem>
                  <MenuItem value={0}>捕手</MenuItem>
                  <MenuItem value={2}>内野手</MenuItem>
                  <MenuItem value={3}>外野手</MenuItem>
                  <MenuItem value={4}>マネージャー</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.weekend}>
                <InputLabel htmlFor="weekend-helper">出動可能な曜日</InputLabel>
                <Select
                  value={this.state.weekend}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "weekend",
                    id: "weekend-helper"
                  }}
                >
                  <MenuItem value={0}>土日祝日可能</MenuItem>
                  <MenuItem value={1}>土曜のみ可能</MenuItem>
                  <MenuItem value={2}>日曜のみ可能</MenuItem>
                </Select>
              </FormControl>
            </div>
            <TextField
              id="filled-adornment-height"
              type="number"
              className={classes.height}
              label="身長"
              onChange={e => this.userTyping("height", e)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <span className={classes.adornment}>cm</span>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              id="filled-adornment-weight"
              type="number"
              className={classes.weight}
              label="体重"
              onChange={e => this.userTyping("weight", e)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <span className={classes.adornment}>kg</span>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              id="filled-adornment-price"
              type="number"
              className={classes.price}
              label="希望日給"
              onChange={e => this.userTyping("price", e)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <span className={classes.adornment}>円/day</span>
                  </InputAdornment>
                )
              }}
            />
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

export default withStyles(styles)(withRouter(SkillRegist));
