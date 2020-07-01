<template>
    <div class="content">
        <div class="login">
            <h1 class="login__headline">Вход</h1>
            <form>
                <label for="login">Введите логин</label>
                <input 
                v-model="member_name"
                type="text" 
                id="login"
                placeholder="Логин"
                >
                <label for="password">Введите пароль</label>
                <input 
                v-model="member_password" 
                type="password" 
                id="password"
                placeholder="Пароль"
                >
                <button type="button" v-on:click="login(members);">Войти</button>
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
                if(members[i].member_name==this.member_name && members[i].member_password==this.member_password){
                    window.location.href = '#/';
                    sessionStorage['member_name'] = members[i].member_name;
                    sessionStorage['member_id'] = members[i].member_id;
                    sessionStorage['member_status'] = members[i].member_status;
                    alert('Вход выполнен успешно!')
                }
            }
            if(!sessionStorage['member_id']){
                alert('Данные введены неверно')
            }
        }
    }
}
</script>

