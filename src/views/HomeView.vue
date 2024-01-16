<script setup>
</script>

<template>
  <main>
    <div class="intro">
      <div class="greeting">
        <h1>Hi there I'm <span>Ugwuanyi Afam</span></h1>
        <!-- <p>I'm more of a chameleon type but on any good day, you may find my hide as a<MovingText/></p> -->
      </div>
      <div class="chameleon">
        <img src="/chameleon.jpg" alt="a chameleon wearing glasses coding">
      </div>
    </div>
  </main>
</template>
<style scoped>
main {
  /* border: 1px solid red; */
  width: inherit;
  height: calc(100vh - 80px);

}

.greeting h1 {
  font-size: 45px;
  /* font-weight: 500; */
}
.intro {
  padding: 60px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 100px;
}
.greeting {
  max-width: 600px;
  height: fit-content;
}
.greeting p {
  font-size: 25px;
}
.roles {
  font-weight: 600;
  font-size: 30px;
}
.chameleon {
  border: 1px solid var(--primary);
  width: 450px;
  height: 300px;
  border-radius: 15px;
  right: -20px;
  position: relative;
  box-shadow: 2px 2px 2px 0 var(--primary);
}
.chameleon > img {
  width: 450px;
  height: 300px;
  background-size: 300px;
  position: relative;
  background: white;
  top: 40px;
  left: -40px;
  border-radius: 15px;
}
@media screen and (max-width: 768px) {
  .greeting h1 {
  font-size: 35px;
  /* font-weight: 500; */
}
  .greeting p {
    font-size: 18px;
  }
  .chameleon {
    width: 300px;
    height: 200px;
    right: -15px;
  }
  .chameleon img {
    width: 300px;
    height: 200px;
    top: 30px;
    left: -30px;
  }
  .intro {
    padding: 20px;
    gap: 40px;
  }
}
@media screen and (max-width: 400px) {
  .chameleon, .chameleon img {
    width: 270px;
    height: 180px;
  }
  
}
</style>
