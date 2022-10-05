<template>
  <div class="base">
    <About />
    <Work />
    <Skill />
    <Contact />
  </div>
</template>
<script>
import Top from '@/components/Top'
import About from '@/components/About'
import Work from '@/components/Work'
import Skill from '@/components/Skill'
import Contact from '@/components/Contact'

export default {
  components: {
    Top,
    About,
    Work,
    Skill,
    Contact
  }
}
</script>
<style lang="scss">
// .base {
//   max-width: 414px;
//   height: 100vh;
// }
</style>
