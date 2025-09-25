import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '@/components/dashboard/Dashboard.vue';
import User from './user/User.vue';
import LibraryUI from '@/components/library_ui/libraryUI.vue';
import AboutUs from '@/components/aboutus/aboutUs.vue';


const routes: RouteRecordRaw[] = [
  { path: '/', component: LibraryUI },
  { path: '/dashboard', component: Dashboard },
  { path: '/user', component: User },
  { path: '/aboutus', component: AboutUs },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

