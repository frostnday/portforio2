<template>
  <section id="contact" class="layout">
    <h2 class="title">contact</h2>
    <form
      id="contactForm"
      class="form"
      method="post"
      autocomplete="off"
      target="dummyIframe"
      @submit.prevent="onSubmit"
    >
      <label class="label">email</label>
      <input v-model="email" name="email" class="email" type="email" />

      <label class="label">お名前</label>
      <input v-model="username" name="username" class="username" type="text" />

      <label class="label">お問い合わせ内容</label>
      <textarea v-model="message" name="body" class="body" />
      <button type="submit" class="button">send</button>
    </form>
  </section>
</template>

<script>
import axios from 'axios'
const baseUrl = 'https://us-central1-frostndays.cloudfunctions.net/api'

export default {
  data() {
    return {
      email: '',
      username: '',
      message: ''
    }
  },

  methods: {
    async onSubmit() {
      if (this.email && this.username && this.message) {
        const params = {
          email: this.email,
          username: this.username,
          message: this.message
        }
        await axios.post(`${baseUrl}/contact`, params)
        this.clear()
      }
    },
    clear() {
      window.alert('お問い合わせが完了しました。')
      this.email = ''
      this.username = ''
      this.message = ''
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
  height: 40px;
  margin: 5px 0 10px;
  padding: 3px 10px;
  background: rgba(8, 7, 51, 0.6);
  box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-size: 14px;
  font-family: Open Sans;
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
