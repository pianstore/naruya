/*
██╗███████╗██╗░░░██╗███╗░░░███╗██╗
██║╚════██║██║░░░██║████╗░████║██║
██║░░███╔═╝██║░░░██║██╔████╔██║██║
██║██╔══╝░░██║░░░██║██║╚██╔╝██║██║
██║███████╗╚██████╔╝██║░╚═╝░██║██║
╚═╝╚══════╝░╚═════╝░╚═╝░░░░░╚═╝╚═╝
Note: Terimakasih Telah Membeli Script Ini Semoga Bermanfaat
Copyright © 2024 - 2025 Crystalia
꒰⚘꒱ Admin Contact ꒱⟡
𓅯 𝙉͢𝙖𝙧𝙪𝙮𝙖 𝙄͢𝙯𝙪𝙢𝙞
https://linkbio.co/naruyaizumi
𓅯 𝙑͢𝙡𝙞𝙣𝙚
WhatsApp: wa.me/6285770019354
𓅯 𝑺͢𝑿𝒁𝒏𝒊𝒈𝒉𝒕𝒎𝒂𝒓𝒆
WhatsApp: wa.me/6281398961382
*/

let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
let maxHealth = 100 + user.level * 10
let health = user.health
let caption = `
${bar(health, maxHealth)}
❤️ *${health} / ${maxHealth}*
`.trim()
m.reply(caption)
}

handler.help = ['health']
handler.tags = ['rpg']
handler.command = /^(health|darah)$/i
handler.register = true
handler.group = true
handler.rpg = true

export default handler

function bar(current, max) {
let length = 15
let filledBars = Math.round(current / max * length)
let emptyBars = length - filledBars
return `❤️ ${"█".repeat(filledBars)}${"░".repeat(emptyBars)}`
}