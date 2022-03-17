import s from "../Attributes.module.css";

const Color = ({ color }) => {
    let newColor = color.items.map((c) => (
        <div
            className={s.blockColor}
            style={{ "--color": c.value }}
            key={c.id}
        ></div>
    ));

    return (
        <div>
            <div className={s.parameter}>{color.name}:</div>
            <div className={s.wrap}>{newColor}</div>
        </div>
    );
};

export default Color;
