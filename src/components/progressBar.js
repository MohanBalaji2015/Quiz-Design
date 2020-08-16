import React from "react";
import "../App.css";

export default function ProgressBar(props) {

  return (
    <div id="myProgress">
      <div id="myBar" width={props.width} style={{ width: props.width*14.285 +"%" }}></div>
    </div>
  );
}
