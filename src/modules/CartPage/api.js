import http from '../../http';

export const buyGoods = (payload) => http.post('https://api.greengarden.org.ua/api/v1/offer', { data: payload });
