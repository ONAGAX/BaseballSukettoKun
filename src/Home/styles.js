const styles = theme => ({
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
    backgroundColor: "#c0c0c0",
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

export default styles;
