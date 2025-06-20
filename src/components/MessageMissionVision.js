import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const MessageSection = () => {
  return (
    <Box
      id="message"
      sx={{
        backgroundColor: "#000", // Changed to black
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
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Our Message */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                px: 3,
                py: 4,
                borderRadius: 3,
                textAlign: "center",
                boxShadow: 3,
                backgroundColor: "#111", // Optional: Dark card background
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
                  Our Message
                </Typography>
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                  At Lillies - The Boho Cafe, we welcome every guest with warmth.
                  Our space is crafted for moments of comfort, joy, and
                  delicious food.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Our Mission */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                px: 3,
                py: 4,
                borderRadius: 3,
                textAlign: "center",
                boxShadow: 3,
                backgroundColor: "#111",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
                  Our Mission
                </Typography>
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                  To serve handcrafted meals with love, in an ambiance that feels
                  like home. We aim to create memorable dining experiences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Our Vision */}
          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                height: "100%",
                px: 3,
                py: 4,
                borderRadius: 3,
                textAlign: "center",
                boxShadow: 3,
                backgroundColor: "#111",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
                  Our Vision
                </Typography>
                <Typography variant="body2" sx={{ color: "#ccc" }}>
                  To become the most loved local cafe — where every meal inspires
                  smiles and every visit brings you back.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MessageSection;
