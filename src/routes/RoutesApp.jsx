import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import ProfilePage from '../pages/ProfilePage';
import BasketPage from '../pages/BasketPage';
import ContactsPage from '../pages/ContactsPage';
import NewsPage from '../pages/NewsPage';
import –°atalogPage from '../pages/–°atalogPage';



const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog/*' element={<BlogPage /> } />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/basket' element={<BasketPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/catalog' element={<–°atalogPage />} />
        </Routes>
    );
};

export default RoutesApp;