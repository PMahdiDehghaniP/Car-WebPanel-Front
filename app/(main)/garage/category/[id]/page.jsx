"use client";

import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.id;

  return (
    <div style={{ padding: 20 }}>
      <h1>ماشین‌های دسته: {categoryId}</h1>
      {/* TODO: اینجا ماشین‌ها را بر اساس categoryId فیلتر و رندر کن */}
    </div>
  );
}
