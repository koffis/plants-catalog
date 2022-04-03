import React, { useEffect } from 'react';
import { useWindow } from "../../utils";
import Header from "../components/Header";
import Categories from '../HomePage/categories';

const ShopPage = () => {
    const { header } = useWindow();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <Categories />
            <div>
                List of items
            </div>
        </>
    );
};

export default ShopPage;