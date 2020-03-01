<template>
  <div id="work" class="work">
    <h2>work</h2>
    <section class="carousel">
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
    </section>
  </div>
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
h2 {
  @include title-style;
  text-align: center;
}

.work {
  height: 100vh;
  padding-top: 20px;
  margin: 0 auto;
}

.carousel {
  margin-top: 60px;
}

.VueCarousel-slide {
  display: flex;
  justify-content: center;
}
</style>
