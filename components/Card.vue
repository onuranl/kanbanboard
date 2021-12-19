<template>
  <div class="card mb-2">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="card_title">{{ title }}</h3>
      <slot />
    </div>
    <ticket :list="list" />
  </div>
</template>

<script>
import Ticket from './Ticket.vue'
export default {
  components: { Ticket },
  props: {
    title: String,
    list: Array,
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 360px;
  background: #262626;
  border-radius: 16px;
  padding: 24px;
  &_title {
    font-size: 37px;
    line-height: 44px;
    color: #ffffff;
  }
}
</style>
