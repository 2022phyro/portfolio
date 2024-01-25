<script setup>
import TypeWriter from '@/components/TypeWriter.vue'
defineProps({
  activeSection: String
})
const links = [
  { text: 'me', icn: ['fas', 'user-astronaut'] },
  { text: 'experience', icn: ['fas', 'briefcase'] },
  { text: 'projects', icn: ['fas', 'toolbox'] },
  { text: 'connect', icn: ['fas', 'phone'] }
]

// const activeSection = ref('me')
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};



</script>
<template>
  <section class="hero">
    <h1>Ugwuanyi Afam</h1>
    <TypeWriter />
    <div class="navigation">
      <div class="nav">
        <img src="/chameleon.jpg" />
        <div
          v-for="(link, idx) in links"
          :key="idx"
          :class="{ 'active': activeSection === link.text, 'round': true, ['n-' + idx]: true }"
          @click="scrollToSection(link.text)"
        >
          <span class="icon"><my-icon :icon="link.icn"></my-icon></span>
          <span>{{ link.text }}</span>
        </div>
      </div>
      <div class="aob">
        <a href="/resume.txt" class="button">
          <my-icon :icon="['far', 'file-lines']" />
          <span>My resume</span>
        </a>
        <a href="https://github.com/2022phyro" class="button">
          <my-icon :icon="['fas', 'folder-open']" />
          <span>My projects</span>
        </a>
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero {
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  padding-left: 50px;
  /* position: fixed; */
  top: 0;
  /* width: 500px; */
  padding-top: 30px;
  display: flex;
  flex-flow: column;

  color: var(--primary);
}
h1 {
  font-size: 32px;
  font-weight: 800;
}
.navigation {
  display: flex;
  flex-flow: row wrap;
  /* justify-content: center; */
  align-items: center;
  margin-top: 30px;
  gap: 30px;
}
.nav {
  margin-top: 30px;
  display: grid;
  grid-template-columns: 50px 50px 50px 50px 15px 50px;
  grid-template-rows: 80px 75px 75px 80px;
}
.nav img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  grid-row: 1 / span 4;
  grid-column: 1 / 3;
  align-self: center;
  justify-self: start;
}
.round {
  font-size: 30px;
  display: flex;
  flex-flow: row;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  z-index: 1;
  cursor: pointer;
  opacity: 0.5;
  transition: all 1s ease-in-out;
}
.round span {
  font-size: 17px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: rgba(51, 50, 50, 0.719);
  text-transform: capitalize;
}
.round span.icon {
  background-color: rgba(51, 50, 50, 0.719);
  width: 40px;
  height: 40px;
  vertical-align: center;
  font-size: 30px;
  color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 50%;  
  border-bottom-left-radius: 50%;
}
.round.n-2 span.icon,
.round.n-3 span.icon {
  border-top-right-radius: 0px;  
  border-bottom-left-radius: 0px;
  border-top-left-radius: 50%;  
  border-bottom-right-radius: 50%;
}
.icon svg {
  font-size: 22px;
  color: var(--secondary);
}
.n-0 {
  grid-row: 1 / span 1;
  grid-column: 4 / span 1;
  align-self: start;
  justify-self: end;
}
.n-1 {
  grid-row: 2 / span 1;
  grid-column: 6 / span 1;
  align-self: start;
  justify-self: start; 
}
.n-2 {
  grid-row: 3 / span 1;
  grid-column: 6 / span 1;
  align-self: end;
  justify-self: start;
}
.n-3 {
  grid-row: 4 / span 1;
  grid-column: 4 / span 1;
  align-self: end;
  justify-self: start;
}
a {
  text-decoration: none;
  color: inherit;
  /* padding: 3px; */
}

div.active.round {
    opacity: 1;
}
div.active.round .icon {
  background-color: var(--primary);
}
div.active.round span {
  color: var(--primary);
  font-weight: 800;
  font-size: 18px;
}
.aob {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
}
.aob > .button {
  height: 40px;
  width: 150px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  outline: none;
  background: var(--primary);
  border: none;
  color: var(--secondary);
  font-weight: 800;
  display: flex;
  flex-flow: row;
  gap: 10px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 2px 2px 2px grey;
  align-items: center;
  justify-content: flex-start;
  padding-left: 13px;
  position: relative;
  transition: all 0.3s ease;
}
.aob > .button:active {
  right: -1px;
  bottom: -1px;
}
.aob > .button svg {
  font-size: 20px;
}
@media screen and (max-width: 950px) {
  .hero {
    padding-left: 20px;
  }
}
@media screen and (max-width: 900px) {
  .hero {
    display: flex;
    margin-top: 60px;
    flex-flow: column;
  }
  .navigation {
    justify-content: center;
    gap: 20px;
  }
  .nav {
    justify-self: center;
    /* border: 1px solid green; */
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }
  .nav .round {
    display: none;
  }
}
@media screen and (max-width: 470px) {
  .aob {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    gap: 15px;
    margin-right: 20px;
  }
  .aob > .button:first-child {
    grid-row: 1;
    grid-column: 1;
    align-self: center;
  }
  .aob > .button:last-child {
    grid-column: 1;
    grid-row: 2;
    justify-self: end;
    align-self: center;
  }
}
@media screen and (max-width: 410px) {
  .aob {
    margin-top: 0;
  }
}
</style>
