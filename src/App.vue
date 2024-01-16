<script setup>
import MyHeader from './components/MyHeader.vue';
import AboutView from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';
import HeroView from './views/HeroView.vue';
</script>

<template>
  <div id="app">
    <HeroView/>
    <span class="divider"></span>
    <div class="body">
      
    </div>
  </div>
</template>

<style scoped>
#app {
  display: grid;
  grid-template-columns: 500px 15px auto;
  grid-template-rows: auto  auto;
  width: 100vw;
  background-color: var(--secondary);
  height: 100vh;
}
.divider {
  height: 80vh;
  border-right: 1px solid var(--primary);
  grid-row: 1 / span 2;
  align-self: center;

}
.body {
  position: absolute;
  top: 60px;
  border: 1px solid green;

}

</style>
