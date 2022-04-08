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

import InfiniteScroll from "react-infinite-scroller"

import './index.scss';


const ShopPage = () => {
    const { header } = useWindow();
    const dispatch = useDispatch();
    const [page, setPage] = useState(2);

    const {shop, total, loading} = useSelector(state => state.shop);

    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter');

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(receiveShop({page: 1, category: filter}));
    }, [filter]);


    const getNextPage = () => {
        dispatch(receiveShop({page: page, category: filter}));
        setPage(page + 1);
    };

    return (
        <>
            <Header />
            <CategoriesBlock />
            { shop.length !== 0 ? 
                <InfiniteScroll
                    pageStart={0}
                    loadMore={getNextPage}
                    hasMore={!loading && shop.length < total}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    <div>
                        <GoodsList title={'Каталог'} goods={shop} />
                    </div>
                </InfiniteScroll>
                : <div className="no-data">Товарів не знайдено.</div>
            }
            {header ? <Footer /> : <FooterMobile />}
        </>
    );
};

export default ShopPage;