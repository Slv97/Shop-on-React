import React, { useRef, useState } from "react";
import s from "./Currency.module.css";
import Vector from "../../assets/images/Vector.svg";

export default function Currency({ items }) {
    const [visibleCurrency, setVisibleCurrency] = useState(false);
    const [activeItem, setActiveItem] = useState(0)
    const currencyRef = useRef();
    const activeLabel = items[activeItem]

    const toggleVisibleCurrency = () => {
        setVisibleCurrency(!visibleCurrency);
    };

    const handleOutsideClick = (e) => {
        if (!e.path.includes(currencyRef.current)) {
            setVisibleCurrency(false);
        }
    };

    const onSelectItem = (index) => {
        setActiveItem(index)
        setVisibleCurrency(false)
    }

    React.useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, []);

    return (
        <div className={s.wrap} ref={currencyRef} onClick={toggleVisibleCurrency}>
            <span className={s.currency}>{activeLabel}</span>
            <span className={s.more} >
                <img className={visibleCurrency ? s.rotated : ''} src={Vector} alt="Vector" />
            </span>

            {visibleCurrency && (
                <div>
                    <ul>
                        {items &&
                            items.map((name, index) => (
                                <li onClick={() => onSelectItem(index)}
                                className={activeItem === index ? s.active : null}
                                key={`${name}_${index}`}>{name}</li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
