import React from 'react'
import { Routes, Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection.component';
import './shop.styles.scss'


const ShopPage = () => (
    <div>
        <Routes>
            <Route path="/" element={<CollectionOverview /> } />
            <Route path=":name" element={<CollectionPage />} />
        </Routes>
    </div>
)

export default ShopPage;