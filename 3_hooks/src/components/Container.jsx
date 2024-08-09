/* eslint-disable react/prop-types */
import React from "react";

const Container = ({ children }) => {
  return (
    <div>
        <p>Inicio do container</p>
       <div>
            {children}
       </div>
        <p>Fim do container</p>
    </div>)
};

export default Container;
