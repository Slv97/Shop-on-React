import { useState } from "react";
import {useLocalStorage} from "../../../../utils/useLocalStorage";
import s from "../Attributes.module.css";

const Color = ({ color }) => {
    const [selectedColor, setSelectedColor] = useLocalStorage(color.id, '');  

       
    let newColor = color.items.map((color) => (
        <div
            className={selectedColor === color ? s.selectedBlockColor : s.blockColor}
            style={{ "--color": color.value }}
            key={color.id}
            onClick={() => setSelectedColor(color)}
        ></div>
    ));

    return (
        <div>
            <div className={s.parameter}>{color.name}:</div>
            <div className={s.wrap}>{newColor}</div>
        </div>
    );
};

export default Color;
