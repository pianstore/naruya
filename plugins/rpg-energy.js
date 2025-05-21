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
let maxEnergy = 50 + user.level * 5
let energy = user.energy
let caption = `
${bar(energy, maxEnergy)}
⚡ *${energy} / ${maxEnergy}*
`.trim()
m.reply(caption)
}

handler.help = ['energy']
handler.tags = ['rpg']
handler.command = /^(energy|energi)$/i
handler.register = true
handler.group = true
handler.rpg = true

export default handler

function bar(current, max) {
let length = 15
let filledBars = Math.round(current / max * length)
let emptyBars = length - filledBars
return `⚡ ${"█".repeat(filledBars)}${"░".repeat(emptyBars)}`
}