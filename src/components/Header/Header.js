import React from "react";
import s from "./Header.module.css";
import VSF from "../../assets/images/VSF.svg";
import Category from "../Category/Category";
import CardBlock from "../CardBlock/CardBlock";
import { Link } from "react-router-dom";

const Header = ({ onClick }) => {
    return (
        <div className={s.positionSticky}>
            <header className={s.wrap}>
                <div className={s.categories}>
                    <Category onClick={onClick} />
                </div>

                <div>
                    <Link to="all">
                        <img src={VSF} alt="VSF" />
                    </Link>
                </div>

                <div className={s.cartWrap}>
                    <CardBlock />
                </div>
            </header>
        </div>
    );
};

export default Header;
