import React from 'react';
import { Link } from 'react-router-dom';

import "./index.scss";


const Categories = ({ header }) => {
    return (
        <div className="home-categories">
            <Link to='/shop' className="home-categories-item item-1">
                <span>Плодові</span>
            </Link>
            <div className="home-categories-item item-2">
                <span>Декоративні</span>
            </div>
            <div className="home-categories-item item-3">
                <span>Ягідні</span>
            </div>
            <div className="home-categories-item item-4">
                <span>Екзотичні</span>
            </div>
            <div className="home-categories-item item-5">
                <span>Цибулини</span>
            </div>
            <div className="home-categories-item item-6">
                <span>Колоноподібні</span>
            </div>
            {header ? (
                <div className="home-categories-item item-6">
                    <span>Добрива</span>
                </div>
            ) : null}
        </div>
    );
}

export default Categories;