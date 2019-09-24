import React, { Component, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { textAlign } from "@material-ui/system";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Grid from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { render } from "react-dom";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip
} from "recharts";

const styles = theme => ({
  // rootが利かないので一時的に本体にmargin
  root: {
    marginTop: "100px",
    flexGrow: 1
  },
  card: {
    marginLeft: 30,
    maxWidth: 345,
    marginBottom: 10
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500],
    marginLeft: 10
  },
  btn: {},
  title: {
    fontSize: "1.2rem",
    textAlign: "center"
  },
  price: {
    marginLeft: -3
  },
  priceSub: {
    color: "red",
    fontWeight: "bold",
    fontSize: "0.9rem"
  },
  weekend: {
    fontSize: "0.9rem",
    marginLeft: 5
  }
});

class Home extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      sukillId: "",
      sukettoId: "",
      battingLevel: "",
      battingDominant: "",
      battingType: "",
      pitchigDominant: "",
      pitchingType: "",
      pitchingLevel: "",
      pitchingChange: "",
      pitchingFast: "",
      pitchingCont: "",
      positionMain: "",
      positionLevel: "",
      armLevel: "",
      positionSub: "",
      runLevel: "",
      height: "",
      weight: "",
      update_date: ""
    };
  }

  componentDidMount() {
    axios("https://jsondata.okiba.me/v1/json/nVAro190924071220")
      .then(result => {
        this.setState({ users: result.data });
        console.log(this.state.users);
      })
      .catch(err => {
        console.log(err);
      });
  }

  makeDataRadar = user => {
    const dataRadar = [];
    dataRadar.push({ rank: "打撃力", value: 3 });
    dataRadar.push({ rank: "投手力", value: 4 });
    dataRadar.push({ rank: "守備力", value: 2 });
    dataRadar.push({ rank: "肩力", value: 1 });
    dataRadar.push({ rank: "走力", value: 2 });
  };

  potisionChanger = position => {
    switch (position) {
      case 0:
        return "投手";
      case 1:
        return "捕手";
      case 2:
        return "内野手";
      case 3:
        return "外野手";
      case 4:
        return "マネージャー";
      default:
        return "該当なし";
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          {this.state.users.map(user => {
            const dataRadar = [
              { rank: "打撃力", value: user.battingLevel },
              { rank: "投手力", value: user.pitchingLevel },
              { rank: "守備力", value: user.positionLevel },
              { rank: "肩力", value: user.armLevel },
              { rank: "走力", value: user.runLevel }
            ];
            return (
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {user.nickname.substr(0, 1)}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  }
                  title={<span className={classes.title}>{user.nickname}</span>}
                  subheader={
                    <div className={classes.price}>
                      <span className={classes.priceSub}>
                        ￥{user.price}
                        <span className={classes.priceSubTitle}>/1day</span>
                      </span>
                      <span className={classes.weekend}>
                        {user.weekend === 0 && "(土日祝 対応可)"}
                        {user.weekend === 1 && "(土曜のみ)"}
                        {user.weekend === 2 && "(日曜のみ)"}
                      </span>
                    </div>
                  }
                />
                <CardContent>
                  <RadarChart
                    height={200}
                    width={300}
                    cx="50%"
                    cy="50%"
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
                  <Table className={classes.table}>
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
                          {user.gender === 0 ? "男" : "女"}
                        </TableCell>
                        <TableCell />
                      </TableRow>
                      <TableRow key={2}>
                        <TableCell component="th" scope="row">
                          地域
                        </TableCell>
                        <TableCell align="left">{user.state}</TableCell>
                        <TableCell />
                      </TableRow>
                    </TableBody>
                    <TableRow key={3}>
                      <TableCell component="th" scope="row">
                        年齢
                      </TableCell>
                      <TableCell align="left">{user.age}歳</TableCell>
                      <TableCell />
                    </TableRow>
                    <TableRow key={4}>
                      <TableCell component="th" scope="row">
                        ポジション
                      </TableCell>
                      <TableCell align="left">
                        {this.potisionChanger(user.positionMain)}
                      </TableCell>
                      <TableCell />
                    </TableRow>
                    <TableRow key={5}>
                      <TableCell component="th" scope="row">
                        利き腕
                      </TableCell>
                      <TableCell align="left">
                        {user.pitchingDominant === 0 ? "右" : "左"}投
                        {user.battingDominant === 0 ? "右" : "左"}打
                      </TableCell>
                      <TableCell />
                    </TableRow>
                  </Table>
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    className={classes.btn}
                    fullWidth
                  >
                    詳細を見る
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
