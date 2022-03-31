import s from "./Btn.module.css";

const Btn = ({ text, children, size,  ...props }) => {
    
    return (
        <button onClick={props.onClick} className={`${s.btn} ${size}`}>
            {text} {children}
        </button>
    );
};

export default Btn;
