import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div
      style={
        {
          // overflow: "hidden",
        }
      }
      className="relative pb-24 bottom-10 lg:pb-0 lg:bottom-0 left-0 right-0 footer h-1/5 z-0"
    >
      <h1 className="w-full h-2/3 bottom-0 flex flex-col justify-end mt-2 text-center">
        Copyright © 2022 yarkincaner
      </h1>
    </div>
  );
}
