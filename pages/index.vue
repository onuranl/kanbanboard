<template>
  <div
    class="container d-flex justify-content-center align-items-center"
    style="height: 100vh"
  >
    <div class="content text-center">
      <h1 class="text-white">Kanban Board</h1>
      <button @click="createBoard" class="text-white my-4">Create Board</button>
      <h4 class="text-white">My Last Visits</h4>
      <div class="text-danger" v-for="(visit, index) in visits" :key="index">
        <nuxt-link :to="`/board/${visit}`">{{ visit }} </nuxt-link>
      </div>
      <p class="text-danger mt-3">https://www.linkedin.com/in/onuranl/</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visits: [],
    }
  },
  created() {
    const visits = JSON.parse(localStorage.getItem('visits'))
    if (visits) {
      this.visits = visits.reverse()
    }
  },
  methods: {
    async createBoard() {
      await this.$services.board.create().then((el) => {
        this.$router.push(`/board/${el.data._id}`)
      })
    },
  },
}
</script>
