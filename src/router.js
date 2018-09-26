import Vue from 'vue';
import Router from 'vue-router';
import About from './components/About';
import PostSection from './components/PostSection';
Vue.use(Router);
export default new Router({
    routes: [{
        path: '/',
        name: 'posts',
        component: PostSection
    }, {
        path: '/about',
        name: 'about',
        component: About 
    }]
})
