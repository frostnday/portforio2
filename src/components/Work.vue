<template>
  <section id="work" class="layout">
    <h2 class="title">work</h2>
    <div class="carousel">
      <div v-for="(job, index) in jobs" :key="index">
        <Card
          :title="job.title"
          :skills="job.skills"
          :description="job.description"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Card from '@/components/Card'
import json from '@/static/application.json'

export default {
  components: {
    Card
  },
  data() {
    return {
      jobs: [...json.works]
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  @include title-style;
  text-align: center;
  margin-bottom: 60px;
}

.layout {
  @include defaultLayout;
}

.VueCarousel-slide {
  display: flex;
  justify-content: center;
}
</style>
