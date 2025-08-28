// src/shared/api/axios-instance.js
import { getCookie } from '@/shared/helper/Cookies';
import axios from 'axios';

// Create base instance
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL?.endsWith('/')
        ? process.env.NEXT_PUBLIC_API_URL.slice(0, -1)
        : process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        // 'ngrok-skip-browser-warning': true, // Uncomment if needed
    },
});

// Request interceptor for auth token
axiosInstance.interceptors.request.use(async (config) => {
    try {
        const cookie = await getCookie(process.env.NEXT_PUBLIC_ACCESS_TOKEN) || {};
        if (cookie?.value) {
            const parsedValue = JSON.parse(cookie.value);
            if (parsedValue?.token) {
                config.headers.Authorization = `Bearer ${parsedValue.token}`;
            }
        }
    } catch (error) {
        console.error('Error setting auth token:', error);
        // Optional: Redirect to login if token is invalid
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle common errors (401, 403, 500 etc.)
        if (error.response?.status === 401) {
            // Handle unauthorized access
            console.error('Unauthorized access - redirect to login');
            // window.location.href = '/login'; // Uncomment if needed
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;