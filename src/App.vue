<script setup>
// import MyHeader from './components/MyHeader.vue';
import AboutView from '@/views/AboutView.vue';
import HeroView from './views/HeroView.vue';
import ExperienceView from './views/ExperienceView.vue';
</script>

<template>
  <div id="app">
    <HeroView/>
    <span class="divider"></span>
    <div class="body">
      <AboutView/>
      <ExperienceView/>
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
  grid-column: 3;
  grid-row: 1 / span 2;
  /* border: 1px solid red; */
  margin: 0 30px;

}
@media screen and (max-width: 900px) {
  #app {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-content: flex-start;
  }
  .divider {
    display: none;
  }
}
</style>
