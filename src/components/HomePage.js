import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
} from "@mui/material";
import AboutPage from "./AboutPage";

const HomePage = () => {
  return (
    <Box>
      {/* === Hero Section === */}
      <Box
        id="home"
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: 'url("bg.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
            transform: "scale(1.05)",
            zIndex: 0,
          }}
        />
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 1,
          }}
        />
        {/* Navbar */}
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{ background: "transparent", zIndex: 2 }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box component="img" src="final.png" alt="Logo" sx={{ height: 50 }} />
            <Box>
              {[
                { label: "HOME", target: "#home" },
                { label: "ABOUT", target: "#about" },
                { label: "MENU", target: "#menu" },
                { label: "GALLERY", target: "#gallery" },
                { label: "CONTACT", target: "#contact" },
              ].map((item) => (
                <Button
                  key={item.label}
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    mx: 1,
                  }}
                  href={item.target}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        {/* Center Logo */}
        <Container
          sx={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box
            component="img"
            src="final.png"
            alt="Center Logo"
            sx={{
              width: { xs: "200px", md: "300px" },
              mb: 2,
            }}
          />
        </Container>
      </Box>

      {/* === About Section (from separate file) === */}
      <AboutPage />
    </Box>
  );
};

export default HomePage;
