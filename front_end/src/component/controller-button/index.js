import React from "react";
import "./style.css"
export default function ControllerButton(props){
    return(
        <button className="btn-control" type="button">{props.name}</button>
    )
}