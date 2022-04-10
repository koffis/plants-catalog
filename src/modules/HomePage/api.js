import http from '../../http';
import { SERVER_URL } from '../../config';

export const getHomeData = () => http.get(`${SERVER_URL}/api/v1/home`, {});
