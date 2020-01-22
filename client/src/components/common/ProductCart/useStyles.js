import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  item: {
    height: 100,
    alignItems: "center",
    justifyItems: "center",
    border: "1px solid",
    borderTop: "none",
    borderColor: theme.palette.secondary.light,
    [theme.breakpoints.down("xs")]: {
      height: 200,
    },
  },
  imageGrid: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    height: 92,
    objectFit: "cover",
  },
  title: {
    fontSize: 14,
    color: theme.palette.secondary.dark,
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
  },
  titleGrid: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  quantityNumber: {
    margin: "0px 6px",
    fontSize: 14,
    width: 36,
    textAlign: "center",
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    border: "1px solid",
    borderColor: theme.palette.secondary.light,
    "&:focus": {
      outlineColor: theme.palette.primary.main,
    },
  },
  quantityGrid: {
    display: "flex",
    justifyContent: "center",
  },
  price: {
    textAlign: "right",
    fontSize: 14,
    fontWeight: 600,
  },
  closeBtnGrid: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      alignSelf: "start",
    },
  },
}));

export default useStyles;
