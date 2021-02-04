/* eslint-disable no-console */
const mensagens = [];
const padroesFeitos = [];
const bannedWords = [
  'ban',
  'timeout',
  'unban',
  'untimeout',
  'predict',
  'poll',
  'clear',
  'deletepoll',
  'emoteonly',
  'emoteonlyoff',
  'endpoll',
  'followers',
  'followersoff',
  'slow',
  'subscribers',
  'subscribersoff',
  'uniquechat',
  'uniquechatoff',
  '/ban',
  '/timeout',
  '/unban',
  '/untimeout',
  '/predict',
  '/poll',
  '/clear',
  '/deletepoll',
  '/emoteonly',
  '/emoteonlyoff',
  '/endpoll',
  '/followers',
  '/followersoff',
  '/slow',
  '/subscribers',
  '/subscribersoff',
  '/uniquechat',
  '/uniquechatoff',
  '.ban',
  '.timeout',
  '.unban',
  '.untimeout',
  '.predict',
  '.poll',
  '.clear',
  '.deletepoll',
  '.emoteonly',
  '.emoteonlyoff',
  '.endpoll',
  '.followers',
  '.followersoff',
  '.slow',
  '.subscribers',
  '.subscribersoff',
  '.uniquechat',
  '.uniquechatoff',
];

exports.default = (client, target, context, message) => {
  mensagens.push(message);
  const mensagemSplited = message.split(' ');

  if (
    mensagens[mensagens.length - 1] === mensagens[mensagens.length - 2] &&
    padroesFeitos.indexOf(message) === -1 &&
    bannedWords.includes(mensagemSplited[0])
  ) {
    padroesFeitos.push(message);
    client.say(target, message);
  }
};
