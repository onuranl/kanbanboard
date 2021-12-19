<template>
  <div class="p-4">
    <div
      class="row justify-content-lg-between justify-content-sm-center align-items-baseline"
    >
      <card title="Backlog" :list="board.backlogs">
        <PlusCircleIcon v-b-modal.modal-1 class="text-white" style="cursor: pointer;" size="1.5x"/>
        <ticket-modal @addBacklog="addBacklog" />
      </card>
      <card title="To do" :list="board.todos" />
      <card title="In progress" :list="board.progress" />
      <card title="Designed" :list="board.designed" />
    </div>
  </div>
</template>
<script>
import Card from '~/components/Card.vue'
import { PlusCircleIcon } from 'vue-feather-icons'

export default {
  components: { Card, PlusCircleIcon },
  data() {
    return {
      board: {}
    }
  },
  async created() {
    let result = await this.$services.board.getByID(this.$route.params.id)

    if(result.data === null || result.data.error) {
      return this.$nuxt.error({ statusCode: 404, message: result.data || "Bu ID'ye göre bir board bulunamadı !" })
    } else {
      this.board = result.data
    }
  },
  methods: {
    async addBacklog(item) {
      this.board.backlogs.push(item)
      try {
        await this.$services.board.update(this.$route.params.id, this.board)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
