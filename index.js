const Discord = require("discord.js")

const TOKEN = "NDY4NTAwMzY3OTg2OTE3Mzg2.DjMHkQ.ezHdPnmUWm3ZAXobJ_qpg53vIAY"
const PREFIX = ".";

var bot = new Discord.Client();

bot.on("Ready", function() {
    console.log("Ready");
    bot.user.setActivity("New Users", {type: 2});
});
