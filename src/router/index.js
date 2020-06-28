import Vue from 'vue';
import Router from 'vue-router';
import Questions from '../views/Questions';
import Marks from '../views/Marks';
import Members from '../views/Members';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '*',
            redirect: '/questions'
        },
        {
        path: '/questions',
        name: 'Questions',
        component: Questions
        },
        {
            path: '/members',
            name: 'Members',
            component: Members
        },
        {
            path: '/marks',
            name: 'Marks',
            component: Marks
        }

    ]
})