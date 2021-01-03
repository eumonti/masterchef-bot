require('dotenv').config();

const Discord = require('discord.js');

const bastianich = new Discord.Client();
const mavco = new Discord.Client();
const gaetano = new Discord.Client();
const cracco = new Discord.Client();
const bruno = new Discord.Client();

const bastianichToken = process.env.BASTIANICH_TOKEN;
const mavcoToken = process.env.MAVCO_TOKEN;
const gaetanoToken = process.env.GAETANO_TOKEN;
const craccoToken = process.env.CRACCO_TOKEN;
const brunoToken = process.env.BRUNO_TOKEN;

bastianich.on('message', msg => {
    let text = msg.content.toLowerCase();
    if (text.includes('jiovani')) msg.reply('stapprendeingiro?');
    if (text.includes('cibo da strada')) msg.reply('semmai cibo di buttare in strada');
    if (text.includes('che cosa')) msg.reply('non sta mangialla guardilah');
    if (text.includes('sono gaetanocatanuso')) msg.reply('Who?');
    if (text.includes('sembra')) msg.reply('per rispondere alla domanda di chef bruno, questo piato sèmbra e saggìa come un pezzo di merda');
    if (text.includes('imparato')) msg.reply('secondo me tu sta raccontando tante balle qua');
    if (text.includes('no no no')) msg.reply('vediamo, cosa è scialatelle');
    if (text.includes('schlatelle di pollo')) { msg.reply('AAAHHAAHAHAHAHAH'); msg.react('🤣') };
});

mavco.on('message', msg => {
    let text = msg.content.toLowerCase();
    if (text.includes('fatti tu')) msg.reply('pevsonalmente ievi seva');
    if (text.includes('alberghiero')) msg.reply('no cioè mhhh questo l\'ho imparato... negli anni... successivi');
    if (text.includes('scialatelle')) msg.reply('le schlatelle di pollo?');
    if (text.includes('balle')) msg.reply('no no no');
});

gaetano.on('message', msg => {
    let text = msg.content.toLowerCase();
    if (text.includes('5 minuti')) msg.reply('scusi ma sono cinque minuti italiani o tedeschi?');
    else if (text.includes('who')) msg.reply('G a e t a n o   C a t a n u s o');
    if (text.includes('cambia')) msg.reply('è che uno è cinque e l\'altro è quindici');
});

cracco.on('message', msg => {
    let text = msg.content.toLowerCase();
    if (text.includes('italiani o tedeschi')) msg.reply('che cambia?');
    if (text.includes('taglia')) msg.reply('usa un tagliere, usa un taglieeere caaaazzo');
    if (text.includes('schlatelle di pollo')) msg.reply('AAAHAHAHAAHHHAAHAHAHAHAH');
});

bruno.on('message', msg => {
    let text = msg.content.toLowerCase();
    if (text.includes('dimmi')) msg.reply('allora, qui non siamo tra amici.');
});

bastianich.login(bastianichToken);
mavco.login(mavcoToken);
gaetano.login(gaetanoToken);
cracco.login(craccoToken);
bruno.login(brunoToken);