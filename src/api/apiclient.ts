import axios from 'axios';
import { Platform } from 'react-native';

// Using ADB reverse proxy: adb reverse tcp:4000 tcp:4000
// This allows Android emulator to access localhost:4000 on the host machine
// For iOS Simulator: localhost works fine
// For Physical Device: Use adb reverse or replace with your computer's IP address
const BASE_URL = 'http://localhost:4000/api/v1/';

const api = axios.create({
    baseURL: BASE_URL, 
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptor for debugging
api.interceptors.request.use(
    (config) => {
        console.log('🚀 API Request:', config.method?.toUpperCase(), config.url);
        console.log('📦 Request Data:', config.data);
        return config;
    },
    (error) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
    }
);

// Add response interceptor for debugging
api.interceptors.response.use(
    (response) => {
        console.log('✅ API Response:', response.config.url, response.status);
        return response;
    },
    (error) => {
        console.error('❌ API Error:', error.config?.url, error.message);
        if (error.response) {
            console.error('📛 Status Code:', error.response.status);
            console.error('📛 Error Response:', error.response.data);
        } else if (error.request) {
            console.error('📛 No Response Received:', error.request);
        }
        return Promise.reject(error);
    }
);

export default api;