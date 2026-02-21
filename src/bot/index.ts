import { commands } from "@grammyjs/commands";
import { Bot } from "grammy";

import type { MyContext } from "./types.js";
import { addInfoRoute } from "./addInfo.js";
import { startRoute } from "./start.js";

const bot = new Bot<MyContext>(process.env.TOKEN);
bot.use(commands());
bot.use(startRoute);
bot.use(addInfoRoute);


export { bot };
