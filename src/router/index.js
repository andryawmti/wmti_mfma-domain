import { createRouter, createWebHistory } from "vue-router";

import Index from '@/pages/Index.vue';
import DnsManagement from '@/pages/DnsManagement.vue';

const routes = [
    {
        path: '',
        name: 'Index',
        component: Index
    },
    {
        path: '/dns-management',
        name: 'DnsManagement',
        component: DnsManagement
    },
]

const router = createRouter({
    history: createWebHistory('/domain'),
    routes
})

export default router
