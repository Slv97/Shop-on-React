import Btn from "../Btn/Btn";
import s from "./AboutProduct.module.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Preloader from "../Preloader/Preloader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { GET_ABOUT_PRODUCT } from "./queriesAboutProduct";
import Gallery from "./Gallery/Gallery";
// import Size from "./Size/Size";
import Attributes from "./Attributes/Attributes";

const AboutProduct = () => {
    const { id } = useParams();

    const { loading, error, data } = useQuery(GET_ABOUT_PRODUCT, {
        variables: { id: id },
    });

    if (loading) return <Preloader />;
    if (error) return <NotFoundPage />;

    function createMarkup() {
        return { __html: data.product.description };
    }

    // console.log("data", data.product.attributes);

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

                    <Btn text="add to cart" to="" />

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
