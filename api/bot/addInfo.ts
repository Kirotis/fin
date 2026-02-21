import { Composer } from "grammy";
import { db, financeTable } from "../db/index.js";

const addInfoRoute = new Composer();

const dataRegexp = /(\d+) ([\w\А-я]+)/g;

addInfoRoute.command("add", async (ctx) => {
  try {
    const result = ctx.match.matchAll(dataRegexp).toArray();
    if (!result?.length) {
      throw new Error(
        "Укажите что будем добовлять. Пример ```/add 450 Такси```",
      );
    }
    const [, sum, description] = result;
    // await db
    //   .insert(financeTable)
    //   .values({
    //     from: ctx.senderChat?.id ?? 0,
    //     sum: Number.parseInt(sum, 10),
    //     description,
    //   })
    //   .returning();
    return ctx.react("👍");
  } catch (error) {
    const message_id = ctx.message?.message_id;
    return ctx.reply(
      error instanceof Error ? error.message : "Неизвестная ошибка",
      {
        reply_parameters: message_id ? { message_id } : undefined,
        parse_mode: "MarkdownV2",
      },
    );
  }
});

export { addInfoRoute };
