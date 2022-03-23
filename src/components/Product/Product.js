import s from "./Product.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart } from "../../redux/cart/reducer";

const Product = ({ product, id, name, photo, symbol, amount, inStock }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.itemsInCart);
    const isItemInCart = items.some((item) => item.id === id);

    // console.log('product888', product)
    const handleClick = (e) => {
        e.stopPropagation();

        if(isItemInCart) {
            dispatch(deleteItemFromCart(id));
        } else {
            dispatch(setItemInCart(product));
        }        
    };

    const OutOfStock = !inStock ? (
        <span className={s.mesOutOfStock}>OUT OF STOCK</span>
    ) : null;

    return (
        <figure className={!inStock ? s.outOfStock : `${s.wrap}`}>

            {OutOfStock}

            <Link to={`/all/${id}`} className={s.link}>
                <img className={s.photo} src={photo} alt="product" />
                <figcaption className={s.name}>{name}</figcaption>
                <div className={s.price}>
                    <span>{symbol}</span>
                    <span>{amount}</span>
                </div>
            </Link>

            {inStock ? (
                <div className={isItemInCart ? s.cartRemove : s.cart} onClick={handleClick}></div>
            ) : null}
        </figure>
    );
};

export default Product;
