import { webhookCallback } from "grammy";
import { bot } from "./bot/index.js";

export const config = {
  runtime: "edge",
};

export default webhookCallback(bot, "std/http");
