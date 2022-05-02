import React from "react";
import "./Button.css";
export default (props) => (
  <button
    onClick={(e) => props.click && props.click(props.value)}
    className={`
    button
    ${props.operation ? " operation " : ""}
    ${props.double ? " double " : ""}
    ${props.triple ? " triple " : ""}

`}
  >
    {props.value}
  </button>
);
