<template>
    <header class="header page__header">
        <div class="container header-wrap">
            <div class="header__logo">
                <img src="img/logo.png" alt="" class="header__logo-img">
                <span class="header__logo-span">The Answers</span> 
                <!-- /.header__logo-span -->
            </div>
            <!-- /.header__logo -->
            <div class="header__search">
                <input type="text" name="search" id="search" placeholder="Поиск ">
            </div>
            <!-- header__search -->
            <div class="header__personal-account">
                <button class="personal-account__button" v-if="checkLogin()"><router-link to="/login">Войти</router-link></button> 
                <!-- /.personal-account__button -->
                <button class="personal-account__button" v-if="checkLogin()"><router-link to="/registration">Регистрация</router-link></button> 
                <!-- /.personal-account__button -->
                <button class="personal-account__button" v-if="checkLogout()">{{ member_name }}</button>
            </div>
            <!-- /.header__personal-account -->
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        checkLogin: function(){
            if(sessionStorage['member_id']){
                return false
            }else{
                return true
            }
        },
        checkLogout: function(){
            if(sessionStorage['member_id']){
                return true
            }else{
                return false
            }
        }
    },
    computed: {
        member_name(){
            return sessionStorage['member_name']
        }
    }
}
</script>

