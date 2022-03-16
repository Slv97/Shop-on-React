import React from "react";
import { useQuery } from "@apollo/client";
import s from "./Category.module.css";
import { GET_ALL_CATEGORIES } from "../Header/queriesHeader";
import { NavLink } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const Category = () => {
    const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

    if (loading) return <Preloader />;
    if (error) return <p>Err</p>;

    // let dataA = {
    //     categories: [{ name: "all" }, { name: "tech" }],
    // };
    // console.log("dataA", data);    

    const setActive = ({ isActive }) => (isActive ? s.active : s.category);

    let category = data.categories.map((category) => (
        <NavLink to={category.name} className={setActive} key={category.name}>
            {category.name}
        </NavLink>
    ));

    return <>{category}</>;
};

export default Category;
