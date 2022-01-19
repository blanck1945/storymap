import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  loginContainer: {
    width: "50%",
    minHeight: "50%",
    margin: "auto",
    marginTop: theme.spacing(3),
    borderRadius: theme.spacing(1),
  },
}));
