import Vue from 'vue';
import Router from 'vue-router';
import Questions from '../views/Questions';
import Marks from '../views/Marks';
import Members from '../views/Members';
import Question from '../views/Question';
import Login from '../views/personal_account/login';
import Registration from '../views/personal_account/registration';

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
        },
        {
            path: '/question/:id',
            name: 'Question',
            component: Question
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/registration',
            name: 'Registration',
            component: Registration
        }
    ]
})