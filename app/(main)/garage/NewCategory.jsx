"use client";
import { Box, Typography } from "@mui/material";

export default function NewCategory({ mobile = false }) {
  if (mobile) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "148px",
          borderRadius: "8px",
          backgroundImage: "url('/newGarage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.3)" }} />
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: 55,
            height: 55,
            borderRadius: "12px",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          <Typography sx={{ fontSize: "2rem", fontWeight: 700, color: "#333" }}>+</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
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
        "&:hover": {
          boxShadow: "0px 12px 24px rgba(0,0,0,0.12)",
        },
        "&:hover .bgImage": {
          transform: "scale(1.06)",
        },
        "&:hover .plusBox": {
          transform: "translateY(-6px) scale(1.06)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.28)",
        },
        "&:hover .overlay": {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="bgImage"
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(180deg, rgba(249,249,249,0.7) 0%, rgba(233,233,233,0.7) 100%), url('/newGarage.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "transform 360ms cubic-bezier(.2,.8,.2,1)",
            willChange: "transform",
            zIndex: 0,
          }}
        />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.35)", // حالت عادی
            transition: "background-color 220ms ease",
            zIndex: 1,
          }}
        />
        <Box
          className="plusBox"
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
            transition: "transform 260ms cubic-bezier(.2,.8,.2,1), box-shadow 260ms ease",
          }}
        >
          <Typography sx={{ fontSize: "3rem", fontWeight: 700, color: "#333" }}>+</Typography>
        </Box>
      </Box>
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
