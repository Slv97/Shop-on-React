import React from "react";
import MyBagProductAttributes from "../../MyBag/MyBagProduct/MyBagProductAttributes/MyBagProductAttributes";

import s from "./CartItem.module.css";

const CartItem = ({ name, brand, photo, attributes }) => {
    const handleClick = (e) => {
        // e.stopPropagation()
        console.log("cl");

        // dispatch(setItemInCart(product))
    };
    return (
        <div className={s.wrapItem}>
            <div className={s.textWrap}>
                <div className={s.name}>{name}</div>
                <div className={s.text}>{brand}</div>
                <div className={s.price}>$50</div>
                <div>
                    <MyBagProductAttributes attributes={attributes} />
                </div>
            </div>

            <div className={s.wrap}>
                <div className={s.filter}>
                    <button className={s.btn} onClick={handleClick}>
                        +
                    </button>
                    <div>22</div>
                    <button className={s.btn}>-</button>
                </div>

                <div>
                    <img className={s.photo} src={photo} alt={name} />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
