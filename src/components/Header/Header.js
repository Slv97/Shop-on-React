import React from "react";
import s from "./Header.module.css";
import VSF from "../../assets/images/VSF.svg";
import Vector from "../../assets/images/Vector.svg";
import Cart from "../../assets/images/Cart.svg";
import Category from "../Category/Category";

const Header = ({ onClick }) => {
    return (
        <header className={s.wrap}>
            <div className={s.categories}>
                <Category onClick={onClick} />
            </div>

            <div>
                <img src={VSF} alt="VSF" />
            </div>

            <div className={s.cartWrap}>
                <div className={s.currencyWrap}>
                    <span className={s.currency}>$</span>
                    <span className={s.more}>
                        <img src={Vector} alt="Vector" />
                    </span>
                </div>

                <img className={s.cart} src={Cart} alt="Cart" />
            </div>
        </header>
    );
};

export default Header;
