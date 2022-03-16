import Product from "../Product/Product";
import s from "./Products.module.css";

const Products = ({ data }) => {
    let category = data.category.name;

    let product = data.category.products.map((product) => (
        <Product
            key={product.id}
            id={product.id}
            name={product.name}
            photo={product.gallery[0]}
            symbol={product.prices[0].currency.symbol}
            amount={product.prices[0].amount}
            inStock={product.inStock}
        />
    ));
    return (
        <div>
            <div className={s.category}>Category {category}</div>
            <div className={s.wrap}>{product}</div>
        </div>
    );
};

export default Products;
