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
        backgroundColor: "#000", // Dark background
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
          {/* Reusable Card for each block */}
          {[
            {
              title: "Our Message",
              text: `At Lillies - The Boho Cafe, we welcome every guest with warmth.
                Our space is crafted for moments of comfort, joy, and
                delicious food.`,
            },
            {
              title: "Our Mission",
              text: `To serve handcrafted meals with love, in an ambiance that feels
                like home. We aim to create memorable dining experiences.`,
            },
            {
              title: "Our Vision",
              text: `To become the most loved local cafe — where every meal inspires
                smiles and every visit brings you back.`,
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  px: { xs: 2, sm: 3 },
                  py: { xs: 3, sm: 4 },
                  borderRadius: 3,
                  textAlign: "center",
                  boxShadow: 3,
                  backgroundColor: "#111",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    mb={2}
                    sx={{ color: "#fff", fontSize: { xs: "1.1rem", md: "1.25rem" } }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#ccc",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MessageSection;
