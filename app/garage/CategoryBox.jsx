"use client";

import { Box, Typography } from "@mui/material";
import CarCard from "../components/Home/CarSlider/CarCard";

export default function CategoryBox({ cat }) {
  return (
    <Box
      sx={{
        width: "716px",
        height: "714px",
        backgroundColor: "#F8F8F8",
        borderRadius: "16px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "1rem",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        {cat.title}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, auto)",
          gap: "12px",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {cat.cars.slice(0, 6).map((car, i) => (
          <CarCard key={i} {...car} />
        ))}
      </Box>
    </Box>
  );
}
