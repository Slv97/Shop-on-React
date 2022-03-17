import s from "./Product.module.css";
import {Link} from "react-router-dom"

const Product = ({id, name, photo, symbol, amount, inStock}) => {
     
    return (
        <Link to={`/all/${id}`} className={s.link}>
        <figure className={!inStock ? s.outOfStock : s.wrap}>
            {!inStock ? <span className={s.mesOutOfStock}>OUT OF STOCK</span> : null}
            <img className={s.photo} src={photo} alt="product" />
            <figcaption className={s.name}>{name}</figcaption>
            <div className={s.price}><span>{symbol}</span><span>{amount}</span></div>            
        </figure>
        </Link>
        
    )
}

export default Product