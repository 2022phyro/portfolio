<script setup>
import TypeWriter from '@/components/TypeWriter.vue'
const links = [
    {text: 'me', icn: ['fas', 'user-astronaut']},
    {text: 'experience', icn: ['fas', 'user-astronaut']},
    {text: 'projects', icn: ['fas', 'user-astronaut']},
    {text: 'connect', icn: ['fas', 'user-astronaut']},
]
</script>
<template>
    <section class="hero">
        <h1>Ugwuanyi Afam</h1>
        <TypeWriter/>
        <div class="nav">
            <img src="/chameleon.jpg">
            <router-link v-for="(link, idx) in links" :key="idx" :class="`round n-${idx}`" :to="`#${link.text}`">
                <span class="icon"><my-icon :icon="link.icn"></my-icon></span>
                <span>{{ link.text }}</span>
            </router-link>           
        </div>
        <div class="aob">
            <button>
                <my-icon :icon="['far', 'file-lines']"/>
                <span>View my resume</span>
            </button>
            <button>
                <my-icon :icon="['fas', 'folder-open']"/>
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
    padding-top: 30px;
    /* border: 1px solid red; */
    align-self: stretch;
    color: var(--primary);
}
h1 {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 15px;
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
    gap: 5px;
    background-color: transparent;
    /* border: 1px solid red; */
}
.round span {
    font-size: 16px;
    font-family: 'Space Grotesk';
    font-weight: 600;
    text-transform: capitalize;
    opacity: 0.5;
}
.icon {
    background-color: var(--primary);
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
.active {
    opacity: 1;
}
.n-0 {
    grid-row: 1 / span 1;
    grid-column: 4  / span 1;
    align-self: start;
    justify-self: end;
}
.n-1 {
    grid-row: 2 / span 1;
    grid-column: 6  / span 1;
    align-self: start;
    justify-self: start;
}
.n-2 {
    grid-row: 3 / span 1;
    grid-column: 6  / span 1;
    align-self: end;
    justify-self: start;
}
.n-3 {
    grid-row: 4 / span 1;
    grid-column: 4  / span 1;
    align-self: end;
    justify-self: start;
    /* border: 3px solid blue; */
}
a {
  text-decoration: none;
  color: inherit;
  /* padding: 3px; */
}

a.router-link-active,
a.router-link-exact-active, .round span {
    opacity: 1;
}
.aob {
    display: flex;
    flex-flow: row;
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
.aob > button  svg {
    font-size: 20px;
}
</style>