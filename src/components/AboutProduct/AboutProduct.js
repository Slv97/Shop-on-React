import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setItemInCartWithAttributes } from "../../redux/cart/reducer";

import Preloader from "../Preloader/Preloader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import { useQuery } from "@apollo/client";
import { GET_ABOUT_PRODUCT } from "./queriesAboutProduct";

// import Size from "./Size/Size";
import Gallery from "./Gallery/Gallery";
import Attributes from "./Attributes/Attributes";
import AddCard from "./AddCard/AddCard";
import s from "./AboutProduct.module.css";

const AboutProduct = () => {

    const dispatch = useDispatch();

    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_ABOUT_PRODUCT, {
        variables: { id: id },
    });
    if (loading) return <Preloader />;
    if (error) return <NotFoundPage />;

    function createMarkup() {
        return { __html: data.product.description };
    }

    console.log("data", data.product);

    const handleAddItemInCart = (obj) => {
        console.log("12113", obj);
        dispatch(setItemInCartWithAttributes(obj));
    };


    return (
        <>
            <div className={s.wrap}>
                <Gallery gallery={data.product.gallery} />

                <div className={s.descriptionWrap}>
                    <div className={s.name}>{data.product.name}</div>

                    <div className={s.brand}>{data.product.brand}</div>

                    <Attributes attributes={data.product.attributes} />

                    <div>
                        <div className={s.parameter}>price:</div>
                        <div className={s.price}>
                            <span>
                                {data.product.prices[0].currency.symbol}
                            </span>
                            <span>{data.product.prices[0].amount}</span>{" "}
                        </div>
                    </div>

                    <AddCard
                        nameObj={data.product.name}
                        brandObj={data.product.brand}
                        priceObj={data.product.prices[0].amount}
                        imgObj={data.product.gallery[0]}
                        
                        onClickAddItem={handleAddItemInCart}
                    />

                    <div
                        className={s.description}
                        dangerouslySetInnerHTML={createMarkup()}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default AboutProduct;
