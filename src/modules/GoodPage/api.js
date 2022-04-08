import http from '../../http';

export const getGood = (code) => http.get(`https://api.greengarden.org.ua/api/v1/goods/${code}`, {});
