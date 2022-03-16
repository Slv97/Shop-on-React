import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PageAll from "./components/Pages/PageAll";
import PageClothes from "./components/Pages/PageClothes";
import PageTech from "./components/Pages/PageTech";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";

const App = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PageAll />} />
                    {/* <Route path="all" element={<Navigate to="/" replace />} /> */}
                    <Route path="all" element={<PageAll />} />
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
