import { Composer } from "grammy";

const startRoute = new Composer();

// bot.api.setMyCommands([
//   { command: "start", description: "Start" },
// ]);

startRoute.command("start", (ctx) => {
  ctx.reply("Welcome! Up and running.", {});
});

export { startRoute };
