'use client';

import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const AddCarCard = ({
  isMobile,
  textColor = "#000",
  borderColor = "rgba(0,0,0,0.06)",
  shadow = "0px 6px 12px rgba(0,0,0,0.06)",
  maxWidth = 336,
  minHeight = 430,
  bgCard = '#fff'
}) => {
  const router = useRouter();

  return (
    <Box
      onClick={() => router.push("/dashboard/car-search")}
      sx={{
        width: '100%',                   
        maxWidth: `${maxWidth}px`,        
        minHeight: `${minHeight}px`,
        borderRadius: "12px",
        boxShadow: shadow,
        background: `linear-gradient(180deg, ${bgCard} 0%, #F4F4F4 51.44%)`,
        border: `1px solid ${borderColor}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "none",
        p: 2,
        gap: isMobile ? 1.5 : 3,
        boxSizing: 'border-box'
      }}
    >
      <Box
        sx={{
          width: isMobile ? 64 : 90,
          height: isMobile ? 64 : 90,
          borderRadius: "22px",
          border: "10px solid #000",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          mb: 2,
          boxSizing: 'border-box'
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "9px",
            height: isMobile ? "30px" : "40px",
            backgroundColor: "#000",
            borderRadius: "3px"
          }}
        />
        <Box
          sx={{
            position: "absolute",
            height: "9px",
            width: isMobile ? "30px" : "35px",
            backgroundColor: "#000",
            borderRadius: "3px"
          }}
        />
      </Box>

      <Typography
        sx={{
          fontWeight: 700,
          fontSize: isMobile ? "0.9rem" : "1.1rem",
          color: textColor,
          textAlign: "center"
        }}
      >
        اضافه کردن ماشین
      </Typography>
    </Box>
  );
};

export default AddCarCard;
