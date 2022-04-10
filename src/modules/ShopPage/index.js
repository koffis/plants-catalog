import React, { useEffect, useState } from 'react';
import { useWindow } from "../../utils";
import { useDispatch, useSelector } from 'react-redux';
import Header from "../components/Header";
import Categories from '../HomePage/categories';
import { receiveShop } from './actions/shopActions';
import GoodsList from '../components/GoodsList';
import CategoriesBlock from '../components/Categories';
import Footer from "../components/Footer";
import FooterMobile from "../components/FooterMobile";
import { Helmet } from "react-helmet";

import InfiniteScroll from "react-infinite-scroller"

import './index.scss';


const ShopPage = () => {
    const { header } = useWindow();
    const dispatch = useDispatch();
    const [page, setPage] = useState(2);

    const { shop, total } = useSelector(state => state.shop);

    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter');
    const search = urlParams.get('search');

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(receiveShop({ page: 1, category: filter, search }));
        setPage(2);
    }, [filter, search]);


    const getNextPage = () => {
        dispatch(receiveShop({ page: page, category: filter, search }));
        setPage(page + 1);
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Зелений сад - Каталог</title>
            </Helmet>
            <Header />
            <CategoriesBlock />
            {shop.length !== 0

                ? (<div>
                    <GoodsList title={'Каталог'} goods={shop} />
                    <div className='show-more'>
                        {shop.length < total && <button onClick={getNextPage}>Показати ще</button>}
                    </div>
                </div>)
                : <div className="no-data">Товарів не знайдено.</div>
            }
            {header ? <Footer /> : <FooterMobile />}
        </>
    );
};

export default ShopPage;