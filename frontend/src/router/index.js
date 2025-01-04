// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/Login.vue';
import DashboardPage from '../components/Dashboard.vue';

const routes = [
    { 
        path: '/',
        name: "Login",
        component: LoginPage
    },
    { 
        path: '/dashboard', 
        component: DashboardPage 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;