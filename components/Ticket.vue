<template>
  <draggable class="list-group" :list="list" group="people" @change="log">
    <div class="list-group-item" v-for="(element, index) in list" :key="index">
      <h5 class="list-group-item-title">{{ element.title }}</h5>
      <p class="list-group-item-description">{{ element.description }}</p>
    </div>
  </draggable>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  methods: {
    add: function () {
      this.list.push({ name: 'Juan' })
    },
    replace: function () {
      this.list = [{ name: 'Edgard' }]
    },
    clone: function (el) {
      return {
        name: el.name + ' cloned',
      }
    },
    log: function (evt) {
      window.console.log(evt)
    },
  },
}
</script>

<style lang="scss" scoped>
.list-group {
  &-item {
    background: #c440a1;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12),
      0px 16px 32px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    margin: 16px 0px;
    padding: 24px;
    &-title {
      margin: 8px 0px;
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
      color: #ffffff;
    }
    &-description {
      color: rgba(255, 255, 255, 0.75);
      margin: 8px 0px;
      font-size: 14px;
      line-height: 140%;
    }
  }
}
</style>
