<template>
  <section id="about" class="layout">
    <h2 class="title">about</h2>
    <div class="profile">
      <img src="/images/icon.png" />
      <h3 class="name">名前：森山智哉</h3>
      <h3 class="job">職業：Web Engineer</h3>
      <div class="sns">
        <a href="https://www.facebook.com/frostndays" target="_blank"
          ><img class="icon" src="/images/facebook.svg"
        /></a>
        <a href="https://twitter.com/frostndays" target="_blank"
          ><img class="icon" src="/images/twitter.svg"
        /></a>
      </div>
    </div>
    <div class="history">
      <div class="item">
        <h4 class="label">2013<span class="company">Sier</span></h4>
        <p class="description">
          医療業界を中心にアプリケーション開発からシステム導入まで複数の案件を経験
        </p>
      </div>
      <div class="item">
        <h4 class="label">2017<span class="company">事業会社</span></h4>
        <p class="description">
          プレイングマネージャーとして新規事業のアプリケーション開発とマネジメントを経験
        </p>
      </div>
      <div class="item">
        <h4 class="label">2019<span class="company">フリーランス</span></h4>
        <p class="description">
          Webアプリケーション開発の仕事を中心に活動中
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.title {
  @include title-style;
  text-align: center;
  margin-bottom: 60px;
}

.layout {
  width: 90%;
  margin: 0 auto;
}

.profile {
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-template-rows: 36px 36px 1fr;
  grid-template-areas:
    'icon name'
    'icon job'
    'icon sns';
  height: 160px;
  margin: 0 auto;
  border-bottom: 2px solid rgba(255, 255, 255, 0.19);

  > img {
    grid-area: icon;
  }

  .name {
    grid-area: name;
    margin-left: 20px;
    @include text-style(16px);
  }

  .job {
    grid-area: job;
    margin-left: 20px;
    @include text-style(16px);
  }

  .sns {
    grid-area: sns;
    margin-top: 10px;
    margin-left: 50%;

    .icon {
      width: 50px;
      height: 50px;
    }
  }
}
.history {
  width: 80%;
  margin: 0 auto;
  padding-left: 20px;
  border-left: 2px solid rgba(255, 255, 255, 0.19);

  .company {
    margin-left: 24px;
  }

  .item {
    position: relative;

    &:after {
      position: absolute;
      content: '';
      display: block;
      width: 22px;
      height: 22px;
      top: 0;
      left: -32px;
      background: #b6bbd5;
      border-radius: 50%;
      box-shadow: 0px 0.3px 3px rgba(255, 255, 255, 0.27);
    }
  }
}
.label {
  @include text-style(16px);
  color: rgba(255, 255, 255, 0.94);
}

.description {
  @include text-style(14px);
}
</style>
