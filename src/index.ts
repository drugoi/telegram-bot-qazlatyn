import * as dotenv from 'dotenv';

dotenv.config();

import Telegraf from 'telegraf';
import transformString from './transform-string';

const bot = new Telegraf(process.env.QAZLATYN_BOT_TOKEN);

bot.command('/start', ctx => {
  ctx.reply(
    'Добро пожаловать в бот, который поможет вам транслитерировать казахские слова на казахскую латиницу!\nПросто напишите ему любой текст и он проведёт транслитерацию.\nАвтор: @drugoi\nОтдельная благодарность: @talgautb'
  );
});

bot.on('text', ({ message, replyWithMarkdown }) => {
  const reply = `${transformString(message.text)}`;
  replyWithMarkdown(reply);
});

bot.on('inline_query', ({ inlineQuery, answerInlineQuery }) => {
  if (inlineQuery.query && inlineQuery.query.length) {
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
