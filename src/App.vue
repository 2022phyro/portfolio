<script setup>
import AboutView from '@/views/AboutView.vue';
import HeroView from './views/HeroView.vue';
import ExperienceView from './views/ExperienceView.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ProjectView from './views/ProjectView.vue';

const activeSection = ref("me")
const bodyRef = ref(null)
const sections = ['me', 'experience', 'projects', 'connect']

/**
 * handle navigation and scrolling
 */
const scrolledToEvent = (section) => {
  activeSection.value = section
}
 const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 3;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();

      // Check if the center of the section is within the viewport
      if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
        activeSection.value = section;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  bodyRef.value.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  bodyRef.value.removeEventListener('scroll', handleScroll);

});
</script>

<template>
  <div id="app">
    <HeroView
    :activeSection="activeSection"
    @scrolled-to="scrolledToEvent"/>
    <span class="divider"></span>
    <div class="body" ref="bodyRef">
      <AboutView/>
      <ExperienceView/>
      <ProjectView/>
    </div>
  </div>
</template>

<style scoped>
#app {
  display: grid;
  grid-template-columns: 500px 15px calc(100vw - 515px);
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
  width: auto;
  padding: 0 30px;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-content: flex-start;
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
  .body {
    overflow: visible;
  }
}
</style>
