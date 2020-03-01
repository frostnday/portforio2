<template>
  <div class="base">
    <Top />
    <About />
    <Work />
  </div>
</template>
<script>
import Top from '@/components/Top'
import About from '@/components/About'
import Work from '@/components/Work'

export default {
  components: {
    Top,
    About,
    Work
  }
}
</script>
<style lang="scss">
// .base {
//   max-width: 414px;
//   height: 100vh;
// }
</style>
