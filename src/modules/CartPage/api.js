import http from '../../http';
import { SERVER_URL } from '../../config';

export const buyGoods = (payload) => http.post(`${SERVER_URL}/api/v1/offer`, { data: payload });
