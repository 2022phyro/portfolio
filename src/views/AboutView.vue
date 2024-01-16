<script setup>
const skills = [
['html', '/html.jpeg'],
['css', '/css.jpeg'],
['Javascript', '/js.jpeg'],
['JQuery', '/jquery.jpeg'],
['React', '/react.jpeg'],
['Vue', '/vue.jpeg'],
['Python', '/python.jpeg'],
['Node JS', 'node.jpeg'],
['Django', '/django.png'],
['Git', '/git.jpeg'],
['MySql', '/mysql.jpeg'],
['MongoDB', '/mongodb.jpeg'],

]
</script>
<template>
  <main id="about">
    <h2>Meet the Man...</h2>
    <p>So I've been a programmer for a a few years now. I started out a complete noob and
      began from what everyone called the hardest of the hard, C programming. We had the 
      famous handbook by Ritchie and some hard ass teachers but a loving community and I pulled through. After
      C, I breezed through Python and JavaScript even dabbling into Rust. My greatest inspiration remains LInus Torvaldi
      and I'm committed to building my own stuff and making software accessible to people no matter their
      pockets
    </p>
    <h2>What I Love...</h2>
    <p>
      I love in no particular order a lot of things not necessarily in the same order
    </p>
    <ul class="hobbies">
      <li class="hby h-1">
        <h3>Poetry and Rhyming</h3>
        <img class="hobby" src="/poetry.png">
        <p>I like to think of myself as the Anyonymous
          except I want to get known someday. Poetry has been with me since fift grade and
          is how I cope
        </p>
      </li>
      <li class="hby h-2">
        <h3>Creative Writing</h3>
        <img class="hobby" src="/story.jpeg">
        <p>Well when we go in we have to go all in right? Creative writing helps me
          translate everyday miracles into immortality and keeps my mind engaged
        </p>
      </li>
      <li class="hby h-3"><h3>Coding and Crackmes</h3>
        <img class="hobby h-3" src="/crackme.jpeg">
      <p>
        There's nothing better than when you do what you love for a living. In this case nothing suits
        me more than coding and puzzles, crackmes, leetcode and other challenges and puzzles that makes 
        life fun for a dev
      </p>
    </li>
    </ul>
    <p>The list never ends and of course my job because when you're doing something you love, you can't just
      quit right. As NF said. it's doing something you love and ready to accept the pay cut
    </p>
    <h2>Well...</h2>
    <p>In my local parlance there's a saying "Na condition make crayfish bend".
      Nothing works better than being among the best people and those that 
      are in your boat aand love the same stuff you do like you. I work with a not just a team
      a family dedicated to providing innovative solutions to those pesky everyday problems
    </p>
    <h2>My SkillSet</h2>
    <ul class="skills">
      <li v-for="[skill, img] in skills" :key="skill">
        <img :src="img" alt="Skill Image">
        <h3>{{ skill }}</h3>
      </li>
    </ul>
  </main>
</template>

<style scoped>
#about {
  /* min-height: 100vh;
  display: flex;
  align-items: center; */
  font-size: 16px;
}
.hobbies  {
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: center;
  gap: 20px;
}
#about > p {
  padding: 20px;
}
#about > p:first-child {
  text-align: center;
}
h2 {
  text-align: center;
  font-family: 'Space Grotesk';
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
  color: var(--primary)
}

.hby {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows:  60px auto auto;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  justify-content: center;
}
.hby p {
  grid-row: 2 / span 1;
  max-width: 600px;
  grid-column: 1  / span 2;
}
.hby h3 {
  align-self: bottom;
  position: relative;
  bottom: -10px;
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  vertical-align: bottom;
  /* border: 1px solid red; */
}
.hobby {
  width: 300px;
  height: 300px;
  grid-column: 3  / span 1;
  grid-row: 1 / span  3;
  border-radius: 10px;
}
.hby.h-2 p {
 grid-row: 2 / span 1;
 grid-column: 2 / span 2;

}
.hby.h-2 .hobby {
  grid-column: 1 / span 1;
  grid-row: 1 / span  3;
}
.hby.h-2 h3 {
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;

}
.skills {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 30px;
  border: 1px solid red;
  align-content: flex-start;
  list-style-type: none;
}
.skills li {
  border: 1px solid var(--primary);
  padding: 10px;
  border-radius: 15px;
}
.skills li img {
  width: 80px;
  height: auto;
  margin-bottom: 10px;
}
.skills li h3 {
  font-weight: 600;
}
@media screen and (max-width: 600px) {
  .hby {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
