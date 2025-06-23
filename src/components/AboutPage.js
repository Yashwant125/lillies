import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

const AboutPage = () => {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "#000",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          {/* Left: Text */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 3, sm: 4, md: 5 },
                backgroundColor: "#121212",
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "serif",
                    mb: { xs: 2, md: 3 },
                    color: "#fff",
                    textAlign: { xs: "center", md: "left" },
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                  }}
                >
                  Welcome to Lillies - The Boho Cafe
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#ccc",
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                    lineHeight: 1.8,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Welcome to Lillies - The Boho Cafe, your favorite cafe in town!
                  Our cafe is an elegant and cozy space that offers a warm and
                  inviting ambiance for all our guests. At Lillies Cafe, we are
                  committed to serving you the best food, mocktails, and
                  experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right: Image */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                src="welcome.png"
                alt="Welcome Collage"
                sx={{
                  width: "100%",
                  height: {
                    xs: 240,
                    sm: 300,
                    md: 340,
                    lg: 380,
                  },
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
