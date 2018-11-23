export const quit = async ctx => {
  await ctx.leaveChat()
}
