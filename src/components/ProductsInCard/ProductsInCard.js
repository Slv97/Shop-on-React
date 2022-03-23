import s from "./ProductsInCard.module.css";

const ProductsInCard = ({ quantity = 0 }) => {
    return quantity > 0 ? <div className={s.wrap}>{quantity}</div> : null;
};

export default ProductsInCard;
