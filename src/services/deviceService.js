import axios from 'axios';

const API_URL = 'http://localhost:8080/api/devices';

export const getDevices = async () => {
    try {
        const response = await axios.get(`${API_URL}/get`);
        console.log('Odpowiedź z serwera:', response.data);
        return response.data;
    } catch (error) {
        console.error('Błąd przy pobieraniu urządzeń:', error);
        return [];
    }
};
