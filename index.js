const { Composer } = require('micro-bot');
const transformString = require('./transform-string.js');
const app = new Composer();

app.command('/start', ctx =>
  ctx.reply(
    'Добро пожаловать в бот, который поможет вам транслитерировать казахские слова на казахскую латиницу!\nПросто напишите ему любой текст и он проведёт транслитерацию.\nАвтор: @drugoi\nОтдельная благодарность: @talgautb'
  )
);
app.on('text', ({ message, replyWithMarkdown }) => {
  replyWithMarkdown(`*${transformString(message.text)}*`);
});

module.exports = app;
