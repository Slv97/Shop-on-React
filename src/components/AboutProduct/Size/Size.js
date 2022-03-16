import s from "./Size.module.css";

const Size = ({ sizes }) => {
    let newSize = sizes.items.map((size) => (
        <div key={size.id} className={s.block}>
            {size.value}
        </div>
    ));

    return <div className={s.wrap}>{newSize}</div>;
};

export default Size;
