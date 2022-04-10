import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div
      style={{
        height: "180px",
        width: "100%",
        overflow: "hidden",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      className="footer relative pt-10 z-0"
    >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ stroke: "none", fill: "#2E3440" }}
        ></path>
      </svg>
    </div>
  );
}
