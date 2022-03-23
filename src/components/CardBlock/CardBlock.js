import { useState } from "react";
import { useSelector } from "react-redux";
import s from "./CardBlock.module.css";

import Vector from "../../assets/images/Vector.svg";
import Cart from "../../assets/images/Cart.svg";
import ProductsInCard from "../ProductsInCard/ProductsInCard";
import MyBag from "../MyBag/MyBag";
import { useCalcTotalPrice } from "../../utils/useCalcTotalPrice";

const CardBlock = () => {
    const products = useSelector((state) => state.cart.itemsInCart);
    // console.log("products123", products);
    const totalPrice = useCalcTotalPrice(products);

    const [isMyBagVisible, setIsMyBagVisible] = useState(false);

    let productsLength = products.length

    // let productInMyBag = products.map((product) => (
    //     <MyBag key={product.id} totalPrice={totalPrice} product={product} productsLength={productsLength} />
    // ));
   

    return (
        <>
            <div className={s.currencyWrap}>
                <span className={s.currency}>$</span>
                <span className={s.more}>
                    <img src={Vector} alt="Vector" />
                </span>
            </div>
            <div className={s.cartWrap} onClick={() => setIsMyBagVisible(!isMyBagVisible)}>
                <img
                    className={s.cart}
                    src={Cart}
                    alt="Cart"                    
                />
                <div className={s.quantity}>
                    <ProductsInCard quantity={products.length} />
                </div>
            </div>

            {/* { isMyBagVisible && productInMyBag } */}
            { isMyBagVisible && <MyBag  totalPrice={totalPrice} products={products} productsLength={productsLength} /> }
        </>
    );
};

export default CardBlock;
