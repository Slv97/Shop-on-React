import React from "react";

import CartItem from "./CartItem/CartItem";

import s from "./Cart.module.css";
import { useSelector } from "react-redux";

const Cart = () => {

  const products = useSelector((state) => state.cart.itemsInCart);

  console.log('products', products)

  let cartItem = products.map((product) => (
    <CartItem
        key={product.id}
        product={product}
        name={product.name}
        brand={product.brand}
        photo={product.gallery[0]}
        attributes={product.attributes}
    />
));

    return (
        <div className={s.wrap}>
            {cartItem}
        </div>
    );
}

export default Cart