import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import styles from "./styles";

import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar
} from "recharts";

class Skill extends Component {
  constructor() {
    super();
  }

  render() {
    const { classes } = this.props;

    const {
      pitchingDominant,
      battingDominant,
      positionMain,
      positionSub,
      weekend,
      height,
      weight,
      price,
      battingType,
      pitchingType,
      battingLevel,
      pitchingLevel,
      armLevel,
      positionLevel,
      runLevel,
      pitchingFast,
      pitchingCon,
      pitchingChange,
      nickname,
      email,
      sukettoId,
      career
    } = this.props.location.state;

    const dataRadar = [
      { rank: "打撃力", value: battingLevel },
      { rank: "投手力", value: pitchingLevel },
      { rank: "守備力", value: positionLevel },
      { rank: "肩力", value: armLevel },
      { rank: "走力", value: runLevel }
    ];

    const data_event = [
      { name: "球速力", レベル: pitchingFast },
      { name: "制球力", レベル: pitchingCon * 16 },
      { name: "変化球", レベル: pitchingChange * 16 }
    ];

    const battingTypeList = [
      "出塁率重視",
      "ヒッティング重視",
      "長打重視",
      "フライボール革命",
      "特になし"
    ];

    const pitchingTypeList = [
      "打たせて取る",
      "三振重視",
      "喧嘩投法",
      "ストライクオンリー",
      "特になし"
    ];

    const positionList = ["投手", "捕手", "内野手", "外野手", "マネージャー"];

    return (
      <div className={classes.root}>
        {console.log(this.props.location.state)}
        <form className={classes.container} autoComplete="off">
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item xs className={classes.blue}>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src="http://quattro.phys.sci.kobe-u.ac.jp/Bussei_Riron/photo/none.jpg"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs className={classes.green}>
                <Typography variant="h6" className={classes.typos}>
                  助っ人君*
                </Typography>
                <Typography variant="subtitle1" className={classes.typoSub}>
                  <strong className={classes.price}>￥{price}</strong>
                  <span className={classes.weekend}>
                    {" "}
                    /1日
                    {weekend === 0 && "(土日祝 対応可)"}
                    {weekend === 1 && "(土曜のみ)"}
                    {weekend === 2 && "(日曜のみ)"}
                  </span>
                </Typography>
                <Table className={classes.table} size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell />
                      <TableCell />
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key={1}>
                      <TableCell component="th" scope="row">
                        性別
                      </TableCell>
                      <TableCell align="left">
                        男*
                        {/* {gender === 0 ? "男" : "女"} */}
                      </TableCell>
                      <TableCell />
                    </TableRow>
                    <TableRow key={2}>
                      <TableCell component="th" scope="row">
                        地域
                      </TableCell>
                      <TableCell align="left">沖縄県*</TableCell>
                      <TableCell />
                    </TableRow>
                  </TableBody>
                  <TableRow key={3}>
                    <TableCell component="th" scope="row">
                      年齢
                    </TableCell>
                    <TableCell align="left">33歳*</TableCell>
                    <TableCell />
                  </TableRow>
                  <TableRow key={4}>
                    <TableCell component="th" scope="row">
                      ポジション
                    </TableCell>
                    <TableCell align="left">
                      {positionList[positionMain]}
                    </TableCell>
                    <TableCell />
                  </TableRow>
                  <TableRow key={5}>
                    <TableCell component="th" scope="row">
                      利き腕
                    </TableCell>
                    <TableCell align="left">
                      {pitchingDominant === 0 ? "右" : "左"}投
                      {battingDominant === 0 ? "右" : "左"}打
                    </TableCell>
                    <TableCell />
                  </TableRow>
                  <TableRow key={6}>
                    <TableCell component="th" scope="row">
                      野球歴
                    </TableCell>
                    <TableCell align="left">{career}年*</TableCell>
                    <TableCell />
                  </TableRow>
                </Table>
              </Grid>
            </Grid>
            <Divider variant="middle" className={classes.divider2} />
            <Grid container spacing={2}>
              <Grid item xs className={classes.chart}>
                <RadarChart
                  height={200}
                  width={250}
                  cx="50%"
                  cy="60%"
                  data={dataRadar}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="rank" />
                  <Radar
                    dataKey="value"
                    stroke="red"
                    fill="red"
                    fillOpacity={0.6}
                  />
                  <Tooltip />
                </RadarChart>
              </Grid>
              <Grid item xs className={classes.chart}>
                <Table className={classes.table} size="small">
                  {/* <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell />
                      </TableRow>
                    </TableHead> */}
                  <TableBody>
                    <TableRow key={1}>
                      <TableCell component="th" scope="row">
                        打撃タイプ
                      </TableCell>
                      <TableCell align="left">
                        {battingTypeList[battingType]}
                      </TableCell>
                    </TableRow>
                    <TableRow key={2}>
                      <TableCell component="th" scope="row">
                        投手タイプ
                      </TableCell>
                      <TableCell align="left">
                        {pitchingTypeList[pitchingType]}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                  <TableRow key={3}>
                    <TableCell component="th" scope="row">
                      ポジション
                    </TableCell>
                    <TableCell align="left">
                      {positionList[positionSub]}
                    </TableCell>
                  </TableRow>
                  <TableRow key={4}>
                    <TableCell component="th" scope="row">
                      サブ
                    </TableCell>
                    <TableCell align="left">捕手</TableCell>
                  </TableRow>
                  <TableRow key={5}>
                    <TableCell component="th" scope="row">
                      身長
                    </TableCell>
                    <TableCell align="left">{height} cm</TableCell>
                  </TableRow>
                  <TableRow key={6}>
                    <TableCell component="th" scope="row">
                      体重
                    </TableCell>
                    <TableCell align="left">{weight} kg</TableCell>
                  </TableRow>
                </Table>
              </Grid>
            </Grid>
            <div className={classes.chart2}>
              <ComposedChart
                width={560}
                height={150}
                layout="vertical"
                data={data_event}
              >
                <XAxis
                  type="number"
                  domain={["dataMin - 20", "dataMax + 10"]}
                />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Bar
                  dataKey="レベル"
                  barSize={15}
                  stroke="rgba(184, 134, 11, 0.6)"
                  fillOpacity={1}
                  fill="#ff8c00"
                />
              </ComposedChart>
            </div>
            <div className={classes.btn}>
              <Button
                variant="contained"
                color="primary"
                className={classes.chatBtn}
                onClick={() => this.handleCheckValue()}
              >
                チャットを開始する
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.payBtn}
                onClick={() => this.handleBack()}
              >
                助っ人をお願いする
              </Button>
            </div>
            <Divider variant="middle" className={classes.divider} />
            <div className={classes.comment}>
              <TextField
                id="comment"
                className={classes.commentField}
                placeholder="commentを記入してください"
                margin="normal"
                inputProps={{ "aria-label": "comment" }}
              />
              <IconButton aria-label="send" className={classes.send}>
                <SendIcon />
              </IconButton>
            </div>
          </Paper>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Skill));
