// src/components/AboutPage.js
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const AboutPage = () => {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "#fff",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="stretch">
          {/* Left Card – Text */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: 3,
                boxShadow: 3,
                px: 3,
                py: 4,
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "serif",
                    mb: 2,
                    color: "#000",
                  }}
                >
                  Welcome to Tiger Lily Bistro
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#555", fontSize: "1rem", lineHeight: 1.8 }}
                >
                 Welcome to Tiger Lily Bistro, your favorite bistro in town! Our bistro is an elegant and cozy space that offers a warm and inviting ambiance for all our guests. At Tiger Lily Bistro, we are committed to serving you the best food, mocktails, and experience. Our menu is carefully curated to offer a variety of dishes that cater to different tastes and preferences. From our delicious appetizers to our mouth-watering entrees and desserts, we ensure that every dish is prepared using fresh and high-quality ingredients
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Middle Card – Image */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: 3,
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                src="welcome1.png"
                alt="Welcome Image 1"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Card>
          </Grid>

          {/* Right Card – Image */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: 3,
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                src="welcome2.png"
                alt="Welcome Image 2"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
