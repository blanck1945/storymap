import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    width: "100vw",
    height: 55,
    backgroundColor: blue[800],
    display: "grid",
    gridTemplateColumns: "20% 80%",
    padding: theme.spacing(0, 4),
  },
  links: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > a": {
      textDecoration: "none",
      color: blue[100],
      transition: "all 0.2s ease-out",
      "& a:link": {
        color: theme.palette.common.white,
      },
      "&:hover": {
        color: theme.palette.common.white,
      },
    },
  },
}));
