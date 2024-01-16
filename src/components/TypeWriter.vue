<template>
  <p>
    I’m more of a chameleon type but on any day you can find me as a
    <span :class="`${isTyping ? '': 'blink'}`">{{ displayedText }}</span>
  </p>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const phrases = [
  "Software Engineer",
  "Full Stack Developer",
  "Nocode Web Developer"
];

const speed = 100; // Adjust the speed of typing (milliseconds per character)
const waitTime = 2500; // Adjust the time to wait before clearing the text (milliseconds)
const phraseIndex = ref(0);
const displayedText = ref('');
const isTyping = ref(true);
const isWaiting = ref(false);

const startTyping = () => {
  let index = 0;
  const currentPhrase = phrases[phraseIndex.value];

  const typeInterval = setInterval(() => {
    displayedText.value += currentPhrase[index];
    index++;

    if (index === currentPhrase.length) {
      clearInterval(typeInterval);
      isTyping.value = false; // Stop blinking cursor during waiting
      isWaiting.value = true;
      setTimeout(() => {
        isWaiting.value = false;
        isTyping.value = true; // Start blinking cursor again
        startErasing();
      }, waitTime);
    }
  }, speed);
};

const startErasing = () => {
  const eraseInterval = setInterval(() => {
    displayedText.value = displayedText.value.slice(0, -1);

    if (displayedText.value === '') {
      clearInterval(eraseInterval);
      startTypingNextPhrase();
    }
  }, speed);
};

const startTypingNextPhrase = () => {
  // Increment phraseIndex and start typing the next phrase
  phraseIndex.value = (phraseIndex.value + 1) % phrases.length;
  startTyping();
};

onMounted(() => {
  startTyping();
});
</script>

<style scoped>
/* Optional: Add some styling to make it look like typed text */
p {
  height: 40px;
  margin: 10px 20px;
  margin-left: 0;
  font-size: 16px;
}
span {
  font-family: 'Ubuntu';
  /* white-space: pre; */
  display: block;
  position: relative;
  border: none;
  font-weight: 700;
  font-size: 24px;
  z-index: 0;
  transition: all 0.5s ease;

}

/* Add blinking cursor effect during typing and waiting */
span::after {
  content: '';
  position: absolute;
  width: 2px;
  margin-top: 5px;
  height: 24px;
  background-color: #000;
  animation: blinkCursor 0.8s infinite alternate;
}

@keyframes blinkCursor {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
