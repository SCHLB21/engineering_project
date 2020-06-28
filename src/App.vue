<template>
  <div>
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
                <button class="personal-account__button">Войти</button> 
                <!-- /.personal-account__button -->
                <button class="personal-account__button">Регистрация</button> 
                <!-- /.personal-account__button -->
            </div>
            <!-- /.header__personal-account -->
        </div>
    </header>
    <main class="main page__main">
        <div class="container main-wrap">
            <nav class="navbar-menu">
                <div class="navbar-menu__element"><a href="#/questions">Вопросы</a></div>
                <div class="navbar-menu__element"><a href="#">Метки</a></div>
                <div class="navbar-menu__element"><a href="#">Участники</a></div>
            </nav>
            <router-view></router-view>
            <!-- /.content -->
        </div>
    </main>
  </div>
</template>

<script>
export default {
  
}
</script>

