"use client";

import { Box } from "@mui/material";
import CategoryBox from "./CategoryBox";

export default function GaragePage() {
  const categories = [
    {
      title: "لیست خرید",
      cars: [], 
    },
    {
      title: "قیمت مناسب",
      cars: [], 
    },
    {
      title: "چینی",
      cars: [], 
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, auto)",
        gridTemplateRows: "repeat(2, auto)",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      {categories.map((cat, i) => (
        <CategoryBox key={i} cat={cat} />
      ))}

      <Box
        sx={{
          width: "716px",
          height: "714px",
          borderRadius: "16px",
          backgroundColor: "#F0F0F0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "4rem",
          cursor: "pointer",
        }}
      >
        +
      </Box>
    </Box>
  );
}
