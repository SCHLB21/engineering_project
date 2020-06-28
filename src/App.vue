<template>
  <div>
    <site-header></site-header>
    <main class="main page__main">
        <div class="container main-wrap">
            <nav class="navbar-menu">
                <div class="navbar-menu__element"><a href="#/questions">Вопросы</a></div>
                <div class="navbar-menu__element"><a href="#/marks">Метки</a></div>
                <div class="navbar-menu__element"><a href="#/members">Участники</a></div>
            </nav>
            <router-view></router-view>
            <!-- /.content -->
        </div>
    </main>
  </div>
</template>

<script>
  import SiteHeader from './components/Header.vue'
export default {
  components: {
    SiteHeader
  }
}
</script>

