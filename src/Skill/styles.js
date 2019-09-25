import { borderRadius } from "@material-ui/system";

const styles = theme => ({
  root: {
    marginTop: "100px",
    marginBottom: "60px",
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 620
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
  },
  blue: {
    height: 300,
    marginRight: 10,
    marginLeft: 10
  },
  green: {
    height: 300,
    marginLeft: 10,
    marginRight: 10
  },
  img: {
    marginLeft: 125,
    marginTop: 10,
    display: "block",
    maxWidth: 270,
    maxHeight: 270,
    objectFit: "cover",
    borderRadius: "0.5rem"
  },
  typoSub: {
    fontSize: "1.3rem",
    color: "red",
    textAlign: "center"
  },
  weekend: {
    fontSize: "0.9rem",
    color: "silver"
  },
  chart: {
    height: 250,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    textAlign: "center"
  },
  chart2: {
    marginTop: 0
  },
  btn: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 550
  },
  chatBtn: {
    marginTop: "20px",
    width: 250
  },
  payBtn: {
    marginTop: "20px",
    width: 250,
    marginLeft: 50
  },
  comment: {
    marginTop: 20
  },
  commentField: {
    width: 400,
    marginLeft: 60
  },
  send: {
    marginTop: 10,
    marginLeft: 10,
    color: "#4169e1"
  },
  divider: {
    marginTop: 30
  },
  divider2: {
    marginTop: 40,
    marginBottom: 30
  }
});

export default styles;
