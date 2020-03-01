<template>
  <div class="card">
    <div class="inner">
      <h3 class="jobTitle">{{ title }}</h3>
      <ul class="skills">
        <li v-for="(skill, index) in skills" :key="index" class="tag">
          {{ skill }}
        </li>
      </ul>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    skills: {
      required: true,
      type: Array
    },
    description: {
      required: true,
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 338px;
  margin: 0 10px;
  background: rgba(2, 16, 65, 0.45);
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-family: $default-font;

  .inner {
    width: 306px;
    height: 304px;
    padding: 25px 20px 20px;
    background: rgba(0, 0, 0, 0.24);
    border-radius: 20px;
  }
}

.jobTitle {
  font-size: 19px;
  line-height: 26px;
  letter-spacing: 2.7px;
  color: rgba(255, 255, 255, 0.71);
}

.skills {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  height: 70px;
  padding: 0;
  .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 34px;
    height: 25px;
    margin-right: 9px;
    padding: 0 4px;
    background: #121f50;
    border: 1px solid rgba(141, 157, 214, 0.51);
    border-radius: 5px;
    font-size: 11px;
    line-height: 12px;
    letter-spacing: 0.7px;
    color: rgba(255, 255, 255, 0.6);
  }
}
.description {
  font-size: 14px;
  line-height: 180%;
  letter-spacing: 2.7px;
  color: rgba(255, 255, 255, 0.71);
}
</style>
