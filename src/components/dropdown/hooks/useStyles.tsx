import { createUseStyles } from "react-jss";

const maxWidth = 300;

const useStyles = createUseStyles({
  container: {
    position: "relative",
    width: maxWidth,
    margin: "0 auto",
    padding: "10px",
  },
  input: {
    width: "100%",
    height: "40px",
    padding: "0 10px",
    boxSizing: "border-box",
    fontSize: "16px",
    outline: "none",
    cursor: "pointer",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ccc",
    "&:focus": {
      boxShadow: "0px 0px 0px 3px #d6e1f7",
      border: "3px solid #8e9ac5",
    },
    paddingRight: 36,
    paddingLeft: 16,
  },
  inputContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    "& img": {
      position: "absolute",
      right: 10,
    },
  },
  dropdown: {
    position: "absolute",
    top: "40px",
    width: "100%",
    maxHeight: "200px",
    maxWidth: maxWidth,
    overflowY: "auto",
    overflowX: "hidden",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    zIndex: 1,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    listStyleType: "none",
    padding: 10,
    borderRadius: 10,
  },
  selectedListItem: {
    padding: "12px 48px 12px 16px",
    cursor: "pointer",
    background: "gray",
    backgroundColor: "#f2f4ff",
    borderRadius: 8,
    color: "#7280c0",
    position: "relative",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    "& img": {
      position: "absolute",
      right: 8,
    },
    marginBottom: 4,
  },
  highlightedListItem: {
    padding: "12px 16px",
    cursor: "pointer",
    background: "gray",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 4,
  },
  listItem: {
    maxWidth: maxWidth,
    padding: "12px 16px",
    cursor: "pointer",
    borderRadius: 8,
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
    marginBottom: 4,
  },
  rotate180: {
    transform: "rotate(180deg)",
  },
});

export default useStyles;
