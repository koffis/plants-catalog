import React, { useEffect } from 'react';
import { useWindow } from "../../utils";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../components/Header";
import Categories from '../HomePage/categories';
import { receiveShop } from './actions/shopActions';
import GoodsList from '../components/GoodsList';

const ShopPage = () => {
    const { header } = useWindow();
    const dispatch = useDispatch();

    const shop = useSelector(state => state.shop.shop);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(receiveShop())
    }, []);

    return (
        <>
            <Header />
            <Categories />
            <div>
                <GoodsList title={'Каталог'} goods={shop} />
            </div>
        </>
    );
};

export default ShopPage;