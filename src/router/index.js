// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import EmployeePanel from '../views/EmployeePanel.vue';
import DeviceAdmin from '../views/DeviceAdmin.vue';
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
            roles: ['ROLE_ADMIN', 'ROLE_SERVICE']
        }
    },
    {
      path: '/devices',
      name: 'Devices',
      component: DeviceAdmin,
      meta: {
          requiresAuth: true,
          roles: ['ROLE_ADMIN']
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


router.beforeEach(async (to, from, next) => {
    const user = await getCurrentUser();

    if (to.name === 'Login' && user) {
        return next({ name: 'Home' });
    }

    if (to.meta.requiresAuth) {
        if (!user) {
            return next({ name: 'Login' });
        }
        if (to.meta.roles && !to.meta.roles.some(role => user.roles.includes(role))) {
            return next({ name: 'Unauthorized' });
        }
    }
    next();
});

export default router;
