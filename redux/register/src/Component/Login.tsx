import React from "react";
import { Container, TextField, Button, Typography, Paper, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log("Login button clicked! Navigating to Home...");
        navigate("/home");
    };

    return (
        <Container
            maxWidth={false}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
                background: "linear-gradient(135deg,rgb(16, 58, 72),rgb(154, 191, 235))",
            }}
        >
            <Paper
                elevation={10}
                sx={{
                    padding: 5,
                    borderRadius: 5,
                    textAlign: "center",
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                    width: "90%",
                    maxWidth: "400px",
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: "#fff" }}>
                    Login
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                            sx: { color: "#fff" },
                        }}
                        InputLabelProps={{
                            sx: { color: "#fff" },
                        }}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        InputProps={{
                            sx: { color: "#fff" },
                        }}
                        InputLabelProps={{
                            sx: { color: "#fff" },
                        }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 2,
                            py: 1.5,
                            fontSize: "1rem",
                            fontWeight: "bold",
                            background: "linear-gradient(90deg, #ff6f61, #d32f2f)",
                            color: "#fff",
                            "&:hover": { background: "#c62828" },
                        }}
                        onClick={handleLogin}
                    >
                        Sign In
                    </Button>
                    <Typography variant="body2" sx={{ mt: 2, color: "#fff" }}>
                        Don't have an account?{" "}
                        <Link to="/signup" style={{ color: "#1e88e5", textDecoration: "none", fontWeight: "bold" }}>
                            Sign Up
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;