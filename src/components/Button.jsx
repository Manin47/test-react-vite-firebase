import React from "react";

function Button ({ backgroundColor , label, onClick }) {
    return (  
    <>  
        <button style={{ backgroundColor  }} onClick={onClick}>
          {label} x 
        </button>
    </>
   );
}

export default Button ;