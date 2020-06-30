<template>
    <div class="content">
        <div class="login">
            <h1 class="login__headline">Вход</h1>
            <form action="/#">
                <label for="login">Введите логин</label>
                <input 
                v-model="member_name"
                type="text" 
                id="login"
                >
                <label for="password">Введите пароль</label>
                <input 
                v-model="member_password" 
                type="password" 
                id="password"
                >
                <button v-on:click="login(members);">Войти</button>
            </form>
        </div>
    </div>
</template>

<script>
import { db } from '../../firebase'
export default {
    data(){
        return{
            members: [],
            member_name: '',
            member_password: ''

        }
    },
    firestore(){
        return{
            members:db.collection('members').orderBy('member_name')
        }
    },
    methods: {
        login: function(members){
            for(let i=0;i<members.length;i++){
                if(members.member_name==this.member_name && members.member_password==this.member_password){
                    window.location.href = '#/';
                }
            }
            console.log(members)
        }
    }
}
</script>

