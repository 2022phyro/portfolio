<template>
    <div class="fireflies-container">
      <!-- Add the firefly elements here using v-for -->
      <div :key="index" class="firefly" :style="getFireflyStyles(index)">
        <div class="firefly-inner"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        quantity: 15,
      };
    },
    methods: {
      getFireflyStyles(index) {
        // Implement logic to calculate styles based on index
        // You can use random values or any logic you want
        return {
          left: `${Math.random() * 100}vw`,
          top: `${Math.random() * 100}vh`,
          // Add other styles as needed
        };
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your Vanilla CSS styles here */
  .fireflies-container {
    position: relative;
    height: 100vh;
    background-color: #000;
    background-size: cover;
  }
  
  .firefly {
    position: absolute;
    width: 0.4vw;
    height: 0.4vw;
    animation: ease 200s alternate infinite;
    pointer-events: none;
  }
  
  .firefly-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform-origin: -10vw;
  }
  
  /* Add other styles as needed */
  
  </style>
  