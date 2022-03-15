import { useQuery } from "@apollo/client";
import Product from "../Product/Product";
import s from "./Products.module.css";
import { GET_ALL_PRODUCTS, GET_CLOTHES_PRODUCTS, GET_TECH_PRODUCTS } from "./queriesProducts";

const Products = () => {
    const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
    // const { loading, error, data } = useQuery(GET_TECH_PRODUCTS);
    // const { loading, error, data } = useQuery(GET_CLOTHES_PRODUCTS);

    if (loading) return <p>Load...</p>;
    if (error) return <p>Err</p>;

    console.log("data", data);

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
