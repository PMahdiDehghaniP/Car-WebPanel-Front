"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import CategoryBox from "./CategoryBox";
import NewCategory from "./NewCategory";

const FIGMA_BOX = {
  width: 716,
  height: 693.058837890625,
  borderRadius: 20,
};

export default function GaragePage() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(1920);

  const [boxes, setBoxes] = useState([
    { id: "b1", title: "لیست خرید", left: 165, top: 349, ...FIGMA_BOX },
    { id: "b2", title: "قیمت مناسب", left: 1039, top: 349, ...FIGMA_BOX },
    { id: "b3", title: "چینی", left: 168, top: 1172, ...FIGMA_BOX },
    { id: "new", title: "ساخت دسته جدید", left: 1039, top: 1172, ...FIGMA_BOX, isNew: true },
  ]);

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

    ro: ResizeObserver;
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

  const BASE_CANVAS = 1920;
  let scale = containerWidth / BASE_CANVAS;
  scale = Math.max(0.5, Math.min(1, scale));

  const maxBottom = Math.max(...boxes.map(b => b.top + b.height)) * scale;
  const containerMinHeight = Math.round(maxBottom + 120 * scale);

  const addNewBox = () => {
    const newLeft = 1039;
    const newTop = boxes.reduce((max, b) => Math.max(max, b.top + b.height), 0) + 30; // فاصله 30px
    setBoxes([
      ...boxes,
      { id: `b${boxes.length + 1}`, title: "دسته جدید", left: newLeft, top: newTop, ...FIGMA_BOX, isNew: true },
    ]);
  };

  return (
    <Box
      onClick={addNewBox}
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#fff",
        overflowX: "hidden",
        py: 4,
        display: "flex",
        justifyContent: "center",
      }}
    >
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
            top: `${Math.round(120 * scale)}px`, // بالا‌تر آوردیم
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
              {boxes.map(b => (b.isNew ? <NewCategory key={b.id} mobile /> : <CategoryBox key={b.id} title={b.title} mobile />))}
            </Box>
          </Box>
        ) : (
          boxes.map(b => {
            const left = Math.round(b.left * scale);
            const top = Math.round(b.top * scale);
            const width = Math.round(b.width * scale);
            const height = Math.round(b.height * scale);
            return (
              <Box key={b.id} sx={{ position: "absolute", left: `${left}px`, top: `${top}px`, width: `${width}px`, height: `${height}px` }}>
                {b.isNew ? <NewCategory /> : <CategoryBox title={b.title} />}
              </Box>
            );
          })
        )}
        <Box
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            width: 60,
            height: 60,
            borderRadius: "50%",
            bgcolor: "primary.main",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            fontSize: 32,
            fontWeight: "bold",
          }}
        >
          +
        </Box>
      </Box>
    </Box>
  );
}