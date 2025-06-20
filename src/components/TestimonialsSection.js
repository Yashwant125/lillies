import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Rating,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul Sharma",
    rating: 5,
    text: "Lillies Cafe has the perfect ambiance for a chill evening. The mocktails are a must-try!",
  },
  {
    name: "Aditi Rao",
    rating: 4,
    text: "Loved the outdoor seating and the food was delicious. Definitely visiting again!",
  },
  {
    name: "Karan Mehta",
    rating: 5,
    text: "Great service, cozy vibes, and everything tasted amazing. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <Box
      id="testimonials"
      sx={{
        backgroundColor: "#fff7f0",
        py: { xs: 6, md: 10 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "serif",
            mb: 1,
            color: "#000",
          }}
        >
          Our Testimonials
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mb: 5, color: "#555", fontSize: "1.1rem" }}
        >
          People Say About Us
        </Typography>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <Card
                elevation={3}
                sx={{
                  mx: "auto",
                  px: { xs: 3, sm: 5 },
                  py: { xs: 4, sm: 5 },
                  borderRadius: 3,
                  textAlign: "center",
                  backgroundColor: "#fff",
                }}
              >
                <CardContent>
                  <Rating
                    name="read-only"
                    value={t.rating}
                    readOnly
                    sx={{ mb: 2 }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#444",
                      fontSize: "1rem",
                      fontStyle: "italic",
                      mb: 2,
                    }}
                  >
                    "{t.text}"
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#888", fontWeight: 600 }}
                  >
                    — {t.name}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonials;
