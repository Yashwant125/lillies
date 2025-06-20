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

const CozyAmbience = () => {
  return (
    <Box
      id="ambience"
      sx={{
        backgroundColor: "#000", // Black background
        py: { xs: 6, md: 10 },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Left: Image Card */}
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
                src="ambii.png"
                alt="Cozy Ambience"
                sx={{
                  width: "100%",
                  height: { xs: 250, sm: 400, md: "100%" },
                  objectFit: "cover",
                }}
              />
            </Card>
          </Grid>

          {/* Right: Text Card */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                px: 4,
                py: 4,
                textAlign: "center",
                height: "100%",
                backgroundColor: "#121212", // Dark card background
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "serif",
                    mb: 2,
                    color: "#fff", // White heading
                  }}
                >
                  Cozy Ambience
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#ccc", // Light gray body text
                    fontSize: "1rem",
                    lineHeight: 1.8,
                  }}
                >
                  Cosy Ambience – A Warm, Charming Atmosphere.
                  Our bistro also features an outdoor seating area where you can enjoy your meals in a relaxed and serene environment. It's the perfect place to unwind with your loved ones or catch up with friends over a cup of coffee or tea.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CozyAmbience;
