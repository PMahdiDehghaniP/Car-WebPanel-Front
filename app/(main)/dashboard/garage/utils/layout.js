export const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const FIGMA_BOX = { width: 700, height: 700, borderRadius: 350 };
const FIGMA_BOX_MOBILE = { width: 400, height: 400, borderRadius: 200 };
const COLUMN_LEFTS = [165, 1039];
const START_TOP = 200;
const START_TOP_MOBILE = 100;
const V_SPACING = 60;
const V_SPACING_MOBILE = 12;
const MOBILE_CANVAS = 468;

export const layoutPageItems = (rawItems = [], mobile = false) => {
  const vSpacing = mobile ? V_SPACING_MOBILE : V_SPACING;
  const mobileBoxWidth = Math.min(
    FIGMA_BOX_MOBILE.width,
    Math.max(240, MOBILE_CANVAS - 48)
  );
  const mobileBoxHeight = Math.round(mobileBoxWidth * 0.58);
  const bottoms = mobile
    ? [START_TOP_MOBILE - vSpacing]
    : [START_TOP - vSpacing, START_TOP - vSpacing];
  const laid = [];

  rawItems.forEach((item, idx) => {
    const col = mobile ? 0 : idx % 2 === 0 ? 0 : 1;
    const left = mobile
      ? Math.max(24, Math.round((MOBILE_CANVAS - mobileBoxWidth) / 2))
      : COLUMN_LEFTS[col];
    const top = bottoms[col] + vSpacing;

    laid.push({
      id: item.id,
      title: item.title,
      left,
      top,
      ...(mobile
        ? {
            width: mobileBoxWidth,
            height: mobileBoxHeight,
            borderRadius: Math.round(mobileBoxHeight / 6)
          }
        : FIGMA_BOX),
      cars: item.cars ?? [],
      isNew: !!item.isNew
    });

    bottoms[col] = top + (mobile ? mobileBoxHeight : FIGMA_BOX.height);
  });

  return laid;
};
