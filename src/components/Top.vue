<template>
  <div class="top">
    <h1>
      Tomoya <br />
      Moriyama
    </h1>
    <div class="arrow" @click="toAboutPage">
      <img src="/images/arrow.svg" />
    </div>
  </div>
</template>
<script>
import { scrollById } from '@/utils/scroll'

export default {
  methods: {
    toAboutPage() {
      scrollById('about')
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  margin: 0;
  padding: 139px 0 0 34px;
  @include title-style;
}
.top {
  position: relative;
  max-width: 414px;
  height: 100vh;
}
.arrow {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10%;
  width: 100%;
}
</style>
