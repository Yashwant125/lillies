import React from "react";
import { Box, Typography } from "@mui/material";

const CozyAmbienceBanner = () => {
  return (
    <Box
      id="ambience"
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 280, sm: 360, md: 500 },
        overflow: "hidden",
        backgroundColor: "#000", // Black fallback
      }}
    >
      {/* Image */}
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

      {/* Bottom Overlay Text */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 16, md: 24 },
          left: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            color: "#fff",
            fontWeight: "bold",
            fontFamily: "serif",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          Cozy Ambience
        </Typography>
      </Box>
    </Box>
  );
};

export default CozyAmbienceBanner;
