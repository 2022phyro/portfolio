<script setup>
const ilens = ["sanic", "haproxy", "python", "socketio", "opencv", "gpt4vision", "clarifai"]
const sf = ["apiflask", "python", "gemini", "vue"]
</script>
<template>
    <section id="projects" class="section">
        <h2>What kept me busy (so far)... </h2>
        <ul>
            <li class="job">
              <a href="https://www.m-rinternational.com/">
                <span class="hd1">
                  <span class="role">Ilens</span>
                </span>
                <span class="hd2">
                  <span class="stack" v-for="(job, i) in ilens" :key="i">{{ job }}</span>
                </span>
              </a>
              <img src="/mysql.jpeg">
              <p>
                My most challenging yet. I was fortunate to be part of a wonderful team that designed and built
                an AI powered assistant tht helps blind people by telling them what is in front of them
                and interpreting their surroundings for them. I worked on the backend integrating a series of 
                AIs to help achieve the task. It was built to communicate based on audio input and cues
              </p>
            </li>
            <li class="job">
              <a href="https://techprojectonbudget.com">
                <span class="hd1">
                  <span class="role">Secret Formula</span>
                </span>
                <span class="hd2">
                  <span class="stack" v-for="(job, i) in sf" :key="i">{{ job }}</span>
                </span>
              </a>
              <img src="/mysql.jpeg">
              <p>
                Designed and built a task tracker system complete with its own commenting and labelling features
                as well as provisions for attachments for project management inhouse. 
                Redesigned and collaborated with like minded individuals on a forum system for the intranet allowing
                different "forums" to be associated with each aspect of the organization yet linked to the single user.
                Collaborated with the rest of the team in converting the backend application from a monolithic to a 
                fully modern microservice collection
              </p>
            </li>
        </ul>
    </section>
</template>
<style scoped>
#projects ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: column;
  gap: 20px;
}
#projects ul li {
  list-style: none;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  column-gap: 10px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 1px 1px 1px #ccc;
}
article.job {
  border-radius: 10px;
  padding: 15px;
  background-color: #f0f3dade;
  margin-top: 10px;
  box-shadow: 2px 2px 2px #ccc;
}

a {
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  display: flex;
  flex-flow: column;
  align-content: flex-start;
  justify-content: flex-start;
  padding-bottom: 0;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 10px;
  height: fit-content;
  border-bottom: 1px solid #ccc;
}
img {
  grid-column: 2 / 2;
  grid-row: 1 / 3;
  width: 200px;
  height: 150px;
  border-radius: 10px;
  align-self: center;
}
li p {
  grid-column: 1 / 1;
  grid-row: 2 / 2;
  margin-top: 10px;
  font-size: 14px;
}
.job p {
  margin-top: 10px;
}
.hd1, .hd2 {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
}
.hd2 {
  gap: 5px;
  justify-content: flex-start;
  padding-bottom: 5px;
}
.role {
  font-weight: 700;
  color: var(--primary);
}
.date {
  color: gray;
  font-size: 14px;
}
.company {
  font-weight: 800;
  color: black;
  margin-right: 5px;
}
.stack {
  font-size: 12px;
  padding: 0 5px;
  color: var(--primary);
  border: 1px solid var(--primary);
  background: var(--secondary);
  border-radius: 10px;
    align-self: baseline;
}
</style>