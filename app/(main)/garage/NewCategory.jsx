"use client";
import { Box, Typography } from "@mui/material";

export default function NewCategory({ onClick, mobile }) {
  if (mobile) {
    return (
      <Box
        onClick={onClick}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "row-reverse",
          overflow: "hidden",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          backgroundColor: "#fff",
        }}
      >
        {/* چپ: باکس + با عکس و overlay */}
        <Box
          sx={{
            flex: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            backgroundImage:
              "linear-gradient(180deg, rgba(249,249,249,0.7) 0%, rgba(233,233,233,0.7) 100%), url('/newGarage.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay سایه روی تصویر */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.25)",
            }}
          />

          {/* دکمه + */}
          <Box
            sx={{
              width: 55,
              height: 55,
              borderRadius: "12px",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Typography sx={{ fontSize: "2rem", fontWeight: 700, color: "#333" }}>+</Typography>
          </Box>
        </Box>

        {/* راست: عنوان */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: "1px solid rgba(0,0,0,0.05)",
            px: 1,
            backgroundColor: "#fff",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#222",
              textAlign: "center",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            ساخت دسته جدید
          </Typography>
        </Box>
      </Box>
    );
  }

  // دسکتاپ
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 6px 12px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        cursor: "pointer",
        "&:hover": { boxShadow: "0px 12px 24px rgba(0,0,0,0.12)" },
      }}
    >
      {/* عکس با overlay */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
              "linear-gradient(180deg, rgba(249,249,249,0.7) 0%, rgba(233,233,233,0.7) 100%), url('/newGarage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay سایه */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.35)",
          }}
        />

        {/* دکمه + */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: 90,
            height: 90,
            borderRadius: "16px",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
          }}
        >
          <Typography sx={{ fontSize: "3rem", fontWeight: 700, color: "#333" }}>+</Typography>
        </Box>
      </Box>

      {/* عنوان */}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "inset 0px 1px 3px rgba(0,0,0,0.03)",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: "1.2rem", color: "#222" }}>
          ساخت دسته جدید
        </Typography>
      </Box>
    </Box>
  );
}