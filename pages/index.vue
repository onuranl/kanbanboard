<template>
  <div class="p-4">
    <div
      class="row justify-content-lg-between justify-content-sm-center align-items-baseline"
    >
      <card title="Backlog" :list="backlog" />
      <card title="To do" :list="todo" />
      <card title="In progress" :list="progress" />
      <card title="Designed" :list="designed" />
    </div>
  </div>
</template>
<script>
import Card from '~/components/Card.vue'
export default {
  components: { Card },
  data() {
    return {
      backlog: [
        {
          title: 'Deneme',
          description: 'deneme12321312',
        },
        {
          title: 'Deneme',
          description: 'deneme12321312',
        },
      ],
      todo: [
        {
          title: 'Deneme',
          description: 'deneme12321312',
        },
      ],
      progress: [],
      designed: [],
    }
  },
}
</script>
