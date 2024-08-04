"use client";
import { useContext } from "react";
import "./DarkMode.module.css";
import { ThemContext } from "@/context/ThemContext";
export default function DarkMode() {
  const { mode, toggle } = useContext(ThemContext);
  return (
    <div
      className="mode container flex border-solid rounded-xl border-indigo-600 border-2 px-1 relative"
      onClick={toggle}
    >
      <div className="icon w-5 h-5  mb-1 mr-1">🌑</div>
      <div className="icon w-5 h-5 mb-1 ">🌙</div>
      <div
        className="switcher w-6 h-6 bg-indigo-600 rounded-full absolute cursor-pointer"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
