<template>
  <transition appear>
    <div class="loading">
      <!-- <h1>読込中</h1> -->
    </div>
  </transition>
</template>
<style lang="scss" scoped>
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
  transition: opacity 0.4s ease-out;
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
