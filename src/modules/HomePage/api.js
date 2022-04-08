import http from '../../http';

export const getHomeData = () => http.get('https://api.greengarden.org.ua/api/v1/home', {});
