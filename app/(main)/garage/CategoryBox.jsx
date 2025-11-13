"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import CategoryBox from "./CategoryBox";
import NewCategory from "./NewCategory";

export default function GaragePage() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1920);

  const BASE_CANVAS = 1920;

  const [categories, setCategories] = useState([
    { title: "لیست خرید" },
    { title: "قیمت مناسب" },
    { title: "چینی" },
  ]);

  const handleAddCategory = (title) => {
    setCategories([...categories, { title }]);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) {
      setContainerWidth(Math.min(typeof window !== "undefined" ? window.innerWidth : 1920, 1920));
      return;
    }

    const measure = () => {
      const w = Math.min(el.clientWidth || window.innerWidth || 1920, 1920);
      setContainerWidth(w);
    };
    measure();

    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => measure());
      ro.observe(el);
    } else {
      window.addEventListener("resize", measure);
    }

    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", measure);
    };
  }, []);

  const scale = Math.max(0.5, Math.min(1, containerWidth / BASE_CANVAS));
  const box_width = 716;
  const box_height = 693.05;
  const box_radius = 20;

  const boxesPositions = [
    { left: 165, top: 349 },
    { left: 1039, top: 349 },
    { left: 168, top: 1172 },
  ];

  const maxBottom = Math.max(...boxesPositions.map((b, i) => b.top + box_height)) * scale;
  const containerMinHeight = Math.round(maxBottom + 120 * scale);

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", bgcolor: "#fff", overflowX: "hidden", py: 4, display: "flex", justifyContent: "center" }}>
      <Box
        ref={containerRef}
        sx={{
          width: "100%",
          maxWidth: `${BASE_CANVAS}px`,
          position: "relative",
          minHeight: `${containerMinHeight}px`,
          mx: "auto",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: `${Math.round(80 * scale)}px`,
            left: `${Math.round(1531.35 * scale)}px`,
            width: `${Math.round(266.305 * scale)}px`,
            height: `${Math.round(82.989 * scale)}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: `${Math.round(64 * scale)}px`,
            letterSpacing: "5%",
            textAlign: "center",
            zIndex: 40,
          }}
        >
          گاراژ من
        </Box>

        {isMobile ? (
          <Box sx={{ position: "absolute", top: `${Math.round(120 * scale)}px`, left: 0, right: 0, px: 2 }}>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: 2 }}>
              {categories.map((c, idx) => (
                <CategoryBox key={idx} title={c.title} mobile />
              ))}
              <NewCategory onAddCategory={handleAddCategory} mobile />
            </Box>
          </Box>
        ) : (
          boxesPositions.map((pos, idx) => (
            <Box
              key={idx}
              sx={{
                position: "absolute",
                left: `${Math.round(pos.left * scale)}px`,
                top: `${Math.round(pos.top * scale)}px`,
                width: `${Math.round(box_width * scale)}px`,
                height: `${Math.round(box_height * scale)}px`,
              }}
            >
              <CategoryBox title={categories[idx]?.title} />
            </Box>
          ))
        )}
        {!isMobile && (
          <Box
            sx={{
              position: "absolute",
              left: `${Math.round(1039 * scale)}px`,
              top: `${Math.round(1172 * scale)}px`,
              width: `${Math.round(box_width * scale)}px`,
              height: `${Math.round(box_height * scale)}px`,
            }}
          >
            <NewCategory onAddCategory={handleAddCategory} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
