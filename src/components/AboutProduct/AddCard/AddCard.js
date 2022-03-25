import { useDispatch } from "react-redux";
import { setCurrentAboutProduct } from "../../../redux/aboutProduct/reducer";

const AddCard = ({ product }) => {
    const dispatch = useDispatch();
    console.log("product", product);

    const handleClick = () => {
        dispatch(setCurrentAboutProduct(product));
        console.log('cl', product)
    };

    return (
        <div>
            <div onClick={handleClick}>
                add to cart
            </div>           
        </div>
    );
};

export default AddCard;
