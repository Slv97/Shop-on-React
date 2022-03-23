import s from "./MyBagProduct.module.css";
import { useDispatch, useSelect } from "react-redux";
import { setItemInCart } from "../../../redux/cart/reducer";
import MyBagProductAttributes from "./MyBagProductAttributes/MyBagProductAttributes";

const MyBagProduct = ({ product, name, brand, photo, attributes }) => {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.stopPropagation()
        // console.log('cl')

        dispatch(setItemInCart(product))
    }
    return (
        <div className={s.wrap}>
            <div className={s.textWrap}>
                <div className={s.text}>{name}</div>
                <div className={s.text}>{brand}</div>
                <div className={s.price}>$50</div>
                <div><MyBagProductAttributes attributes={attributes} /></div>
            </div>
            <div className={s.filter}>
                <button className={s.btn} onClick={handleClick}>+</button>
                <div>22</div>
                <button className={s.btn} >-</button>
            </div>
            <div>
                <img className={s.photo} src={photo} alt={name} />
            </div>
        </div>
    );
};

export default MyBagProduct;
