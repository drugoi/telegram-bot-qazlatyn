const { Composer } = require('micro-bot');
const transformString = require('./transform-string.js');

const bot = new Composer();

bot.command('/start', ctx => {
  ctx.reply(
    'Добро пожаловать в бот, который поможет вам транслитерировать казахские слова на казахскую латиницу!\nПросто напишите ему любой текст и он проведёт транслитерацию.\nАвтор: @drugoi\nОтдельная благодарность: @talgautb'
  );
});

bot.on('text', ({ message, replyWithMarkdown }) => {
  replyWithMarkdown(`*${transformString(message.text)}*`);
});

bot.on('inline_query', ({ inlineQuery, answerInlineQuery }) => {
  if (inlineQuery.query.length) {
    const answer = transformString(inlineQuery.query);
    answerInlineQuery([
      {
        id: '1',
        type: 'article',
        title: answer,
        input_message_content: {
          message_text: `*${answer}*`,
          parse_mode: 'Markdown',
          disable_web_page_preview: true
        }
      }
    ]);
  }
});

module.exports = bot;
