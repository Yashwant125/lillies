import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#000",
        color: "#fff",
        py: { xs: 3, md: 4 },
        px: 2,
        textAlign: "center",
        mt: 6,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: "0.9rem", sm: "1rem" },
          fontWeight: 500,
        }}
      >
        © 2025 Lillies – The Boho Cafe
      </Typography>
      <Typography
        variant="caption"
        sx={{
          display: "block",
          mt: 1,
          color: "#aaa",
          fontSize: { xs: "0.75rem", sm: "0.85rem" },
        }}
      >
        Made with <span style={{ color: "#e74c3c" }}>♥</span> by Yash
      </Typography>
    </Box>
  );
};

export default Footer;
