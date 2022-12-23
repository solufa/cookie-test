<template>
  <div>
    <div class="container">
      <div>
        <h1 class="title">cookie-test</h1>
        <button @click="get1">GET1</button>
        <div>res1: {{ res1 }}</div>
        <button @click="get2">GET2</button>
        <div>res2: {{ res2 }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return { res1: '', res2: '' }
  },
  methods: {
    async get1() {
      const aa = await this.$api.$get()
      this.res1 = aa
    },
    async get2() {
      const bb = await this.$api2.$get()
      this.res2 = bb
    }
  }
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
}

.title {
  font-family: Quicksand, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
