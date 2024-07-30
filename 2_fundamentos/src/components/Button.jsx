import React from "react";

const Button = () => {
    const handleClick = () => {
        // eslint-disable-next-line no-undef
        console.log('clicou');
    }
    return (
        <div>
            <button onClick={handleClick}>Clique em mim</button>
        </div>
    )
}

export default Button;