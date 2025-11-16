"use client";

import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function CategoryBox({ title = "دسته", id, mobile = false }) {
  const router = useRouter();

  const handleClick = () => {
    if (id) router.push(`/garage/category/${id}`);
  };

  if (mobile) {
    return (
      <Box
        onClick={handleClick}
        sx={{
          width: "100%",
          height: "148px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        {/* راست: عنوان */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 1,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "0.9rem",
              color: "#222",
              textAlign: "center",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* چپ: کارت‌ها */}
        <Box
          sx={{
            flex: 3,
            backgroundColor: "#F7F7F7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          {/* کارت‌ها یا تصاویر اینجا قرار می‌گیرند */}
        </Box>
      </Box>
    );
  }

  // دسکتاپ: همان حالت فعلی
  return (
    <Box
      onClick={handleClick}
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 6px 12px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.2s ease",
        "&:hover": {
          boxShadow: "0px 8px 16px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* بخش کارت‌ها */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#F7F7F7",
          borderRadius: "20px",
          boxShadow: "inset 0px -2px 5px rgba(0,0,0,0.06)",
          border: "1px solid rgba(0,0,0,0.04)",
        }}
      />

      {/* بخش عنوان */}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.03)",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: "1.2rem", color: "#222" }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
