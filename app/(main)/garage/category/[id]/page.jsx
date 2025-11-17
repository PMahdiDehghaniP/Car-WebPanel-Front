"use client";

import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import SearchBar from "@/app/components/Home/SearchBar";
import CarCard from "@/app/components/Home/CarSlider/CarCard";

const carsData = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  carName: "خودرو",
  description: "توضیح کوتاه خودرو",
  carInformation: {
    maxSpeed: "220 km/h",
    gasType: "بنزین",
    gearboxType: "اتوماتیک"
  },
  price: `${50 + i} $`,
  imageSrc: "/forgotPasswordImage.png",
  imageAlt: `Car ${i + 1}`
}));

const CategoryPage = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const { theme } = useSelector((state) => state.theme); 

  const bgPage = theme === "dark" ? "#20263C" : "#fff";
  const bgCard = theme === "dark" ? "#2E3B55" : "#fff";
  const textColor = theme === "dark" ? "#fff" : "#222";
  const borderColor = theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.04)";
  const shadow = theme === "dark" ? "0 2px 4px rgba(0,0,0,0.5)" : "0 2px 4px rgba(0,0,0,0.15)";

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        padding: isMobile ? "1rem" : "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        backgroundColor: bgPage,
        transition: "background-color 0.3s"
      }}
    >
      {!isMobile && (
        <Box
          sx={{
            width: "70%",
            borderRadius: "2rem",
            boxShadow: shadow,
            padding: "0.75rem 1rem",
            backgroundColor: bgCard,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease-in-out"
          }}
        >
          <SearchBar />
        </Box>
      )}

      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          textAlign: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
          color: textColor
        }}
      >
        لیست خرید
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "repeat(2, 1fr)"
            : "repeat(4, 1fr)",
          gap: isMobile ? "1rem" : "1.5rem",
          width: "100%",
          justifyContent: "center",
          justifyItems: "center"
        }}
      >
        {carsData.map((car) => (
          <CarCard
            key={car.id}
            imageSrc={car.imageSrc}
            imageAlt={car.imageAlt}
            carName={car.carName}
            description={car.description}
            carInformation={car.carInformation}
            price={car.price}
            onClick={() => alert(`مشاهده جزئیات ${car.carName}`)}
            maxWidth={isMobile ? 190 : 250}
            minHeight={isMobile ? 320 : 400}
            bgCard={bgCard} 
            textColor={textColor}
            borderColor={borderColor}
            shadow={shadow}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryPage;
