<template>
  <div
    class="container d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div class="content text-center">
      <h1 class="text-white">Kanban Board</h1>
      <button @click="createBoard" class="text-white my-4">Create Board</button>
      <h4 class="text-white">My Last Visits</h4>
      <p class="text-danger">asdlasd</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async createBoard() {
      await this.$services.board.create().then((el) => {
        this.$router.push(`/board/${el.data._id}`)
      })
    },
  },
}
</script>
