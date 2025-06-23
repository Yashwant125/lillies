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
        backgroundColor: "#000",
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
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
        >
          {/* Left: Image Card */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                height: { xs: 250, sm: 350, md: 380 },
              }}
            >
              <CardMedia
                component="img"
                src="ambii.png"
                alt="Cozy Ambience"
                sx={{
                  width: "100%",
                  height: "100%",
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
                px: { xs: 3, sm: 4, md: 5 },
                py: { xs: 3, sm: 4, md: 5 },
                backgroundColor: "#121212",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "serif",
                    mb: 2,
                    color: "#fff",
                    textAlign: { xs: "center", md: "left" },
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Cozy Ambience
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#ccc",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    lineHeight: 1.8,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Cozy Ambience – A Warm, Charming Atmosphere. Our bistro also
                  features an outdoor seating area where you can enjoy your
                  meals in a relaxed and serene environment. It's the perfect
                  place to unwind with your loved ones or catch up with friends
                  over a cup of coffee or tea.
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
