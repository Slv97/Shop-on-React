import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import PageAll from "./components/Pages/PageAll";
import PageClothes from "./components/Pages/PageClothes";
import PageTech from "./components/Pages/PageTech";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import AboutProduct from "./components/AboutProduct/AboutProduct";
import { Provider } from "react-redux";
import { store } from "./redux";
import Cart from "./components/Cart/Cart";

const App = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<PageAll />} />
                        <Route path="all" element={<PageAll />} />
                        <Route path="all/:id" element={<AboutProduct />} />
                        <Route path="clothes" element={<PageClothes />} />
                        <Route path="tech" element={<PageTech />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </div>
        </Provider>
    );
};

export default App;
