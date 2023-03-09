import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Header from "./pages/Header";
import Erro from "./pages/Erro";

const RouteApp = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={ <Filme/> } />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteApp;