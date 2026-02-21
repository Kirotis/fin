import { Bot } from "grammy";

import { addInfoRoute } from "./addInfo.js";
import { startRoute } from "./start.js";

const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);
bot.use(startRoute);
bot.use(addInfoRoute);

bot.on("message", (ctx) => ctx.reply("-- Interpritate Error --"))

bot.api.setMyCommands([{ command: "start", description: "Start" }]);

export { bot };
