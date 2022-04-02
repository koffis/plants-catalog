import React, { useEffect } from 'react';
import { useWindow } from "../../utils";
import Header from "../components/Header";

const ShopPage = () => {
    const { header } = useWindow();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <div>
                GAMNO
            </div>
        </>
    );
};

export default ShopPage;