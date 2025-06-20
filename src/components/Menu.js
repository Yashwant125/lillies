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

const Menu = () => {
  return (
    <Box id="menu" sx={{ backgroundColor: "#000" }}>
      {/* === Top Section with Image and Text === */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
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
                  src="menuu1.png"
                  alt="Menu Highlight"
                  sx={{
                    width: "100%",
                    height: { xs: 250, sm: 300, md: "100%" },
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
                  px: { xs: 2, sm: 4 },
                  py: { xs: 3, sm: 4 },
                  textAlign: "center",
                  height: "100%",
                  backgroundColor: "#121212", // optional for better contrast
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
                    }}
                  >
                    Our Favourites – Discover Our Menu
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#ccc",
                      fontSize: "1rem",
                      lineHeight: 1.8,
                    }}
                  >
                    At Lillies – The Boho Cafe, we believe great food brings people together.
                    Whether it’s a cozy date night or a joyful gathering with friends,
                    our menu has something for everyone. From spicy starters to indulgent
                    main courses and handcrafted mocktails, each item is made with love.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* === Banner with 8 Food Images === */}
      <Box
        component="img"
        src="foods.png"
        alt="Menu Items Banner"
        sx={{
          width: "100%",
          height: "auto",
          maxHeight: "2000px",
          mt: 6,
          display: "block",
        }}
      />
    </Box>
  );
};

export default Menu;
