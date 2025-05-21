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

let handler = async (m, { conn, args, participants, command }) => {
let targets = []
if (m.mentionedJid.length) targets.push(...m.mentionedJid)
if (m.quoted && m.quoted.sender) targets.push(m.quoted.sender)
for (let arg of args) {
if (/^\d{5,}$/.test(arg)) targets.push(arg.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
}
targets = [...new Set(targets)].filter(v => v !== m.sender && participants.some(p => p.id === v))
if (!targets.length) return m.reply(`🍩 *Tag atau reply anggota yang ingin dikeluarkan ya sayang~*\n\n*Contoh:* *.kick @628xx*`)
for (let target of targets) {
await conn.groupParticipantsUpdate(m.chat, [target], 'remove')
if (/^dor$/i.test(command)) {
await m.reply(`🔫 *DORRR!!!* 🍬 Target berhasil dikeluarkan ya sayang~`)
} else {
await m.reply(`🍓 *@${target.split('@')[0]} berhasil dikeluarkan dari grup!*`, null, { mentions: [target] })
}
await delay(1500)
}
}

handler.help = ['kick']
handler.tags = ['group']
handler.command = /^(kick|k|dor)$/i
handler.group = true
handler.botAdmin = true
handler.admin = true

export default handler

const delay = ms => new Promise(res => setTimeout(res, ms))