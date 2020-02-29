<template>
  <main class="main">
    <nuxt />
  </main>
</template>

<style lang="scss">
html {
  background-color: black;
}

body {
  position: relative;
  min-height: 300vh;
  max-width: 414px;
  margin: 0 auto;
  z-index: 0;
}

body::before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  z-index: -1;
  max-width: 414px;
  width: 100%;
  height: 100vh;
  background: url('/images/back.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
}
</style>
