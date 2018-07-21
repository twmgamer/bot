const Discord = require("discord.js")

const TOKEN = process.env.token;
const PREFIX = ".";

var bot = new Discord.Client();

bot.on("Ready", function() {
    console.log("Ready");
    bot.user.setActivity("New Users", {type: 2});
});
