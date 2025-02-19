import Vue from 'vue'
import VueRouter from 'vue-router';

import wMonitor from '@/components/apps/monitor'
import wConfig from '@/components/apps/config'
import wcontrol from '@/components/apps/control'

Vue.use(VueRouter);

const routes = [
    {path:'/', redirect:'/monitor'},
    {path:'/monitor',component:wMonitor},
    {path:'/config',component:wConfig},
    {path:'/control',component:wcontrol}
];


const router = new VueRouter({
    routes
});


export default router;