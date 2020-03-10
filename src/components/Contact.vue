<template>
  <section id="contact" class="layout">
    <h2 class="title">contact</h2>
    <form
      id="contactForm"
      class="form"
      method="post"
      target="dummyIframe"
      @submit.prevent="onSubmit"
    >
      <label class="label">email</label>
      <input v-model="email" name="email" class="email" type="email" />

      <label class="label">お名前</label>
      <input v-model="username" name="username" class="username" type="text" />

      <label class="label">お問い合わせ内容</label>
      <textarea v-model="body" name="body" class="body" />
      <iframe name="dummyIframe" class="dummyframe" />
      <button class="button">send</button>
    </form>
  </section>
</template>

<script>
const ActionUrl =
  'https://script.google.com/macros/s/AKfycbwm4TVztCDUAQIAzg8l0NH7D0z0zgGMSo2CYNUU2C0Cdjquisw7/exec'
export default {
  data() {
    return {
      email: '',
      username: '',
      body: ''
    }
  },

  methods: {
    onSubmit() {
      if (this.email && this.username && this.body) {
        const f = document.getElementById('contactForm')

        // メールアドレスが入力されていたらForm送信を行う
        f.email.value = this.email
        f.username.avlue = this.username
        f.body.value = this.body

        f.action = ActionUrl
        f.submit()

        // クリアする
        this.email = ''
        this.username = ''
        this.body = ''

        window.confirm('お問い合わせが完了しました。')
      }
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

.form {
  width: 80%;
  margin: 0 auto;
}

.label {
  @include text-style(14px);
  padding-left: 10px;
}

input,
textarea {
  width: 100%;
  height: 35px;
  margin: 5px 0 10px;
  padding: 3px 10px;
  background: rgba(8, 7, 51, 0.43);
  box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
}
.body {
  height: 190px;
}

.button {
  display: block;
  height: 46px;
  width: 90%;
  margin: 57px auto 50px;
  background: linear-gradient(
      90deg,
      rgba(55, 207, 255, 0) -3.08%,
      rgba(36, 49, 174, 0.408) 97.26%
    ),
    rgba(10, 20, 113, 0.51);
  border: 1px solid rgba(0, 163, 255, 0.49);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  @include text-style(21px);
}
.dummyframe {
  display: none;
}
</style>
