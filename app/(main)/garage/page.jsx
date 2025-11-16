"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import CategoryBox from "./CategoryBox";
import NewCategory from "./NewCategory";

// ---- Desktop Canvas (FIGMA Desktop)
const FIGMA_BOX = {
  width: 716,
  height: 693.058837890625,
  borderRadius: 20,
};

// ---- Mobile Canvas (FIGMA Mobile) - adjusted
const FIGMA_BOX_MOBILE = {
  // افزایش عرض موبایل (قابل تنظیم)
  width: 400,
  height: 180,
  borderRadius: 8,
};

const COLUMN_LEFTS = [165, 1039];
const START_TOP = 200;
const START_TOP_MOBILE = 100;

const V_SPACING = 20;
const V_SPACING_MOBILE = 28;

const CAR_MARGIN_TOP = 20;

const MOBILE_CANVAS = 468;
const MOBILE_SCALE_BOOST = 1.08;

const sampleCars = [
  {
    imageSrc: "/car1.jpg",
    carName: "BMW X5",
    description: "ماشین لوکس",
  },
];

export default function GaragePage() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1920);

  const initialTitles = ["لیست خرید", "قیمت مناسب", "چینی"];
  const [boxes, setBoxes] = useState([]);
  const [newCategoryModalOpen, setNewCategoryModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  // ⭐ Layout
  const layoutItems = (titles = [], mobile = false) => {
    const vSpacing = mobile ? V_SPACING_MOBILE : V_SPACING;

    // برای موبایل عرض باکس را به گونه‌ای محدود می‌کنیم که از کانواس موبایل بیرون نزند
    const mobileBoxWidth = Math.min(
      FIGMA_BOX_MOBILE.width,
      Math.max(280, MOBILE_CANVAS - 48) // حداقل 280 و حداکثر MOBILE_CANVAS-48
    );

    // bottoms (شروع y برای ستون‌ها)
    const bottoms = mobile
      ? [START_TOP_MOBILE - vSpacing]
      : [START_TOP - vSpacing, START_TOP - vSpacing];

    const laid = [];

    titles.forEach((title, idx) => {
      const col = mobile ? 0 : bottoms[0] <= bottoms[1] ? 0 : 1;

      const left = mobile
        ? Math.max(24, Math.round((MOBILE_CANVAS - mobileBoxWidth) / 2))
        : COLUMN_LEFTS[col];

      const top = bottoms[col] + vSpacing;

      laid.push({
        id: `b_init_${idx}_${Date.now()}`,
        title,
        left,
        top,
        ...(mobile
          ? { ...FIGMA_BOX_MOBILE, width: mobileBoxWidth }
          : FIGMA_BOX),
        cars: sampleCars,
      });

      bottoms[col] =
        top + (mobile ? FIGMA_BOX_MOBILE.height : FIGMA_BOX.height);
    });

    // new category box
    const col = mobile ? 0 : bottoms[0] <= bottoms[1] ? 0 : 1;

    const left = mobile
      ? Math.max(24, Math.round((MOBILE_CANVAS - mobileBoxWidth) / 2))
      : COLUMN_LEFTS[col];

    const top = bottoms[col] + (mobile ? V_SPACING_MOBILE : V_SPACING);

    laid.push({
      id: "new",
      title: "ساخت دسته جدید",
      left,
      top,
      ...(mobile ? { ...FIGMA_BOX_MOBILE, width: mobileBoxWidth } : FIGMA_BOX),
      isNew: true,
    });

    return laid;
  };

  useEffect(() => {
    setBoxes(layoutItems(initialTitles, isMobile));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  // ---- measure width for desktop scaling ----
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const w = Math.min(el.clientWidth || window.innerWidth, 1920);
      setContainerWidth(w);
    };

    measure();
    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ---- scaling ----
  const BASE_CANVAS = 1920;

  const scale = isMobile
    ? (() => {
        const mobileBase = Math.min(1, (window.innerWidth - 32) / MOBILE_CANVAS);
        return Math.min(1, mobileBase * MOBILE_SCALE_BOOST);
      })()
    : Math.max(0.5, Math.min(1, containerWidth / BASE_CANVAS));

  // ---- calculate bottom ----
  const maxBottom = boxes.length
    ? Math.max(...boxes.map((b) => b.top + b.height))
    : START_TOP;

  const containerMinHeight = Math.max(
    Math.round(maxBottom * scale + CAR_MARGIN_TOP + 300),
    window.innerHeight
  );

  const handleAddNewCategory = () => {
    const name = newCategoryName.trim();
    if (!name) return;

    const normal = boxes.filter((b) => !b.isNew);
    const updatedTitles = [...normal.map((b) => b.title), name];
    setBoxes(layoutItems(updatedTitles, isMobile));

    setNewCategoryName("");
    setNewCategoryModalOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#fff",
        overflowX: "hidden",
        py: 2,
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
        }}
      >
        {/* Title */}
        {isMobile ? (
          <Box
            sx={{
              position: "absolute",
              top: `${Math.round(20 * scale)}px`,
              transform: "translateX(-50%)",
              fontSize: `${Math.round(32 * scale)}px`,
              fontWeight: 800,
              whiteSpace: "nowrap",
              zIndex: 5,
            }}
          >
            گاراژ من
          </Box>
        ) : (
          <Box
            sx={{
              position: "absolute",
              top: `${Math.round(20 * scale)}px`,
              left: `${Math.round(1531.35 * scale)}px`,
              fontSize: `${Math.round(58 * scale)}px`,
              fontWeight: 800,
              zIndex: 5,
            }}
          >
            گاراژ من
          </Box>
        )}

        {/* Boxes */}
        {boxes.map((b) => {
          const left = Math.round(b.left * scale);
          const top = Math.round(b.top * scale);
          const width = Math.round(b.width * scale);
          const height = Math.round(b.height * scale);

          return (
            <Box
              key={b.id}
              sx={{
                position: "absolute",
                left,
                top,
                width,
                height,
                cursor: b.isNew ? "default" : "pointer",
              }}
            >
              {b.isNew ? (
                <NewCategory onClick={() => setNewCategoryModalOpen(true)} mobile={isMobile} />
              ) : (
                <CategoryBox
                  title={b.title}
                  cars={b.cars}
                  id={b.id}
                  mobile={isMobile}
                />
              )}
            </Box>
          );
        })}

        {/* Background Car */}
        <Box
          component="img"
          src="/garageLightback.png"
          sx={{
            position: "absolute",
            width: `${Math.round(1920 * scale)}px`,
            left: 0,
            top: `${Math.round((maxBottom + CAR_MARGIN_TOP) * scale)}px`,
          }}
        />

        {/* Modal */}
        {newCategoryModalOpen && (
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#fff",
              p: isMobile ? 2 : 3,
              borderRadius: isMobile ? 2 : 3,
              boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
              width: isMobile ? "90vw" : 420,
              maxWidth: 420,
              minHeight: isMobile ? 150 : 180,
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? 2 : 2.5,
              zIndex: 2000,
            }}
          >
            <TextField
              placeholder="نام دسته"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              size={isMobile ? "small" : "medium"}
              fullWidth
              inputProps={{ style: { fontSize: isMobile ? 14 : 16 } }}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
              <Button
                onClick={() => {
                  setNewCategoryModalOpen(false);
                  setNewCategoryName("");
                }}
              >
                لغو
              </Button>
              <Button variant="contained" onClick={handleAddNewCategory}>
                اضافه کردن
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
