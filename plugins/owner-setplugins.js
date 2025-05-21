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

let handler = async (m, { args }) => {
let [command, property, value] = args
if (!command || !property || typeof value === 'undefined')
return m.reply(`👧🏻 *Contoh penggunaan:*\n*.setplugin tiktok premium true/false*`)
let plugin = Object.values(global.plugins).find(p =>
Array.isArray(p.help) && p.help.map(h => h.toLowerCase()).includes(command.toLowerCase())
)
if (!plugin) return m.reply('❌ *Plugin tidak ditemukan!*')
let allowed = ['owner', 'premium', 'limit', 'admin', 'group', 'rpg', 'game', 'nsfw']
if (!allowed.includes(property))
return m.reply(`📝 *Properti tidak dikenali!*\n\n📌 *Bisa diatur:*\n${allowed.map(v => `*• ${v}*`).join('\n')}`)
plugin[property] = value === 'true'
m.reply(`✨ *Berhasil! Properti ${property} untuk plugin ${command} telah diatur ke ${value}*`)
}

handler.help = ['setplugin']
handler.tags = ['owner']
handler.command = /^(setplugin)$/i
handler.mods = true

export default handler