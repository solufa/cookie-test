<template>
  <div>
    <div class="container">
      <div>
        <h1 class="title">cookie-test</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
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
