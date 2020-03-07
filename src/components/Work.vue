<template>
  <section id="work" class="layout">
    <h2 class="title">work</h2>
    <div class="carousel">
      <carousel
        :per-page="1"
        :controls="true"
        :pagination-size="20"
        :pagination-padding="15"
        :pagination-color="'#3A4C87'"
        :pagination-active-color="'#C8CBD6'"
      >
        <slide v-for="(job, index) in jobs" :key="index">
          <Card
            :title="job.title"
            :skills="job.skills"
            :description="job.description"
          />
        </slide>
      </carousel>
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
  height: 100vh;
  padding-top: 20px;
  margin: 0 auto;
}

.VueCarousel-slide {
  display: flex;
  justify-content: center;
}
</style>
