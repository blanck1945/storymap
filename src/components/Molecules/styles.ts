import { makeStyles } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    minHeight: 200,
    alignItems: "center",
  },
  input: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
  },
}));
