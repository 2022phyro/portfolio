<script setup>
</script>
<template>
  <section class="section" id="connect">
    <h2>Let's talk about whatever's been bugging you</h2>
    <ul>
      <li mail-to="https://phyrokelstein2@gmail.com"><my-icon :icon="['fas', 'envelope']"></my-icon></li>
      <li><a href="https://x.com/PhyroKelstein"><my-icon :icon="['fab', 'x-twitter']"></my-icon></a></li>
      <li><a href="https://github.com.2022phyro"><my-icon :icon="['fab', 'github']"></my-icon></a></li>
      <li><a href="https://ng.linkedin.com/in/afam-ugwuanyi"><my-icon :icon="['fab', 'linkedin']"></my-icon></a></li>
    </ul>
</section>
</template>
<style scoped>
ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
  gap: 40px;
  list-style: none;
  padding: 10px;
}
li {
  border: 1px solid var(--primary);
  padding: auto;
  border-radius: 4px;
  font-size: 30px;
  width: 50px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 50px;
  /* vertical-align: center; */
  color: var(--primary);
  transition: all 0.3s ease-in-out;
}
li:hover {
  background-color: var(--primary);
  color: var(--secondary);
  transform: scale(1.1);
}
li a {
  width: inherit;
  height: inherit;
  color: inherit;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
}
</style>