import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const ContactUs = () => (
  <Box
    id="contact"
    sx={{
      backgroundColor: "#fff",
      py: { xs: 8, md: 12 },
    }}
  >
    <Container maxWidth="lg">
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h5" sx={{ color: "#c7a36e", mb: 1 }}>
          Get In Touch!
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontFamily: "serif", fontWeight: "bold" }}
        >
          Contact Us
        </Typography>
        <Box
          sx={{
            width: 40,
            height: 3,
            backgroundColor: "#c7a36e",
            mx: "auto",
            mt: 1,
          }}
        />
      </Box>

      <Grid container spacing={6} alignItems="flex-start">
        {/* Left Side: Info */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Box mb={4}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Our Address
                </Typography>
                <Typography
                  sx={{
                    mb: 1,
                    whiteSpace: "pre-line",
                    maxWidth: { xs: "100%", sm: 260 },
                  }}
                >
                  Lillie’s – The Boho Cafe{"\n"}
                  3rd Floor Terrace – Chhatwal's{"\n"}
                  Nandi Hills, Rd No. 51{"\n"}
                  BNR Hills, BN Reddy Colony{"\n"}
                  Rai Durg, Hyderabad{"\n"}
                  Telangana – 500033
                </Typography>
                <Link
                  href="https://www.google.com/maps/dir//3rd+Floor+Terrace+-+Chhatwal's,+Nandi+Hills,+Rd+No.+51,+BNR+Hills,+BN+Reddy+Colony,+Rai+Durg,+Hyderabad,+Telangana+500033/@17.4252742,78.3126873,24222m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bcb9193cf7267f7:0xf77e89fd6076baae!2m2!1d78.3950891!2d17.4252911"
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  sx={{ color: "#c7a36e", fontWeight: 500 }}
                >
                  Get Directions
                </Link>
              </Box>

              <Box mb={4}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Our Email
                </Typography>
                <Typography>Email: contact@lilliescafe.in</Typography>
                <Typography>Phone: +91 81799 35093</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box mb={4}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Opening Hours
                </Typography>
                <Typography>Mon – Fri: 9:30 AM – 1 AM</Typography>
                <Typography>Sat – Sun: 9:00 AM – 1 AM</Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Follow Us
                </Typography>
                <Stack direction="row" spacing={1} mt={1}>
                  <IconButton
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: "#c7a36e" }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: "#c7a36e" }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: "#c7a36e" }}
                  >
                    <TwitterIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Side: Map */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: { xs: 250, sm: 300 },
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <iframe
              title="Lillie's The Boho Cafe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.305086955809!2d78.3928821!3d17.4253019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9193cf7267f7%3A0xf77e89fd6076baae!2sLillie%E2%80%99s%20-%20The%20Boho%20Cafe!5e0!3m2!1sen!2sin!4v1718899970000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default ContactUs;
