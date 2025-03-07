import React from "react";
import { Container, TextField, Button, Typography, Paper, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        console.log("Register button clicked! Navigating to login...");
        navigate("/login");
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
                background: "linear-gradient(135deg,rgb(121, 101, 101),rgb(241, 198, 187))",
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
                    Sign Up
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <TextField
                        fullWidth
                        label="Full Name"
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
                            background: "linear-gradient(90deg,rgb(249, 164, 156),rgb(173, 100, 100))",
                            color: "#fff",
                            "&:hover": { background: "#c62828" },
                        }}
                        onClick={handleRegister}
                    >
                        Register
                    </Button>
                    <Typography variant="body2" sx={{ mt: 2, color: "#fff" }}>
                        Already have an account?{" "}
                        <Link to="/login" style={{ color: "#1e88e5", textDecoration: "none", fontWeight: "bold" }}>
                            Login
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default Signup;