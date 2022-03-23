import s from "./MyBag.module.css";
import MyBagProduct from "./MyBagProduct/MyBagProduct";

const MyBag = ({ products, totalPrice, productsLength }) => {
    console.log("product444", products);

    let txt = productsLength < 2 ? "product" : "products";

    let txtQuantity =
        productsLength > 0 ? (
            <span className={s.txtQuantity}>
                , {productsLength} {txt}
            </span>
        ) : null;

    let myBagProduct = products.map((product) => (
        <MyBagProduct
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
            <div className={s.content}>
                {productsLength > 0 ? (
                    <div>
                        <div className={s.header}>My Bag{txtQuantity}</div>

                        <div>{myBagProduct}</div>

                        <div className={s.wrapTotal}>
                            <div className={s.total}>Total</div>{" "}
                            <div className={s.totalPrice}>{totalPrice}</div>
                        </div>
                        <div>
                            <button>View bag</button>
                            <button>CHECK OUT</button>
                        </div>
                    </div>
                ) : (
                    "the basket is empty"
                )}
            </div>
        </div>
    );
};

export default MyBag;
