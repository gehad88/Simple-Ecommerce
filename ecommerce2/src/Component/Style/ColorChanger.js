import { useState, useEffect } from "react";

export function useColorChange(initialColor) {
  const [buttonColor, setButtonColor] = useState(initialColor);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = getRandomColor();
      setButtonColor(randomColor);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return buttonColor;
}
export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
