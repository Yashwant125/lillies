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
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} columns={{ xs: 1, md: 3 }}>
          {/* Left Card – Text */}
          <Grid>
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
                  A modern bistro offering cozy vibes and flavorful experiences.
                  From hand-crafted meals to an open kitchen concept, we invite
                  you to dine, relax, and enjoy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Middle Card – Image */}
          <Grid>
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
          <Grid>
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
