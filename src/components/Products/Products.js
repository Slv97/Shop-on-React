import Product from "../Product/Product";
import s from "./Products.module.css";

const Products = ({data}) => {

    let product = data.category.products.map((product) => (
        <Product
            key={product.id}
            name={product.name}
            photo={product.gallery[0]}
            symbol={product.prices[0].currency.symbol}
            amount={product.prices[0].amount}
            inStock={product.inStock}
        />
    ));
    return <div className={s.wrap}>{product}</div>;
};

export default Products;
