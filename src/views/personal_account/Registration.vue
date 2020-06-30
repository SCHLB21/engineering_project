<template>
    <div class="content">
        <div class="registration">
            <h1 class="registration__headline">Регистрация</h1>
            <form>
                <label for="">Придумайте никнейм</label>
                <input 
                v-model="member_name"
                type="text" 
                id="login"
                >
                <label for="">Придумайте пароль</label>
                <input 
                v-model="member_password" 
                type="password" 
                id="password"
                >
                <button type="button" v-on:click="registration();">Зарегестрироваться</button>
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
    methods:{
        registration: function(){
            if(this.member_name!='' && this.member_password!=''){
                const member_id = Math.random().toString(36).substr(2, 12);
                const member_name = this.member_name;
                const member_password = this.member_password;
                const member_status = 'member';
                db.collection('members').add({member_id, member_name, member_password, member_status});
                window.location.href = '#/';
                alert('Регистрация прошла успешно!')
            }else{
                alert('Введите корректные данные!')
            }
            
        }
    }
}
</script>

