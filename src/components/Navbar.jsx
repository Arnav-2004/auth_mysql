import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { signUp, login } from "../api/auth";

import Home from "./Home";

const theme = createTheme();

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

function AuthNavbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(loginData);
      setSnackbar({
        open: true,
        message: "Login successful!",
        severity: "success",
      });
      setIsLoginOpen(false);
      setLoginData({ email: "", password: "" });

      localStorage.setItem("user", JSON.stringify(response.user));

      setUser(response.user);
    } catch (error) {
      setSnackbar({ open: true, message: error.message, severity: "error" });
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setSnackbar({
      open: true,
      message: "Logged out successfully!",
      severity: "success",
    });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp(signupData);
      setSnackbar({
        open: true,
        message: "Signup successful!",
        severity: "success",
      });
      setIsSignupOpen(false);
      setSignupData({ name: "", email: "", password: "" });
    } catch (error) {
      setSnackbar({ open: true, message: error.message, severity: "error" });
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: "black" }}>
            Legal Partners
          </Typography>
          {user ? (
            <Button sx={{color: "black"}} onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button sx={{color: "black"}} onClick={() => setIsLoginOpen(true)}>
                Login
              </Button>
              <Button sx={{color: "black"}} onClick={() => setIsSignupOpen(true)}>
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      {user && (
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Home />
        </Box>
      )}

      <Modal
        open={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        aria-labelledby="login-modal-title"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography id="login-modal-title" variant="h6" component="h2">
              Login
            </Typography>
            <IconButton
              aria-label="close"
              onClick={() => setIsLoginOpen(false)}
              sx={{
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              required
              variant="outlined"
              value={loginData.email}
              onChange={handleLoginChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              name="password"
              type="password"
              required
              variant="outlined"
              value={loginData.password}
              onChange={handleLoginChange}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
              Login
            </Button>
          </form>
        </Box>
      </Modal>

      <Modal
        open={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        aria-labelledby="signup-modal-title"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography id="signup-modal-title" variant="h6" component="h2">
              Sign Up
            </Typography>
            <IconButton
              aria-label="close"
              onClick={() => setIsSignupOpen(false)}
              sx={{
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <form onSubmit={handleSignup}>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              required
              variant="outlined"
              value={signupData.name}
              onChange={handleSignupChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              required
              variant="outlined"
              value={signupData.email}
              onChange={handleSignupChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              name="password"
              type="password"
              required
              variant="outlined"
              value={signupData.password}
              onChange={handleSignupChange}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
              Sign Up
            </Button>
          </form>
        </Box>
      </Modal>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default AuthNavbar;
