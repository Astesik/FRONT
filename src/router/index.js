// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import EmployeePanel from '../views/EmployeePanel.vue';
import Unauthorized from '../views/Unauthorized.vue';
import { getCurrentUser } from '../services/auth';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    {
        path: '/employee-panel',
        name: 'EmployeePanel',
        component: EmployeePanel,
        meta: {
            requiresAuth: true,
            roles: ['ROLE_ADMIN', 'ROLE_SERVICE']  // Przykładowe role dozwolone do panelu
        }
    },
    {
        path: '/unauthorized',
        name: 'Unauthorized',
        component: Unauthorized
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Globalny router guard
router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth) {
        // Pobieramy bieżącego użytkownika na podstawie ciasteczka
        const user = await getCurrentUser();
        if (!user) {
            return next({ name: 'Login' });
        }
        // Jeżeli trasa wymaga określonych ról, sprawdzamy je
        if (to.meta.roles && !to.meta.roles.some(role => user.roles.includes(role))) {
            return next({ name: 'Unauthorized' });
        }
    }
    next();
});

export default router;
