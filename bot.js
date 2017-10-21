const Discord = require('discord.js');
const client = new Discord.Client();
const Prefix = "/"

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
    if (msg.content === Prefix + 'Creator') {
    	msg.reply('My creator is LimitedMine(Adam) C:');
  	}
});
client.on('message', msg => {
  if (msg.content === Prefix + 'info') {
    msg.reply('Hello im PreNetwork Bot! I was Made By PreNetwork xD C:');
  }
});

client.on('message', msg => {
  if (msg.content === Prefix + 'Commands') {
    msg.reply('Commands are /Creator /info Thats all :( Sorry)');
  }
});

client.on('message', msg => {
  if (msg.content === Prefix + 'commands') {
    msg.reply('Commands are /Creator /info Thats all :( Sorry)');
  }
});

client.on('message', msg => {
  if (msg.content === Prefix + 'Test') {
    msg.reply('Marcus is a creep!');
  }
});
// THIS  MUST  BE  THIS  WAY
client.login('MzcwNzcwMzAwMDA0MjA0NTQ3.DMr6Rw.P8Ahxicps6lHbCHwtTG_22TT6uY');
