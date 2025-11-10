"use client";

import { Box } from "@mui/material";
import CategoryBox from "./CategoryBox";

export default function GaragePage() {
  const categories = [
    { title: "لیست خرید", cars: [] },
    { title: "قیمت مناسب", cars: [] },
    { title: "چینی", cars: [] },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",

        // دسکتاپ مثل فیگما
        gridTemplateColumns: {
          xs: "1fr",            // موبایل یک ستونه
          sm: "repeat(2, 1fr)", // تبلت دو ستونه ولی فلکس
          md: "repeat(2, 716px)" // دسکتاپ دقیق مثل فیگما
        },

        gridAutoRows: {
          xs: "auto",
          md: "714px" // ردیف‌ها هم‌قد فیگما فقط دسکتاپ
        },

        justifyContent: "center",
        alignItems: "start",

        columnGap: { xs: "20px", md: "60px" },
        rowGap: { xs: "20px", md: "60px" },

        padding: { xs: "1.5rem", md: "3rem 0" },
      }}
    >
      {categories.map((cat, i) => (
        <CategoryBox key={i} cat={cat} />
      ))}

      {/* + دکمه ساخت دسته جدید  */}
      <Box
        sx={{
          width: { xs: "100%", md: "716px" },
          height: { xs: "250px", md: "714px" },
          borderRadius: "16px",
          backgroundColor: "#F0F0F0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          fontSize: { xs: "3rem", md: "5rem" },
          fontWeight: 500,
          boxShadow: "0 0 10px rgba(0,0,0,0.05)"
        }}
      >
        +
        <Box sx={{ marginTop: "8px", fontSize: "1rem" }}>
          ساخت دسته جدید
        </Box>
      </Box>
    </Box>
  );
}
