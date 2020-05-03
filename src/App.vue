<template>
  <div id="app">
    <header-component />
    <div class="city-links__wrapper">
      <router-link
        to="/"
        class="city-link">Moscow</router-link>
      <router-link
        to="/spb"
        class="city-link">Saint Petersburg</router-link>
      <router-link
        to="/kyiv"
        class="city-link">Kyiv</router-link>
    </div>
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';

export default {
    name : 'App',

    components : {
        HeaderComponent,
        FooterComponent,
    },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.city-links__wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 480px;
    margin: 0 auto;
}

.city-link {
    margin-bottom: 12px;
    margin-right: 36px;
}

.router-link-exact-active {
    font-weight: bold;
}

</style>
