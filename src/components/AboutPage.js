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
        backgroundColor: "#fff",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {/* Left: Text Card */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                px: { xs: 3, sm: 4 },
                py: { xs: 3, sm: 4 },
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "serif",
                    mb: 2,
                    color: "#000",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Welcome to Lillies - The Boho Cafe
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Welcome to Lillies - The Boho Cafe, your favorite cafe in town!
                  Our Cafe is an elegant and cozy space that offers a warm and
                  inviting ambiance for all our guests. At Lillies Cafe, we are
                  committed to serving you the best food, mocktails, and
                  experience. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right: Image Card */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                height: "100%",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                src="welcome.png"
                alt="Welcome Collage"
                sx={{
                  width: "100%",
                  height: { xs: 250, sm: 300, md: "100%" },
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
