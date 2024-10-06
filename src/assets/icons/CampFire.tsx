import React from "react";

export function CampFire({ size = 64, stroke = "#FFFFFF" }: { size?: number; stroke?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
    >
      <path
        d="M13.75 56s-5-7.566-5-19c0-11.434 5.332-8.909 3-20 0 0 6.391 8.123 6 16 0 0 .015-8.682 10-15s10-10 10-10 6.877 7.303 9 17-1 15-1 15 6.606-4.632 7-10c0 0 7.734 17.053-4 26"
        style={{ fill: "none", stroke, strokeWidth: "2px" }}
      />
      <path
        d="M17.75 33s-.499 2.865.25 8M25.917 56s-1.667-2.522-1.667-6.333c0-3.812 1.777-2.97 1-6.667 0 0 2.13 2.708 2 5.333 0 0 .005-2.894 3.333-5C33.912 41.227 33.917 40 33.917 40s2.292 2.434 3 5.667c.707 3.232-.334 5-.334 5s2.202-1.544 2.334-3.334c0 0 2.578 5.685-1.334 8.667M21 36.5c-.254-.624-.89-8.275 7-14M48 52s4.051-2.844 4-10"
        style={{ fill: "none", stroke, strokeWidth: "2px" }}
      />
    </svg>
  );
}
