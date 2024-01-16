<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
const isOpen = ref(true)
const toggleMenu = () => {
    if (window.innerWidth <= 600) {
        isOpen.value = !isOpen.value;
    } else {
        isOpen.value = true;
    }
}
onMounted(() => {
    window.addEventListener('resize', toggleMenu);
});

onUnmounted(() => {
    window.removeEventListener('resize', toggleMenu);
});
</script>
<template>
    <header>
        <img class="logo" src="/chameleon.jpg">
        <my-icon :icon="['fas', isOpen? 'xmark': 'bars']" class="menu" @click="toggleMenu" />
        <nav v-if="isOpen">
            <RouterLink to="/"><my-icon :icon="['fas', 'igloo']" />Home</RouterLink>
            <RouterLink to="/#about"><my-icon :icon="['fas', 'user-astronaut']" />About</RouterLink>
            <RouterLink to="/projects"><my-icon :icon="['fas', 'diagram-project']" />Projects</RouterLink>
            <RouterLink to="/resume"><my-icon :icon="['far', 'file']" />Resume</RouterLink>
            <RouterLink to="/contact"><my-icon :icon="['fas', 'link']" />Connect</RouterLink>
        </nav>
    </header>
</template>
<style scoped>
.logo {
    width: 60px;
    border-radius: 10px;
}
header {
    border: 1px solid red;
    position: fixed;
    padding: 0 30px;
    top: 0;
    width: 100vw;
    min-height: 60px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    background-color: var(--secondary);
    backdrop-filter: blur(5px);
    z-index: 1;
}
nav {
    display: flex;
    flex-flow: row wrap;
    font-size: 15px;
    justify-content: space-evenly;
    gap: 25px;
    align-items: center;
}
nav a.router-link-active.router-link-exact-active {
    /* display: none; */
}
nav a {
    display: flex;
    gap: 4px;
    align-items: center;
}
.menu {
    display: none;
}
@media screen and (max-width: 600px) {
    .menu {
        display: block;
        position: absolute;
        right: 30px;
        top: 20px;
        font-size: 24px;
    }
    header {
        flex-flow: column;
        align-items: flex-start;
        justify-content: center;
        padding: 10px 30px;
    }
    nav {
        flex-flow: column wrap;
        gap: 5px;
        width: calc(100% - 30px);
        padding: 20px 0;
    }
    nav a {
        width: 100%;
        border-color: #ccc;
        padding: 3px 0;
        gap: 7px;

    }
    
}
</style>