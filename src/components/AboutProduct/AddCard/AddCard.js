import Btn from "../../Btn/Btn";

import s from "./AddCard.module.css"


const AddCard = ({imgObj, priceObj, nameObj,brandObj, onClickAddItem }) => {
    console.log('nameObj', priceObj)

    const onAddItem = () => {
        const obj = {
            nameObj,
            brandObj,
            imgObj,
            priceObj
        }
        onClickAddItem(obj)
    }

    return (
        <Btn onClick={onAddItem} text="add to cart" size={s.btnMiddle} />
                       
    );
};

export default AddCard;
