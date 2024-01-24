<script setup>
import AboutView from '@/views/AboutView.vue';
import HeroView from '@/views/HeroView.vue';
import ExperienceView from '@/views/ExperienceView.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ProjectView from '@/views/ProjectView.vue';
import ContactView from '@/views/ContactView.vue';
import MyHeader from '@/components/MyHeader.vue';

const activeSection = ref("me")
const bodyRef = ref(null)
const appRef = ref(null)
const headerHidden = ref(false);
const lastScrollTop = ref(0);
const sections = ['me', 'experience', 'projects', 'connect']

/**
 * handle navigation and scrolling
 */
const scrolledToEvent = (section) => {
  activeSection.value = section
}
 const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2.5;
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
const handleHeaderScroll = () => {
  if (appRef.value === null) return;
  const scrollTop = appRef.value.scrollTop;
  if (scrollTop > lastScrollTop.value) {
    // Scrolling down
    headerHidden.value = true;
  } else {
    // Scrolling up
    headerHidden.value = false;
  }
  lastScrollTop.value = scrollTop;
}

onMounted(() => {
  bodyRef.value.addEventListener('scroll', handleScroll);
});
onMounted(() => {
  appRef.value.addEventListener('scroll', handleScroll);
  appRef.value.addEventListener('scroll', handleHeaderScroll);
});
onBeforeUnmount(() => {
  bodyRef.value.removeEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  appRef.value.removeEventListener('scroll', handleScroll);
  appRef.value.removeEventListener('scroll', handleHeaderScroll);
});
</script>

<template>
  <div id="app" ref="appRef">
    <MyHeader
    :activeSection="activeSection"
    :hidden="headerHidden"
    @scrolled-to-header="scrolledToEvent"/>
    <HeroView
    :activeSection="activeSection"
    @scrolled-to="scrolledToEvent"/>
    <span class="divider"></span>
    <div class="body" ref="bodyRef">
      <AboutView/>
      <ExperienceView/>
      <ProjectView/>
      <ContactView/>
    </div>
  </div>
</template>

<style scoped>
#app {
  display: grid;
  grid-template-columns: 400px 15px calc(100vw - 415px);
  grid-template-rows: auto  auto;
  width: 100vw;
  background-color: var(--secondary);
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
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
  gap: 20px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-content: flex-start;
  padding-bottom: 150px;
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
