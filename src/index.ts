import * as dotenv from 'dotenv';

dotenv.config();

import Telegraf from 'telegraf';
import transformString from './transform-string';

if (!process.env.QAZLATYN_BOT_TOKEN) {
  throw new Error('QAZLATYN_BOT_TOKEN is not provided, Shutting down.');
}

const bot = new Telegraf(process.env.QAZLATYN_BOT_TOKEN);

bot.command('/start', ctx => {
  ctx.replyWithMarkdown(
    'Добро пожаловать в бот, который поможет вам транслитерировать казахские слова на казахскую латиницу!\n\nПросто напишите ему любой текст и он проведёт транслитерацию.\n\n*Автор:* @drugoi*\nОтдельная благодарность:* @talgautb\n\nКод проекта на [Github](https://github.com/drugoi/telegram-bot-qazlatyn)'
  );
});

bot.on('text', ({ message, reply, replyWithMarkdown }) => {
  if (message && message.text) {
    const reply = `${transformString(message.text)}`;
    replyWithMarkdown(reply);
  } else {
    reply('Текст не может быть пустым');
  }
});

bot.on('inline_query', ({ inlineQuery, answerInlineQuery }) => {
  if (inlineQuery && inlineQuery.query && inlineQuery.query.length) {
    const answer = transformString(inlineQuery.query);
    answerInlineQuery([
      {
        id: '1',
        type: 'article',
        title: answer,
        input_message_content: {
          message_text: `${answer}`,
          parse_mode: 'Markdown',
          disable_web_page_preview: true
        }
      }
    ]);
  }
});

bot.startPolling();

console.log('Telegram Bot Qazlatyn is started');

export default bot;
