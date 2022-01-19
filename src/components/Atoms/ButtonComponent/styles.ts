import { makeStyles } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: theme.spacing(),
    padding: theme.spacing(2, 4),
    color: theme.palette.common.white,
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease-out;",
  },
  primary: {
    backgroundColor: indigo[900],
    "&:hover": {
      backgroundColor: indigo[700],
    },
  },
  secondary: {
    backgroundColor: "#47476b",
  },
  success: {
    backgroundColor: "#00b300",
  },
  danger: {
    backgroundColor: "#b30000",
  },
}));
