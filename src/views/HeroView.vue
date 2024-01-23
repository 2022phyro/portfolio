<script setup>
import TypeWriter from '@/components/TypeWriter.vue'

defineProps({
  activeSection: String
})
const emit = defineEmits(['scrolledTo'])
const links = [
  { text: 'me', icn: ['fas', 'user-astronaut'] },
  { text: 'experience', icn: ['fas', 'user-astronaut'] },
  { text: 'projects', icn: ['fas', 'user-astronaut'] },
  { text: 'connect', icn: ['fas', 'user-astronaut'] }
]

// const activeSection = ref('me')
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    emit('scrolledTo', sectionId)
    // activeSection.value = sectionId;
  }
};



</script>
<template>
  <section class="hero">
    <h1>Ugwuanyi Afam</h1>
    <TypeWriter />
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
      <button>
        <my-icon :icon="['far', 'file-lines']" />
        <span>View my resume</span>
      </button>
      <button>
        <my-icon :icon="['fas', 'folder-open']" />
        <span>See other projects</span>
      </button>
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
.nav {
  margin-top: 30px;
  display: grid;
  grid-template-columns: 75px 75px 75px 75px 15px 75px;
  grid-template-rows: 100px 75px 75px 100px;
}
.nav img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  grid-row: 1 / span 4;
  grid-column: 1 / span 3;
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
  transition: all 0.5s ease-in-out;
}
.round span {
  font-size: 16px;
  font-family: 'Ubuntu';
  font-weight: 600;
  color: rgb(51, 50, 50);
  text-transform: capitalize;
}
.icon {
  background-color: rgb(51, 50, 50);
  width: 40px;
  height: 40px;
  vertical-align: center;
  border-radius: 50%;
  font-size: 30px;
  color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon svg {
  font-size: 28px;
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
  /* border: 3px solid blue; */
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
}
.aob {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
}
.aob > button {
  height: 40px;
  width: 200px;
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
  align-items: center;
  justify-content: flex-start;
  padding-left: 13px;
  box-shadow: 1px 1px 1px #ccc;
}
.aob > button svg {
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
    flex-flow: column;
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
  .aob > button:first-child {
    grid-row: 1;
    grid-column: 1;
    align-self: center;
  }
  .aob > button:last-child {
    grid-column: 1;
    grid-row: 2;
    justify-self: end;
    align-self: center;
  }
}
</style>
