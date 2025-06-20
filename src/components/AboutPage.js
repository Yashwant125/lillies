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
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          wrap="nowrap"
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Left: Text Card */}
          <Grid item>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                px: 4,
                py: 4,
                width: 500,
                textAlign: "center",
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
                  }}
                >
                  Welcome to Tiger Lily Bistro
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                  }}
                >
                  Welcome to Tiger Lily Bistro, your favorite bistro in town!
                  Our bistro is an elegant and cozy space that offers a warm
                  and inviting ambiance for all our guests. At Tiger Lily
                  Bistro, we are committed to serving you the best food,
                  mocktails, and experience. Our menu is carefully curated to
                  offer a variety of dishes that cater to different tastes and
                  preferences. From our delicious appetizers to our
                  mouth-watering entrees and desserts, we ensure that every dish
                  is prepared using fresh and high-quality ingredients.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right: Image Card */}
          <Grid item>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                width: 500,
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
