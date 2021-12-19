export default ({ $axios }) => ({
  getAll() {
    return $axios.get('/board')
  },

  getByID(id) {
    return $axios.get(`/board/${id}`)
  },

  create() {
    return $axios.post('/board')
  },

  update(id, board) {
    return $axios.put(`/board/${id}`, board)
  },
})
