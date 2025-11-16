"use client";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function NewCategory({ onClick, mobile }) {
  const { theme } = useSelector((state) => state.theme); 

  const bgColor = theme === "dark" ? "#20263C" : "#fff"; 
  const overlayColor = theme === "dark" ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.25)"; 

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
          backgroundColor: bgColor,
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
            backgroundImage: "url('/newGarage.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: overlayColor,
            }}
          />

          <Box
            sx={{
              width: 55,
              height: 55,
              borderRadius: "12px",
              backgroundColor: theme === "dark" ? "#2E3B55" : "#fff", // دکمه + در حالت دارک
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 700,
                color: theme === "dark" ? "#fff" : "#333",
              }}
            >
              +
            </Typography>
          </Box>
        </Box>

        {/* راست: عنوان */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: `1px solid ${
              theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"
            }`,
            px: 1,
            backgroundColor: bgColor,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "0.95rem",
              color: theme === "dark" ? "#fff" : "#222",
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
        backgroundColor: bgColor,
        boxShadow: "0px 6px 12px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0px 12px 24px rgba(0,0,0,0.12)",
        },
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
          backgroundImage: "url('/newGarage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: overlayColor,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: 90,
            height: 90,
            borderRadius: "16px",
            backgroundColor: theme === "dark" ? "#2E3B55" : "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
          }}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: 700,
              color: theme === "dark" ? "#fff" : "#333",
            }}
          >
            +
          </Typography>
        </Box>
      </Box>

      {/* عنوان */}
      <Box
        sx={{
          backgroundColor: bgColor,
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow:
            theme === "dark"
              ? "inset 0px 1px 3px rgba(255,255,255,0.05)"
              : "inset 0px 1px 3px rgba(0,0,0,0.03)",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1.2rem",
            color: theme === "dark" ? "#fff" : "#222",
          }}
        >
          ساخت دسته جدید
        </Typography>
      </Box>
    </Box>
  );
}
