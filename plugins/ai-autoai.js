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
if (!m.mentionedJid?.includes(conn.user.jid)) return
const botNumber = conn.user.jid
const text = (m.text || "").replace(new RegExp(`@${botNumber.split("@")[0]}`, "g"), "").trim()
if (!text) return m.reply("❔ *Mau tanya apa ke aku?*")
try {
await conn.sendPresenceUpdate('composing', m.chat)
let res = await fetch(`https://api.nekorinn.my.id/ai/ripleai?text=${text}`)
let json = await res.json()
if (!json.status || !json.result) throw '❌ *Gagal mendapatkan respons dari Riselia.*'
await conn.reply(m.chat, `*${json.result}*`, m)
} catch (e) {
console.error(e)
m.reply('❌ *Aku tidak bisa menjawab sekarang. Coba lagi nanti ya.*')
}
}

handler.customPrefix = /^@(\d+|[^\s@]+)\b/i
handler.command = new RegExp()

export default handler