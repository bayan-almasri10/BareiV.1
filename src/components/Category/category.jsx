"use client";
import React from "react";
import Link from "next/link";

export default function CategoryBar({ category, link, child }) {
  return (
    <div className="category" dir="rtl">
      <div className="flex">
        <div className="dropdown ml-3 ">
          <Link href={link || "#"}>
            <button
              className="btn dropdown-toggle bg-slate-100"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {category}
            </button>
          </Link>
          <ul className="dropdown-menu">
            {/* {
              category.child.map((item, index) => (
                <li key={index} dir="rtl">
                  <Link href="#" as="#">
                    <a className="dropdown-item">{item}</a>
                  </Link>
                </li>
              ))
              }  */}
          </ul>
        </div>
      </div>
    </div>
  );
}
