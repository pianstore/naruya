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

let handler = async (m, { text, usedPrefix, command }) => {
if (!text) return m.reply(`*Masukan logs* \n\n*Contoh :* \n*${usedPrefix + command} downloader-ig.js|Memperbaiki error*`)
let logs = global.db.data.bots.logs
logs.history = logs.history ? logs.history : []
let [fitur, update] = text.split('|')
if (!fitur) return m.reply('*Masukan nama file yang di update*')
if (!update) return m.reply('*Masukan updatean nya*')
let d = new Date
let date = d.toLocaleDateString('id', {
day: 'numeric',
month: 'long',
year: 'numeric'
})
logs.history.push({
fitur: fitur,
update: update,
date: date
})
m.reply('*Berhasil!*')
}
handler.help = ['addlogs']
handler.tags = ['owner']
handler.command = /^(addlog(s)?)$/i
handler.owner = true
export default handler