const { Composer } = require('micro-bot');
const botan = require('botanio')(process.env.QAZLATYN_BOTAN_KEY);
const transformString = require('./transform-string.js');

const bot = new Composer();

bot.command('/start', ctx => {
  ctx.reply(
    'Добро пожаловать в бот, который поможет вам транслитерировать казахские слова на казахскую латиницу!\nПросто напишите ему любой текст и он проведёт транслитерацию.\nАвтор: @drugoi\nОтдельная благодарность: @talgautb'
  );
  botan.track(ctx.message, 'Start');
});

bot.on('text', ({ message, replyWithMarkdown }) => {
  replyWithMarkdown(`*${transformString(message.text)}*`);
  botan.track(message, 'Translit');
});

bot.on('inline_query', ({ inlineQuery, answerInlineQuery }) => {
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
  botan.track(inlineQuery, 'Translit Inline');
});

module.exports = bot;
