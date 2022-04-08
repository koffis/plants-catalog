import http from '../../http';

export const getAllItems = (params) => http.get('https://api.greengarden.org.ua/api/v1/shop', {params : { ...params }});
