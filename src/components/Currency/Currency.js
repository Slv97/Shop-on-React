import React, { useRef, useState } from "react";
import s from "./Currency.module.css";
import Vector from "../../assets/images/Vector.svg";

const Currency = ({ items }) => {
    const [visibleCurrency, setVisibleCurrency] = useState(false);
    const [activeItem, setActiveItem] = useState(0)
    const currencyRef = useRef();
    const activeLabel = items[activeItem].symbol;

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
        setVisibleCurrency(false);
    };

    React.useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, []);

    return (
        <div
            className={s.wrap}
            ref={currencyRef}
            onClick={toggleVisibleCurrency}
        >
            <div className={s.currencyWrap}>
                <span className={s.currency}>{activeLabel}</span>
                <span className={s.more}>
                    <img
                        className={visibleCurrency ? s.rotated : ""}
                        src={Vector}
                        alt="Vector"
                    />
                </span>
            </div>

            {visibleCurrency && (
                <ul className={s.list}>
                    {items &&
                        items.map((item, index) => (
                            <li
                                onClick={() => onSelectItem(index)}
                                className={
                                    activeItem === index ? s.active : s.item
                                }
                                key={`${item.label}_${index}`}
                            >
                                {item.symbol} {item.label}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}


export default Currency