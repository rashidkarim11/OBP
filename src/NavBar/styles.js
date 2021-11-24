import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "rgb(17, 82, 147)",
    fontWeight: "bold",
    marginLeft: 40,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    color: "hsl(19, 76%, 56%)",
  },
  linkcont: {
    display: "flex",
  },
  linktag: {
    textDecoration: "none",
    fontSize: 200,
  },
  loginButton: {
    borderRadius: 30,
  },
}));

export default useStyles;
