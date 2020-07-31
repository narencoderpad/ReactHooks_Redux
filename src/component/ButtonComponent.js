import React from "react";
 
function ButtonComponent(props){
      return(
            <button onClick={props.handleClick} className="btn btn-primary">{props.BtnText}</button>
       );
}
export default ButtonComponent;