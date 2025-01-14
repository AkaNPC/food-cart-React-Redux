import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';
import { Routes, Route } from 'react-router-dom';


import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
            <AppHeader total={50} />
            <Routes>
                <Route
                    path="/"
                    element={<MainPage />}
                />
                <Route
                    path="/cart"
                    element={<CartPage />}
                />
            </Routes>
        </div>
    )
}

export default App;