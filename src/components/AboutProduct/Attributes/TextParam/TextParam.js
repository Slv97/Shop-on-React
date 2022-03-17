import s from "../Attributes.module.css";

const TextParam = ({ textParam }) => {
    let newTextParam = textParam.items.map((c) => (
        <div className={s.block} key={c.id}>{c.value}</div>
    ));

    return (
        <div>
            <div className={s.parameter}>{textParam.name}:</div>
            <div className={s.wrap}>{newTextParam}</div>
        </div>
    );
};

export default TextParam;
