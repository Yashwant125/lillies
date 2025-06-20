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
        backgroundColor: "#fff",
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
          wrap="nowrap" // Ensures single row
        >
          {/* Our Message */}
          <Grid item>
            <Card
              sx={{
                width: 300,
                height: 250,
                px: 3,
                py: 4,
                borderRadius: 3,
                textAlign: "center",
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Our Message
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  At Tiger Lily Bistro, we welcome every guest with warmth. Our
                  space is crafted for moments of comfort, joy, and delicious
                  food.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Our Mission */}
          <Grid item>
            <Card
              sx={{
                width: 300,
                height: 250,
                px: 3,
                py: 4,
                borderRadius: 3,
                textAlign: "center",
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Our Mission
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  To serve handcrafted meals with love, in an ambiance that
                  feels like home. We aim to create memorable dining
                  experiences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Our Vision */}
          <Grid item>
            <Card
              sx={{
                width: 300,
                height: 250,
                px: 3,
                py: 4,
                borderRadius: 3,
                textAlign: "center",
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Our Vision
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  To become the most loved local bistro — where every meal
                  inspires smiles and every visit brings you back.
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
