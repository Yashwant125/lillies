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
    <Box id="menu" sx={{ backgroundColor: "#000", pb: { xs: 8, md: 12 } }}>
      {/* === Top Section with Image and Text === */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
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
                    Our Favourites – Discover Our Menu
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

      {/* === Banner with Food Images === */}
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 4, md: 6 },
          mt: { xs: 6, md: 10 },
        }}
      >
        <Box
          component="img"
          src="foods.png"
          alt="Menu Items Banner"
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: { xs: 500, md: 600 },
            borderRadius: 2,
            boxShadow: 3,
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
};

export default Menu;
