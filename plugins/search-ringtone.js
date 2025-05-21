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

let handler = async (m, { conn, usedPrefix, command, text }) => {
try {
if (!text) return m.reply(`📌 *Masukkan kata kunci!*\n\n*Contoh: ${usedPrefix + command} oppo*`)
await global.loading(m, conn)
if (/^https?:\/\/.*\.mp3$/i.test(text.trim())) {
return conn.sendMessage(m.chat, {
audio: { url: text.trim() },
mimetype: 'audio/mpeg',
ptt: false,
fileName: 'ringtone.mp3'
}, { quoted: m })
}
let apiUrl = global.API("btz", "/api/search/ringtone", { text1: text }, "apikey")
let res = await fetch(apiUrl)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status || !json.result || json.result.length === 0)
return m.reply(`❌ *Tidak ditemukan ringtone untuk kata kunci: ${text}*`)
let list = json.result.map((v, i) => [`${usedPrefix}ringtone-detail ${v.audio}`, (i + 1).toString(), v.title.trim()])
await conn.textList(m.chat, `📱 *Ditemukan ${json.result.length} ringtone!*\n📌 *Pilih salah satu dari daftar:*`, false, list, m)
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi kesalahan!*\n\n${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['ringtone']
handler.tags = ['search']
handler.command = /^(ringtone|ringtone-detail)$/i
handler.register = true

export default handler