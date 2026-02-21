import { Composer } from "grammy";
import { splitWordCommandCombination } from "../utils/index.js";
import { db, financeTable } from "../db/index.js";

const addInfoRoute = new Composer();

const commands = [
  splitWordCommandCombination("add"),
  splitWordCommandCombination("добавить"),
  splitWordCommandCombination("адд"),
].flat();

const dataRegexp = /(\d+) ([\w\А-я]+)/g;

addInfoRoute.command(commands, async (ctx) => {
  try {
    const result = ctx.match.match(dataRegexp);
    if (!result) {
      throw new Error(
        "Укажите что будем добовлять. Пример ```/add 450 Такси```",
      );
    }
    const [, sum, description] = result;
    await db
      .insert(financeTable)
      .values({
        from: ctx.senderChat?.id ?? 0,
        sum: Number.parseInt(sum, 10),
        description,
      })
      .execute();
    return ctx.react("👍");
  } catch (error) {
    if (error instanceof Error) {
      const messageId = ctx.message?.message_id;
      return ctx.reply(error.message, {
        reply_parameters: messageId ? { message_id: messageId } : undefined,
        parse_mode: "MarkdownV2",
      });
    } else {
      return ctx.reply("Неизвестная ошибка", { parse_mode: "MarkdownV2" });
    }
  }
});

export { addInfoRoute };
