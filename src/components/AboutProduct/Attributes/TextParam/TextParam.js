import { useState } from "react";
import s from "../Attributes.module.css";

const TextParam = ({ textParam }) => {
    const [activeType, setActiveType] = useState(0);
    
    const onSelectType = (index) => {
        setActiveType(index);
    };
    
    let newTextParam = textParam.items.map((c, index) => (
        <div
            onClick={() => onSelectType(index)}
            className={activeType === index ? s.blockActive : s.block}
            key={c.id}
        >
            {c.value}
        </div>
    ));

    return (
        <div>
            <div className={s.parameter}>{textParam.name}:</div>
            <div className={s.wrap}>{newTextParam}</div>
        </div>
    );
};

export default TextParam;
