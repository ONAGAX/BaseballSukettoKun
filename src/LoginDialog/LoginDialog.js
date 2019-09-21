import React, { Component } from "react";
import axios from "axios";

import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  googleBtn: {
    marginLeft: "4rem",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 30,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
});

class LoginDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { userId: "", password: "" }
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ログイン情報を入力してください
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="id"
              name="userId"
              label="ユーザーid"
              type="text"
              autoComplete="off"
              fullWidth
            />
            <TextField
              margin="dense"
              id="id"
              name="password"
              label="パスワード"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <Button color="primary" className={classes.googleBtn}>
              googleでのログイン
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.close} color="primary">
              キャンセル
            </Button>
            <Button
              color="primary"
              onClick={() => this.props.handlePostLogin()}
            >
              送信
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginDialog);

// function FormDialog(props) {
//   const [open, setOpen] = this.props;

//   function handleClickOpen() {
//     setOpen(true);
//   }

//   function handleClose() {
//     setOpen(false);
//   }
//   return (
//     <div>
//       {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open form dialog
//       </Button> */}
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your email address here.
//             We will send updates occasionally.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             fullWidth
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleClose} color="primary">
//             Subscribe
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
