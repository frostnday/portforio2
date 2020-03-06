<template>
  <main class="main">
    <nuxt />
    <template v-if="isLoading">
      <transition>
        <div class="loading">
          <!-- <h1>読込中</h1> -->
        </div>
      </transition>
    </template>
  </main>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true
    }
  },

  mounted() {
    window.addEventListener('load', () => {
      this.isLoading = false
    })
  }
}
</script>

<style lang="scss">
html {
  background-color: black;
}

body {
  margin: 0;
}

main {
  position: relative;
  min-height: 100vh;
  max-width: 414px;
  margin: 0 auto;
  z-index: 0;
}

main::before {
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

.loading {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 9999;

  > h1 {
    color: white;
    font-size: 50px;
    text-align: center;
  }
}
.v-leave-active,
.v-enter-active {
  transition: opacity 0.7s ease-out;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.vleave {
  opacity: 1;
}
</style>
