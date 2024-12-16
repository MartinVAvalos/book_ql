import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '@/components/dashboard/Dashboard.vue';
import FormAppointment from './appointment/FormAppointment.vue';



const routes: RouteRecordRaw[] = [
  { path: '/', component: Dashboard},
  { path: '/appointment', component: FormAppointment},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

