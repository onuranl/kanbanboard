import BoardService from '~/services/BoardService'

export default (ctx, inject) => {
  inject('services', {
    board: BoardService(ctx),
  })
}