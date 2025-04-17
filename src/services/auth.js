// src/services/auth.js
import axios from 'axios';


axios.defaults.withCredentials = true;

export async function loginUser(credentials) {

    const response = await axios.post('http://localhost:8080/api/auth/signin', credentials);

    console.log(response.data);
    return response.data;
}

export async function getCurrentUser() {
    try {

        const response = await axios.get('http://localhost:8080/api/auth/current-user');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Brak zalogowanego użytkownika lub błąd pobierania danych:", error);
        return null;
    }
}

export async function logoutUser() {
    try {
        await fetch('http://localhost:8080/api/auth/logout', {
            method: 'POST',
            credentials: 'include'
        });
    } catch (error) {
        console.error('Błąd przy wylogowaniu:', error);
    }
}
