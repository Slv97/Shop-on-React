import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart } from "../../../redux/cart/reducer";

const AddCard = ({ product }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.itemsInCart);
    const isItemInCart = items.some((item) => item.id === product.id);
    console.log('product.id', product)

    const handleClick = (e) => {
        e.stopPropagation();
        if(isItemInCart) {
            dispatch(deleteItemFromCart(product.id)); //id нет, но есть нейм, тут оставила как в видосе
        } else {
            dispatch(setItemInCart(product));
        }
        
    };

    return (
        <div>
            <div onClick={handleClick}>
                {isItemInCart ? "remove from" : "add to cart"}
            </div>
            {/* <Btn text="add to cart" to="" /> */}
        </div>
    );
};

export default AddCard;
