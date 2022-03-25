import s from "../Attributes.module.css";

const TextParam = ({ textParam }) => {
    let newTextParam = textParam.items.map((c) => (
        <div className={s.block} key={c.id}>{c.value}</div>
    ));

    const handleClick = () => {
        console.log('att')
    }

    return (
        <div>
            <div className={s.parameter}>{textParam.name}:</div>
            <div className={s.wrap} onClick={handleClick}>{newTextParam}</div>
        </div>
    );
};

export default TextParam;
