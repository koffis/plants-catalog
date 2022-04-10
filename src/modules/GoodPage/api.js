import http from '../../http';
import { SERVER_URL } from '../../config';

export const getGood = (code) => http.get(`${SERVER_URL}/api/v1/goods/${code}`, {});
