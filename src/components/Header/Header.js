import { useQuery } from "@apollo/client";
import React from "react";
import s from "./Header.module.css";
import { GET_ALL_CATEGORIES } from "./queriesHeader";
import VSF from "../../assets/images/VSF.svg";
import Vector from "../../assets/images/Vector.svg";
import Cart from "../../assets/images/Cart.svg";

const Header = () => {
    const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

    if (loading) return <p>Load...</p>;
    if (error) return <p>Err</p>;

    let category = data.categories.map((category) => (
        <div className={s.category} key={category.name}>
            {category.name}
        </div>
    ));
    return (
        <div className={s.wrap}>
            <div className={s.categories}>{category}</div>

            <div>
                <img src={VSF} alt="VSF" />
            </div>

            <div className={s.cartWrap}>
                <div className={s.currencyWrap}>
                    <span className={s.currency}>$</span>
                    <span className={s.more}>
                        <img src={Vector} alt="Vector" />
                    </span>
                </div>

                <img className={s.cart} src={Cart} alt="Cart" />
            </div>
        </div>
    );
};

// class Header extends React.Component {

//     test = client.query({
//     query: GET_ALL_CATEGORIES
//   })
//   .then(result => console.log(result))

//     componentDidMount() {}//первый раз создалось
//     componentDidUpdate() {}//обновится

//     render() {
//         // function Ex() {
//         //     const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

//         //     if (loading) return <p>Load...</p>;
//         //     if (error) return <p>Err</p>;

//         //     console.log(data.categories)

//         //     return (
//         //       <div>{data.categories.map(cat => <div key={cat.name}>{cat.name}</div>)}</div>
//         //     )
//         // }

//         return (
//             <div className={s.wrap}>
//                 <div>
//                     {/* <Ex /> */}
//                 </div>
//                 <div></div>
//                 <div></div>
//             </div>
//         );
//     }
// }

export default Header;
