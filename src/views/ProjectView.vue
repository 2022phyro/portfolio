<script setup>
</script>
<template>
    <section id="projects">
        <h2>What kept me busy (so far)... </h2>
        <ul>
            <article class="job">
      <a href="https://www.m-rinternational.com/">
        <span class="hd1">
          <span class="role">Web Development & Python Instructor</span>
          <span class="date">July 2023 - Present</span>
        </span>
        <span class="hd2">
          <span class="company">Mr-International</span>
          <span class="stack" v-for="(job, i) in job1" :key="i">{{ job }}</span>
        </span>
      </a>
      <p>
        Implements and teach modern principles and pratices in web development.    
        Aided in the design and implementation of an in house learning management system for use
        by the students    
      </p>
    </article>
    <article class="job">
      <a href="https://techprojectonbudget.com">
        <span class="hd1">
          <span class="role">Intern</span>
          <span class="date">November 2023 - Present</span>
        </span>
        <span class="hd2">
          <span class="company">TechProjectOnBudget</span>
          <span class="stack" v-for="(job, i) in intern1" :key="i">{{ job }}</span>
        </span>
      </a>
      <p>
        Designed and built a task tracker system complete with its own commenting and labelling features
        as well as provisions for attachments for project management inhouse. 
        Redesigned and collaborated with like minded individuals on a forum system for the intranet allowing
        different "forums" to be associated with each aspect of the organization yet linked to the single user.
        Collaborated with the rest of the team in converting the backend application from a monolithic to a 
        fully modern microservice collection
      </p>
    </article>
        </ul>
    </section>
</template>
<style scoped>
#projects {
  padding-top: 30px;
  display: flex;
  flex-flow: column;
  gap: 10px;
}
h2 {
  font-family: "Ubuntu";
  font-weight: 600;
  font-size: 20px;
  color: var(--primary)
}

article.job {
  border-radius: 10px;
  padding: 15px;
  background-color: #f0f3dade;
  margin-top: 10px;
  box-shadow: 2px 2px 2px #ccc;
}

a {
  display: flex;
  flex-flow: column;
  align-content: flex-start;
  justify-content: flex-start;
  padding-bottom: 0;
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
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