import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import PageAll from "./components/Pages/PageAll";
import PageClothes from "./components/Pages/PageClothes";
import PageTech from "./components/Pages/PageTech";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import AboutProduct from "./components/AboutProduct/AboutProduct";

const App = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PageAll />} />
                    <Route path="all" element={<PageAll />} />
                    <Route path="all/:id" element={<AboutProduct />} />
                    <Route path="clothes" element={<PageClothes />} />
                    <Route path="tech" element={<PageTech />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;

// class App extends React.Component {
//     render() {
//         return (
//             <div className="container">
//                 <div>
//                     <PageAll />
//                     <PageClothes />
//                     <PageTech />
//                 </div>
//             </div>
//         );
//     }
// }
