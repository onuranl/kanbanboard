<template>
  <b-modal id="modal-1" title="Add Backlog" @ok="createBacklog">
    <form>
      <div>
        <label for="title">Title </label>
        <input type="text" v-model="title" />
      </div>
      <div class="my-3">
        <label for="description">Description </label>
        <b-textarea type="description" v-model="description"> </b-textarea>
      </div>
      <div>
        <label for="color">Color </label>
        <input class="ml-3" type="color" v-model="color" />
      </div>
    </form>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      color: '#0000FF',
    }
  },
  methods: {
    createBacklog() {
      const data = {
        title: this.title,
        description: this.description,
        color: this.color,
      }
      this.$emit('addBacklog', data)
      this.title = ''
      this.description = ''
      this.color = ''
    },
  },
}
</script>
