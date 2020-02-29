<template>
  <div class="base">
    <Top />
    <About />
  </div>
</template>
<script>
import Top from '@/components/Top'
import About from '@/components/About'

export default {
  components: {
    Top,
    About
  }
}
</script>
<style lang="scss">
.base {
  max-width: 414px;
  height: 100vh;
}
</style>
