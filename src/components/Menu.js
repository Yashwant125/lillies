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
    <Box id="menu" sx={{ backgroundColor: "#fff" }}>
      {/* === Top Section with Text and Image === */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
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
                    Our Favourites – Discover Our Menu
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      fontSize: "1rem",
                      lineHeight: 1.8,
                    }}
                  >
                    At Tiger Lily Bistro, we believe great food brings people
                    together. Whether it’s a cozy date night or a joyful
                    gathering with friends, our menu has something for everyone.
                    From spicy starters to indulgent main courses and
                    handcrafted mocktails, each item is made with love. Come
                    explore our chef's specials and daily favorites — always
                    fresh, always flavorful.
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
                  src="menuu1.png"
                  alt="Menu Highlight"
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

     {/* === Banner with 8 Food Images === */}
   <Box
  component="img"
  src="foods.png"
  alt="Menu Items Banner"
  sx={{
    width: "100%",
    height: "auto",
    maxHeight: "2000px",   // limit how big it grows
    mt: 6,
    display: "block",
  }}
/>

    </Box>
  );
};

export default Menu;
