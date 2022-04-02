import http from '../../http';
import { API_V1_URL } from "../../constants/constants";


const EQUIPMENT_URL = `${API_V1_URL}/equipment`;
const authHeader = { Authorization: `Bearer ${localStorage.getItem("id_token")}` };


export const getEquipment = () => http.get(EQUIPMENT_URL, {}, authHeader);
