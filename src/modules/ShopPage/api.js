import http from '../../http';
import { SERVER_URL } from '../../config';

export const getAllItems = (params) => http.get(`${SERVER_URL}/api/v1/shop`, {params : { ...params }});
