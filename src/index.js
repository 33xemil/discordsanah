const { Client } = require("discord.js")
const chalk = require("chalk")

const { TOKEN } = require("..src/config/config.js")

const client = new Client()

const log = console.log

client.on("ready", () => {
  log(chalk.green(`Zalogowano jako ${client.user.tag}!`))

  // ========== TEST
  // User joined guild
  // client.emit("guildMemberAdd", client.guilds.cache.get("358614500758257665").members.cache.get("257954238339088384"))
  // User left guild
  // client.emit("guildMemberRemove", client.guilds.cache.get("358614500758257665").members.cache.get("257954238339088384"))

  // Initialize interval for each guild
  client.settings.forEach((config, guildId) => {
    const { guilds } = client
    // Check if guild exist
    if (guilds.cache.has(guildId)) {
      const guild = guilds.cache.get(guildId)
      // Check if available
      if (guild.available) {
        // console.log("available")

        // Set Interval for each channel
        const clockChannels = config.clocks
        setInterval(() => {
          const time = new Date().toLocaleTimeString().slice(0, 5)
          const channelName = `🕥 ${time}`

          clockChannels.forEach((channelId, index) => {
            // Check if channel exists
            if (guild.channels.cache.has(channelId)) {
              // log("channel exist")
              const channelToUpdate = guild.channels.cache.get(channelId)
              channelToUpdate.setName(channelName)
            } else {
              // log("not exist")
              // Remove Id from config
              // that does not exist
              clockChannels.splice(index, 1)
              client.saveConfig(guildId)
            }
          })
        }, 60 * 1000)
      }
    }
  })
})

// Connect with Discord
client.login(ODMwNjk2NzM0MTIwMzQ1NjMy.YHKcnw.d4S73qkmoG8z5N-wwlumRiJSJNE)

// Error handler - omit crashed
client.on("debug", () => {})
client.on("warn", () => {})
client.on("error", () => {})
