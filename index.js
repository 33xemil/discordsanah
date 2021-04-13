const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log("Działa!")
  console.log(`Zalogowano jako ${client.user.tag}!`)
})

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
})

client.on("message", (msg) => {
  if (msg.content === "!sanah") {
    msg.reply("https://www.youtube.com/channel/UCqTRe9EIv0apJgPqkng-Gtw")
  }
})


client.on("message", (msg) => {
  if (msg.content === "!.irenka") {
    msg.reply("7 maja premiera :))")
  }
})


client.login("ODMwNjk2NzM0MTIwMzQ1NjMy.YHKcnw.d4S73qkmoG8z5N-wwlumRiJSJNE")
