import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

import AboutPage from "./AboutPage";
import CozyAmbienceBanner from "./CozyAmbienceBanner";
import CozyAmbience from "./CozyAmbience";
import Menu from "./Menu";
import MessageMissionVision from "./MessageMissionVision";
import TestimonialsSection from "./TestimonialsSection";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const navItems = [
  { label: "HOME", target: "#home" },
  { label: "ABOUT", target: "#about" },
  { label: "MENU", target: "#menu" },
  { label: "GALLERY", target: "#gallery" },
  { label: "CONTACT", target: "#contact" },
];

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box>
      {/* === Hero Section === */}
      <Box
        id="home"
        sx={{
          position: "relative",
          height: { xs: "100vh", md: "100vh" },
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: 'url("main.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
            transform: "scale(1.05)",
            zIndex: 0,
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
        />

        {/* Navbar */}
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{
            background: "transparent",
            zIndex: 2,
            px: { xs: 2, md: 4 },
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box
              component="img"
              src="final.png"
              alt="Logo"
              sx={{ height: { xs: 45, sm: 55 } }}
            />
            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={toggleDrawer}
                  sx={{ color: "#fff" }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                  <List sx={{ width: 220 }}>
                    {navItems.map((item) => (
                      <ListItem
                        button
                        key={item.label}
                        component="a"
                        href={item.target}
                        onClick={toggleDrawer}
                      >
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </>
            ) : (
              <Box>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      mx: 1,
                      "&:hover": {
                        color: "#c7a36e",
                      },
                    }}
                    href={item.target}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
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
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src="final.png"
            alt="Center Logo"
            sx={{
              width: { xs: "180px", sm: "240px", md: "320px" },
              maxWidth: "100%",
            }}
          />
        </Container>
      </Box>

      {/* === Page Sections === */}
      <AboutPage />
      <CozyAmbienceBanner />
      <CozyAmbience />
      <Menu />
      <MessageMissionVision />
      <TestimonialsSection />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default HomePage;
