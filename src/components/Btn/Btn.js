import s from "./Btn.module.css";
import { Link } from "react-router-dom";

const Btn = ({ text, to, children, ...props }) => {
    return (
        <Link to={to} className={s.wrap} {...props}>
            <div onClick={props.onClick} className={`${s.btn} ${s.middle}`}>
                {text} {children}
            </div>
        </Link>
    );
};

export default Btn;
