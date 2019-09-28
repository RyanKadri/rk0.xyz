import React from "react";
import writeup from "./lab-writeup.md";

export function FormControlLab() {
    return (
        <div dangerouslySetInnerHTML={{ __html: writeup }}></div>
    )
}