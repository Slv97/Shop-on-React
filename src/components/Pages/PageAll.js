import { useQuery } from "@apollo/client";
import Preloader from "../Preloader/Preloader";
import Products from "../Products/Products";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { GET_ALL_PRODUCTS } from "../Products/queriesProducts";

const PageAll = () => {
    const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

    if (loading) return <Preloader />;
    if (error) return <NotFoundPage />;

    return (
        <div>
            <Products data={data} />
        </div>
    );
};

export default PageAll;
