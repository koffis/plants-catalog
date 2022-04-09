import http from '../../http';

export const buyGoods = (payload) => http.post('http://194.187.154.148:8080/api/v1/offer', { data: payload });
