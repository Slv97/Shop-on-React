import { useQuery } from "@apollo/client";
import React from "react";
import s from "./Category.module.css";
import { GET_ALL_CATEGORIES } from "../Header/queriesHeader";
import { NavLink } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const Category = () => {
    const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

    if (loading) return <Preloader />;
    if (error) return <NotFoundPage />;
  
    const setActive = ({ isActive }) => (isActive ? s.active : s.category);

    let category = data.categories.map((category) => (
        <NavLink to={category.name} className={setActive} key={category.name}>
            {category.name}
        </NavLink>
    ));

    return <>{category}</>;
};

export default Category;
