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
          {/* Left: Image Card */}
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
                  Cozy Ambience
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                  }}
                >
                Cosy Ambience
A Warm, Charming Atmosphere
Our bistro also features an outdoor seating area where you can enjoy your meals in a relaxed and serene environment. It's the perfect place to unwind with your loved ones or catch up with friends over a cup of coffee or tea. We take pride in our exceptional customer service and our team is always ready to assist you with your orders and queries. We also offer online food delivery services via Swiggy and Zomato, so you can enjoy our delicious food from the comfort of your home.
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
