import s from "./Product.module.css";

const Product = ({name, photo, symbol, amount, inStock}) => {
     
    return (
        <figure className={!inStock ? s.outOfStock : s.wpar}>
            {!inStock ? <span className={s.mesOutOfStock}>OUT OF STOCK</span> : null}
            <img className={s.photo} src={photo} alt="product" />
            <figcaption className={s.name}>{name}</figcaption>
            <div className={s.price}><span>{symbol}</span><span>{amount}</span></div>            
        </figure>
    )
}

export default Product