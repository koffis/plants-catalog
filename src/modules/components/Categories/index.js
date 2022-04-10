import React from 'react';
import { Link } from 'react-router-dom';
import CategoryDropdown from './HoverMenuButton';

import './index.scss';

const CategoriesBlock = () => {

    const colonovydny = [
        {name: 'Всі', category: 'Колоновидні'}, 
        {name: 'Абрикос', category: "Колоновидні | Абрикос"}, 
        {name: 'Вишні', category: "Колоновидні | Вишні"}, 
        {name: 'Груші', category: "Груші | Колоновидні"}, 
        {name: 'Персики', category: "Колоновидні | Персики"}, 
        {name: 'Слива', category: "Колоновидні | Слива"}, 
        {name: 'Черешня', category: "Колоновидні | Черешня"}, 
        {name: 'Яблуні', category: "Колоновидні | Яблуні"}
    ];

    const kuschi = [
        {name: 'Всі', category: 'Кущі'}, 
        {name: 'Агрус', category: 'Кущі | Агрус'},
        {name: 'Виноград', category: 'Кущі | Виноград'},
        {name: 'Горобина', category: 'Кущі | Горобина'},
        {name: 'Жимолость', category: 'Кущі | Жимолость'},
        {name: 'Інжир', category: 'Кущі | Інжир'},
        {name: 'Йошта', category: 'Кущі | Йошта'},
        {name: 'Кизил', category: 'Кущі | Кизил'},
        {name: 'Лохина', category: 'Кущі | Лохина'},
        {name: 'Малина', category: 'Кущі| Малина'},
        {name: 'Ожина', category: 'Кущі | Ожина'},
        {name: 'Полуниця', category: 'Кущі | Полуниця'},
        {name: 'Порічки', category: 'Кущі | Порічки'},
        {name: 'Смородина', category: 'Кущі | Смородина'},
        {name: 'Суниця', category: 'Кущі | Суниця'},
        {name: 'Хурма', category: 'Кущі | Хурма'},
    ];

    const yagidni = [
        {name: 'Всі', category: 'Плодово-ягідні'}, 
        {name: 'Абрикос', category: 'Плодово-ягідні | Абрикос'}, 
        {name: 'Вишня', category: 'Плодово-ягідні | Вишня'},
        {name: 'Горіхи', category: 'Плодово-ягідні | Горіхи'},
        {name: 'Груші', category: 'Плодово-ягідні | Груші'},
        {name: 'Ківі', category: 'Плодово-ягідні | Ківі'},
        {name: 'Персик', category: 'Плодово-ягідні | Персик'},
        {name: 'Сливи', category: 'Плодово-ягідні | Сливи'},
        {name: 'Черешні', category: 'Плодово-ягідні | Черешні'},
        {name: 'Шовковиця', category: 'Плодово-ягідні | Шовковиця'},
        {name: 'Яблуні', category: 'Плодово-ягідні | Яблуні'},
        {name: "Яблуня (рожева м'якоть)", category: "Плодово-ягідні | Яблуня (рожева м'якоть)"}
    ];

    const troyandy = [
        {name: 'Всі', category: 'Троянди'}, 
        {name: 'Англійські троянди', category: 'Троянди | Англійські троянди'},
        {name: 'Бордюрні', category: 'Троянди | Бордюрні'},
        {name: 'Грунтопокривні', category: 'Троянди | Грунтопокривні'},
        {name: 'Мініатюрні(капелька)', category: 'Троянди | Мініатюрні(капелька)'},
        {name: 'Паркові', category: 'Троянди | Паркові'},
        {name: 'Плетисті', category: 'Троянди | Плетисті'},
        {name: 'Троянди (в контейнері)', category: 'Троянди | Троянди (в контейнері)'},
        {name: 'Чайногібридні', category: 'Троянди | Чайногібридні'},
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