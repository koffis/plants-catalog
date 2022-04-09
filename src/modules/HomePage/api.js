import http from '../../http';

export const getHomeData = () => http.get('http://194.187.154.148:8080/api/v1/home', {});
