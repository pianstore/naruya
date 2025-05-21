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
let token = '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'
let repo = 'naruyaizumi/naruyaizumi'
let path = 'api/data/logs.json'
let api = `https://api.github.com/repos/${repo}/contents/${path}`
let res = await fetch(api, {
headers: { Authorization: `token ${token}` }
})
if (!res.ok) throw '🍮 *Gagal mengambil log pairing dari GitHub!*'
let json = await res.json()
let content = JSON.parse(Buffer.from(json.content, 'base64').toString())
if (!Array.isArray(content) || content.length === 0) return m.reply('🧁 *Belum ada data log request pairing!*')
let grouped = {}
for (let log of content) {
let { number, status } = log
if (!grouped[number]) grouped[number] = { success: 0, failed: 0 }
grouped[number][status === 'success' ? 'success' : 'failed']++
}
let teks = `🍩 *LOG REQUEST PAIRING*\n🍬━━━━━━━━━━━━━━━━━━━🍬\n`
let i = 1
for (let [num, stat] of Object.entries(grouped)) {
teks += `🍡 *${i++}. @${num}*\n  🍰 *Sukses: ${stat.success}*\n🍧 *Gagal: ${stat.failed}*\n\n`
}
await conn.sendMessage(m.chat, {
text: teks,
mentions: Object.keys(grouped).map(n => n + '@s.whatsapp.net')
}, { quoted: m })
}

handler.help = ['ceklogs']
handler.tags = ['owner']
handler.command = /^(ceklogs)$/i
handler.owner = true

export default handler