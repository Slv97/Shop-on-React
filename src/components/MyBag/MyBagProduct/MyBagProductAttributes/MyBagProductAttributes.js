import s from "./MyBagProductAttributes.module.css";

const MyBagProductAttributes = ({ attributes }) => {
    let textAttribut = attributes.filter((element) => element.type === "text");

    let textSwatch = attributes.filter((element) => element.type === "swatch");
    
    return (
        <div className={s.wrap}>
            {textAttribut[0] ? (
                <div className={s.text}>{textAttribut[0].items[0].value}</div>
            ) : null}
            {textAttribut[1] ? (
                <div className={s.text}>{textAttribut[1].items[0].value}</div>
            ) : null}
            {textAttribut[2] ? (
                <div className={s.text}>{textAttribut[2].items[0].value}</div>
            ) : null}
            {textAttribut[3] ? (
                <div className={s.text}>{textAttribut[3].items[0].value}</div>
            ) : null}
            {textSwatch[0] ? (
                <div className={`${s.text} ${s.color}`} style={{ "--color": textSwatch[0].items[0].value }}></div>
            ) : null}            
        </div>
    );
};

export default MyBagProductAttributes;
