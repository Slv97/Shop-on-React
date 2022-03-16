import Btn from "../Btn/Btn";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    return (
        <div className={s.wrap}>
            <div className={s.error}>404</div>
            <div>This page is missing.</div>
            <Btn text="go home" to="/" />
        </div>
    );
};

export default NotFoundPage;
