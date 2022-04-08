import React from 'react';
import { Link } from 'react-router-dom';
import CategoryDropdown from './HoverMenuButton';

import './index.scss';

const CategoriesBlock = () => {

    const colonovydny = [
        {name: 'Всі', category: 'Колоновидні'}, 
        {name: 'Абрикос'}, 
        {name: 'Вишні'}, 
        {name: 'Груші'}, 
        {name: 'Персик'}, 
        {name: 'Слива'}, 
        {name: 'Черешня'}, 
        {name: 'Яблуні'}
    ];

    const kuschi = [
        {name: 'Всі', category: 'Кущі'}, 
        {name: 'Абрикос'}, 
        {name: 'Агрус'},
        {name: 'Виноград'},
        {name: 'Горобина'},
        {name: 'Жимолость'},
        {name: 'Інжир'},
        {name: 'Йошта'},
        {name: 'Кизил'},
        {name: 'Лохина'},
        {name: 'Малина'},
        {name: 'Ожина'},
        {name: 'Полуниця'},
        {name: 'Порічки'},
        {name: 'Смородина'},
        {name: 'Суниця'},
        {name: 'Хурма'},
    ];

    const yagidni = [
        {name: 'Всі', category: 'Плодово-ягідні'}, 
        {name: 'Агрус'},
        {name: 'Вишня'},
        {name: 'Горіхи'},
        {name: 'Груші'},
        {name: 'Ківі'},
        {name: 'Персик'},
        {name: 'Сливи'},
        {name: 'Черешні'},
        {name: 'Шовковиця'},
        {name: 'Яблуні'},
        {name: "Яблуня (рожева м'якоть)"}
    ];

    const troyandy = [
        {name: 'Всі', category: 'Троянди'}, 
        {name: 'Англійські троянди'},
        {name: 'Бордюрні'},
        {name: 'Грунтопокривні'},
        {name: 'Мініатюрні(капелька)'},
        {name: 'Паркові'},
        {name: 'Плетисті'},
        {name: 'Троянди (в контейнері)'},
        {name: 'Чайногібридні'},
    ];

    return ( 
        <div className='categories-block'>
            <Link to='shop?filter=Декоративні'>Декоративні</Link>
            <Link to='shop?filter=Новинки'>Новинки</Link>
            <CategoryDropdown title='Колоновидні' menuItems={colonovydny}/>
            <CategoryDropdown title='Кущі' menuItems={kuschi}/>
            <CategoryDropdown title='Плодово-ягідні' menuItems={yagidni}/>
            <CategoryDropdown title='Троянди' menuItems={troyandy}/>
        </div>
    );
}
 
export default CategoriesBlock;