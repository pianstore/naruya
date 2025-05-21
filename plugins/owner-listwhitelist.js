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
let token = global.config.gh
let repo = 'naruyaizumi/naruyaizumi'
let path = 'api/data/pairing.json'
let api = `https://api.github.com/repos/${repo}/contents/${path}`
let res = await fetch(api, {
headers: { Authorization: `token ${token}` }
})
if (!res.ok) throw '🍮 *Gagal mengambil daftar whitelist dari GitHub!*'
let json = await res.json()
let content = JSON.parse(Buffer.from(json.content, 'base64').toString())
let whitelist = content.whitelist
if (!Array.isArray(whitelist) || whitelist.length === 0) return m.reply('🍡 *Belum ada nomor dalam whitelist!*')
let teks = `🍰 *DAFTAR NOMOR WHITELIST* 🍰\n━━━━━━━━━━━━━━━━\n\n`
teks += whitelist.map((obj, i) => `*${i + 1}. ${obj.nomor}*`).join('\n')
await conn.sendMessage(m.chat, { text: teks }, { quoted: m })
}

handler.help = ['listwhitelist']
handler.tags = ['owner']
handler.command = /^(listwhitelist|listwl)$/i
handler.owner = true

export default handler