import React from "react";
import { Container, Typography, Button, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container
            maxWidth={false} 
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw", 
                background: "linear-gradient(135deg,hsl(68, 24.20%, 25.90%),rgb(202, 112, 142))",
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
                    animation: "float 3s infinite ease-in-out",
                    width: "90%",
                    maxWidth: "500px",
                }}
            >
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
                    }}
                >
                    Welcome to Home Page
                </Typography>

                <Box mt={3}>
                    <Button
                        variant="contained"
                        sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            background: "linear-gradient(90deg, #ff6f61, #d32f2f)",
                            color: "#fff",
                            "&:hover": { background: "#c62828" },
                        }}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </Button>

                    <Button
                        variant="outlined"
                        sx={{
                            ml: 2,
                            px: 4,
                            py: 1.5,
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            borderColor: "#fff",
                            color: "#fff",
                            "&:hover": { background: "rgba(255, 255, 255, 0.2)" },
                        }}
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </Button>
                </Box>
            </Paper>

            <style>
                {`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                    100% { transform: translateY(0px); }
                }
                `}
            </style>
        </Container>
    );
};

export default Home;