<script setup>
defineProps({
  activeSection: String,
  hidden: Boolean
})
const emit = defineEmits(['scrolledToHeader'])
const links = [
  { text: 'me', icn: ['fas', 'user-astronaut'] },
  { text: 'experience', icn: ['fas', 'briefcase'] },
  { text: 'projects', icn: ['fas', 'toolbox'] },
  { text: 'connect', icn: ['fas', 'phone'] }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  emit('scrolledToHeader', sectionId)
};


</script>
<template>
    <header  :class="{ 'hidden': hidden }">
        <nav>
            <a v-for="(link, idx) in links" :key="idx" :class="{ 'active': activeSection === link.text }" @click="scrollToSection(link.text)">
                <my-icon :icon="link.icn" class="icon"/></a>
        </nav>
        <h2>{{ activeSection }}</h2>
    </header>
</template>
<style scoped>

h2 {
    padding-right: 30px;
    color: var(--secondary);
    font-family: 'Ubuntu';
    text-rendering: optimizeLegibility;
    font-style: italic;
    text-transform: capitalize;
    align-self: flex-end;
    padding-bottom: 12px;
    padding-right: 30px;
}
.hidden {
  transform: translateY(-100%);
}
.icon {
    font-size: 20px;
    color: var(--secondary);

}
header {
    /* border: 1px solid red; */
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 60px;
    display: none;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    background-color: #43766cab;
    transition: all 0.3s ease-in-out;
    backdrop-filter: blur(5px);
    z-index: 1;
}
nav {
    display: flex;
    flex-flow: row wrap;
    font-size: 15px;
    justify-content: space-evenly;
    /* gap: 25px; */
    padding-left: 20px;
    align-items: center;
    align-self: flex-end;
}
nav a {
    display: flex;
    align-items: center;
    padding: 12px;
    border-color: var(--secondary);
    transition: border 0.3s ease-in-out;
}
.active {
    border: 2px solid var(--secondary);
    border-bottom: none;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
}
.menu {
    display: none;
}
@media screen and (max-width: 900px) {
    header {
        display: flex;
    }
    
}
</style>