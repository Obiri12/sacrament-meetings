"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(
      new Intl.DateTimeFormat("en-GH", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date())
    );
  }, []);

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-200">
            Sacrament Meeting Planner
          </p>
          <h1 className="text-2xl font-bold">
            Dome Ward
          </h1>
        </div>

        <p className="text-sm text-blue-100">
          {currentDate || "Loading date..."}
        </p>
      </div>
    </header>
  );
}