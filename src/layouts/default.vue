<template>
  <main class="main">
    <canvas class="background" />
    <nuxt />
    <template v-if="isLoading">
      <transition>
        <div class="loading" />
      </transition>
    </template>
  </main>
</template>
<script>
const particlesJS = require('particlesjs')
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

    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    // window resize
    window.addEventListener('resize', () => {
      vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })

    // 泡のアニメーションload
    window.onload = () => {
      particlesJS.init({
        selector: '.background',
        maxParticles: 50,
        sizeVariations: 40,
        speed: 0.4,
        color: [
          '#0bd',
          'rgba(0,187,221,.5)',
          'rgba(0,187,221,.2)',
          'rgba(53,85,255,.4)'
        ]
      })
    }
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
  @include pagevh;
  background: url('/images/back.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
}
.background {
  position: fixed;
  top: 0;
  max-width: 414px;
  @include pagevh;
  opacity: 0.35;
  z-index: z(Bottom);
}
.loading {
  position: fixed;
  top: 0;
  width: 100vw;
  @include pagevh;
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
