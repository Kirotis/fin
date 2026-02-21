import { Composer } from "grammy";

const startRoute = new Composer();

startRoute.command("start", (ctx) => {
  ctx.reply("Welcome! Up and running. " + new Date().toDateString(), {});
});

export { startRoute };
