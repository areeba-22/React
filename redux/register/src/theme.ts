import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ff6f61",
        },
        secondary: {
            main: "#43cea2", 
        },
        background: {
            default: "#f4f6f8", 
        },
    },
    typography: {
        fontFamily: "Poppins, Arial, sans-serif",
        h4: {
            fontWeight: 700,
            color: "#333",
        },
        body1: {
            fontSize: "1rem",
            color: "#555",
        },
    },
});

export default theme;