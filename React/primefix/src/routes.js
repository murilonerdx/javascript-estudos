import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./pages/Header";

const RouteApp = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/filme" element={<Filme />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteApp;