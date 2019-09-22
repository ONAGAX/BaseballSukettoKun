const drawerWidth = 240;
const headerNavigationHeight = 56;
const bottomNavigationHeight = 56;

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    paddingTop: `calc(10px + ${headerNavigationHeight}px)`,
    paddingBottom: `calc(10px + ${bottomNavigationHeight}px)`,
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  button: {
    margin: "0 1rem 0 auto"
  },
  NotificationTxt: {
    margin: "0 auto 0 2rem",
    color: "red"
  },
  smallSpan: {
    marginLeft: "0.5rem",
    fontSize: "1rem"
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  welcomeName: {
    margin: "0 1rem 0 auto"
  },
  logout: {
    color: "bule"
  }
});

export default styles;
