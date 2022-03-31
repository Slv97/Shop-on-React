import { Link } from "react-router-dom";

import MyBagProduct from "./MyBagProduct/MyBagProduct";
import Btn from "../Btn/Btn";

import s from "./MyBag.module.css";

const MyBag = ({ products, totalPrice, productsLength, refVisible }) => {
    
    let txt = productsLength < 2 ? "product" : "products";
    let txtQuantity =
        productsLength > 0 ? (
            <span className={s.txtQuantity}>
                , {productsLength} {txt}
            </span>
        ) : null;

    let myBagProduct = products.map((product, index) => (
        <MyBagProduct
            key={product.id + '-' + index}
            product={product}
            name={product.name}
            brand={product.brand}
            photo={product.gallery[0]}
            attributes={product.attributes}
        />
    ));

    return (
        <div className={s.wrap}>
            <div className={s.content} ref={refVisible}>
                {productsLength > 0 ? (
                    <div>
                        <div className={s.header}>My Bag{txtQuantity}</div>

                        <div>{myBagProduct}</div>

                        <div className={s.wrapTotal}>
                            <div className={s.total}>Total</div>
                            <div className={s.totalPrice}>{totalPrice}</div>
                        </div>
                        <div className={s.btnWrap}>
                            <Link to="cart">
                                <Btn size={s.btnSmallBlack} text="View bag" />
                            </Link>

                            <Btn size={s.btnSmall} text="CHECK OUT" />
                        </div>
                    </div>
                ) : (
                    "The basket is empty."
                )}
            </div>
        </div>
    );
};

export default MyBag;
