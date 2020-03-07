<template>
  <section id="skill" class="layout">
    <h2 class="title">skill</h2>

    <div class="card">
      <div class="inner">
        <ul class="skills">
          <li class="skill">
            <h3 class="name">PHP</h3>
            <div class="level">
              <div class="rate" style="width: 100%;" />
            </div>
          </li>
          <li class="skill">
            <h3 class="name">Kotlin</h3>
            <div class="level">
              <div class="rate" style="width: 60%;" />
            </div>
          </li>
          <li class="skill">
            <h3 class="name">Go</h3>
            <div class="level">
              <div class="rate" style="width: 30%;" />
            </div>
          </li>
          <li class="skill">
            <h3 class="name">Vue</h3>
            <div class="level">
              <div class="rate" style="width: 100%;" />
            </div>
          </li>
          <li class="skill">
            <h3 class="name">React</h3>
            <div class="level">
              <div class="rate" style="width: 30%;" />
            </div>
          </li>
          <li class="skill">
            <h3 class="name">Angular</h3>
            <div class="level">
              <div class="rate" style="width: 50%;" />
            </div>
          </li>
          <li class="skill">
            <h3 class="name">Laravel</h3>
            <div class="level">
              <div class="rate" style="width: 100%;" />
            </div>
          </li>
          <li class="skill">
            <h3 class="name">Nuxt</h3>
            <div class="level">
              <div class="rate" style="width: 100%;" />
            </div>
          </li>
          <li class="skill">
            <h3 class="name">Firebase</h3>
            <div class="level">
              <div class="rate" style="width: 80%;" />
            </div>
          </li>
          <li class="skill">
            <h3 class="name">AWS</h3>
            <div class="level">
              <div class="rate" style="width: 40%;" />
            </div>
          </li>
          <li class="skill">
            <h3 class="name">MySQL</h3>
            <div class="level">
              <div class="rate" style="width: 90%;" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.title {
  @include title-style;
  text-align: center;
  margin-bottom: 60px;
}

.layout {
  height: 100vh;
  margin: 0 auto;
}

.card {
  @include card;
  height: 490px;
  margin: 0 auto;
  color: $white;

  .inner {
    padding: 25px 20px 20px;
  }
}

.skills {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 0 5%;
  margin: 0;
}

.skill {
  display: flex;
  align-items: center;

  .name {
    width: 40%;
    margin: 0;
    @include text-style(11px);
  }

  .level {
    width: 70%;
    height: 5px;
    border-radius: 10px;
    background-color: rgba(64, 64, 64, 0.66);

    .rate {
      height: 5px;
      border-radius: 10px;
      background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) -2.1%,
          rgba(112, 195, 255, 0.8) -2.09%,
          rgba(20, 0, 255, 0.408) 97.26%
        ),
        rgba(65, 77, 198, 0.69);
    }
  }
}
</style>
