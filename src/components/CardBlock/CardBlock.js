import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_ALL_CURRENCIES } from "./queriesCurrencies";
import { useCalcTotalPrice } from "../../utils/useCalcTotalPrice";

import ProductsInCard from "../ProductsInCard/ProductsInCard";
import Currency from "../Currency/Currency";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Preloader from "../Preloader/Preloader";
import MyBag from "../MyBag/MyBag";

import s from "./CardBlock.module.css";
import Cart from "../../assets/images/Cart.svg";

const CardBlock = () => {
    const [visibleCart, setVisibleCart] = useState(false);
    const cartRef = useRef();
    const myBagRef = useRef();

    const toggleVisibleCart = () => {
        setVisibleCart(!visibleCart);
    };

    const handleOutsideClick = (e) => {
        if (
            !e.path.includes(cartRef.current) &&
            !e.path.includes(myBagRef.current)
        ) {
            setVisibleCart(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, []);

    const products = useSelector((state) => state.cart.itemsInCart);
    // console.log("products123", products);
    const totalPrice = useCalcTotalPrice(products);

    let productsLength = products.length;

    const { loading, error, data } = useQuery(GET_ALL_CURRENCIES);
    if (loading) return <Preloader />;
    if (error) return <NotFoundPage />;

    return (
        <>
            <Currency
                activeSortType={0}
                items={data.currencies}
            />

            <div
                className={s.cartWrap}
                ref={cartRef}
                onClick={toggleVisibleCart}
            >
                <img className={s.cart} src={Cart} alt="Cart" />
                <div className={s.quantity}>
                    <ProductsInCard quantity={products.length} />
                </div>
            </div>

            {visibleCart && (
                <MyBag
                    refVisible={myBagRef}
                    totalPrice={totalPrice}
                    products={products}
                    productsLength={productsLength}
                />
            )}
        </>
    );
};

export default CardBlock;
