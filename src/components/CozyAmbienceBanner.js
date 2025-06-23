import React from "react";
import { Box, Typography } from "@mui/material";

const CozyAmbienceBanner = () => {
  return (
    <Box
      id="ambience-banner"
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 280, sm: 380, md: 500, lg: 600 },
        overflow: "hidden",
        backgroundColor: "#000", // fallback background
      }}
    >
      {/* Banner Image */}
      <Box
        component="img"
        src="main11.png"
        alt="Cozy Ambience"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Overlay Text */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 24, md: 40 },
          left: 0,
          width: "100%",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.7rem", lg: "3rem" },
            color: "#fff",
            fontWeight: "bold",
            fontFamily: "serif",
            textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          Cozy Ambience
        </Typography>
      </Box>
    </Box>
  );
};

export default CozyAmbienceBanner;
