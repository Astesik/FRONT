// src/services/auth.js
import axios from 'axios';

// Konfigurujemy axios do wysyłania ciasteczek
axios.defaults.withCredentials = true;

export async function loginUser(credentials) {
    // Po poprawnym logowaniu serwer ustawi ciasteczko HTTP Only
    const response = await axios.post('http://localhost:8080/api/auth/signin', credentials);
    // Odpowiedź zawiera również dane użytkownika – opcjonalnie możesz je zwrócić
    console.log(response.data);
    return response.data;
}

export async function getCurrentUser() {
    try {
        // Żądanie do endpointa, który odczytuje ciasteczko i zwraca dane użytkownika
        const response = await axios.get('http://localhost:8080/api/auth/current-user');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Brak zalogowanego użytkownika lub błąd pobierania danych:", error);
        return null;
    }
}

export async function logoutUser() {
    // Wylogowywanie – serwer powinien usunąć ciasteczko
    await axios.post('http://localhost:8080/api/auth/logout');
}
