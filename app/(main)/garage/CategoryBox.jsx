"use client";

import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function CategoryBox({ title = "دسته", id, mobile = false }) {
  const router = useRouter();
  const { theme } = useSelector((state) => state.theme); // دریافت theme

  const handleClick = () => {
    if (id) router.push(`/garage/category/${id}`);
  };

  const bgCard = theme === "dark" ? "#20263C" : "#fff";
  const bgInner = theme === "dark" ? "#2E3B55" : "#F7F7F7";
  const textColor = theme === "dark" ? "#fff" : "#222";
  const borderColor = theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.04)";
  const shadow = theme === "dark" ? "0 2px 4px rgba(0,0,0,0.5)" : "0 2px 4px rgba(0,0,0,0.15)";

  if (mobile) {
    return (
      <Box
        onClick={handleClick}
        sx={{
          width: "100%",
          height: "148px",
          backgroundColor: bgCard,
          borderRadius: "8px",
          boxShadow: shadow,
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
            backgroundColor: bgCard,
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
              color: textColor,
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
            backgroundColor: bgInner,
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

  // دسکتاپ
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
        backgroundColor: bgCard,
        boxShadow: theme === "dark" ? "0px 6px 12px rgba(0,0,0,0.25)" : "0px 6px 12px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.2s ease",
        "&:hover": {
          boxShadow: theme === "dark" ? "0px 8px 16px rgba(0,0,0,0.35)" : "0px 8px 16px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* بخش کارت‌ها */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: bgInner,
          borderRadius: "20px",
          boxShadow: theme === "dark" ? "inset 0px -2px 5px rgba(0,0,0,0.4)" : "inset 0px -2px 5px rgba(0,0,0,0.06)",
          border: `1px solid ${borderColor}`,
        }}
      />

      {/* بخش عنوان */}
      <Box
        sx={{
          backgroundColor: bgCard,
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow:
            theme === "dark" ? "inset 0px 2px 4px rgba(255,255,255,0.05)" : "inset 0px 2px 4px rgba(0,0,0,0.03)",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: "1.2rem", color: textColor }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
