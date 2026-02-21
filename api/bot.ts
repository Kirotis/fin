import { webhookCallback } from "grammy";
import { bot } from "./bot/index.js";

export default webhookCallback(bot, "std/http");
