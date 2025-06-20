import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "black",
        color: "white",
        py: { xs: 3, md: 4 },
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{ mb: 0.5, fontSize: { xs: "0.85rem", md: "1rem" } }}
      >
        ©2025 Lillies – The Boho Cafe
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: "gray", fontSize: { xs: "0.75rem", md: "0.85rem" } }}
      >
        Made with <span style={{ color: "red" }}>♥</span> by Yash
      </Typography>
    </Box>
  );
};

export default Footer;
