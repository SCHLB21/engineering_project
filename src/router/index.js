import Vue from 'vue';
import Router from 'vue-router';
import Questions from '../views/Questions';

Vue.use(Router);

export default new Router({
    routes:[
        {
        path:'/questions',
        name: 'Questions',
        component: Questions
    }
    ]
})