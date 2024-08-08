import React from "react";
import useWindowSize from "../hooks/useWindowSize";

const WindowSizeComponent = () => {
  const {width, height} = useWindowSize();

  return (
    <div>
      <p>Largura: {width}</p>
      <p>Altura: {height}</p>
    </div>
  );
};

export default WindowSizeComponent;
