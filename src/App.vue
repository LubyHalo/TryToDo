<template>
   <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-leaf"></i>
          Luby
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/note">笔记</router-link></li>
          <li><router-link to="/time-entries">照片</router-link></li>
        </ul>
        <ul class="nav navbar-nav set-nav-left">
          <li><router-link to="/note">关于</router-link></li>
          <li class="header-nav-avatar"><router-link to="/time-entries"><img src="./assets/icon-avatar.jpg"></router-link></li>
        </ul>
      </div>
    </nav>
    <header-intro></header-intro>
        <!-- <router-view></router-view> -->
        <trends-list></trends-list>
  </div>
</template>

<script>
import HeaderIntro from './components/HeaderIntro.vue'
import TrendsList from './components/TrendsList.vue'

export default {
  name: 'app',
  components: {'header-intro':HeaderIntro,'trends-list':TrendsList}
}
</script>

<style>
@import '/static/css/header-nav.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
