<template>
  <div class="base">
    <Top />
    <About />
    <Work />
    <Skill />
  </div>
</template>
<script>
import Top from '@/components/Top'
import About from '@/components/About'
import Work from '@/components/Work'
import Skill from '@/components/Skill'

export default {
  components: {
    Top,
    About,
    Work,
    Skill
  }
}
</script>
<style lang="scss">
// .base {
//   max-width: 414px;
//   height: 100vh;
// }
</style>
