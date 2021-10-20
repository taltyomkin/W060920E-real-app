import http from  './httpService';
import {apiUrl} from '../config.json';

export function createCard(card) {
    return http.post(`${apiUrl}/cards`, card)
}

export function getMyCard() {
    return http.get(`${apiUrl}/cards/my-cards`);
}

export default {
    createCard,
    getMyCard,
};