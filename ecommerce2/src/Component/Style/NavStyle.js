import React, { useEffect, useState } from "react";

function NavStyle({ children }) {
  const [productsButtonColor, setProductsButtonColor] = useState("initial");

  useEffect(() => {
    const colors = ["red", "blue", "green", "orange"]; // List of colors
    let currentIndex = 0;

    const interval = setInterval(() => {
      setProductsButtonColor(colors[currentIndex]);
      currentIndex = (currentIndex + 1) % colors.length;
    }, 1000); // Change color every second
    console.log("hi from NavStyl.js");

    return () => {
      console.log("hi from NavStyl.js");
      clearInterval(interval);
    };
  }, []);
  console.log("hi from NavStyl.js");

  return <div style={{ color: productsButtonColor }}>{children}</div>;
}

export default NavStyle;
