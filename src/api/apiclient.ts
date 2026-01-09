import axios from 'axios';

/**
 * BASE_URL Configuration:
 * 
 * We use 'http://localhost:4000/api/v1/' for stability.
 * IMPORTANT: To make this work on a physical Android device:
 * 1. Keep the phone connected via USB.
 * 2. Run: adb reverse tcp:4000 tcp:4000
 */

const BASE_URL = 'http://localhost:4000/api/v1/';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;