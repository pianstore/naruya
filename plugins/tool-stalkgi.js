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

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`🍰 *Contoh: ${usedPrefix + command} 843829161*`)
await global.loading(m, conn)
try {
let res = await fetch(global.API('btz', '/api/stalk/genshin', { id: text }, 'apikey'))
if (!res.ok) throw '❌ Tidak bisa mengakses data Genshin.'
let json = await res.json()
if (!json.status || !json.result || !json.result.length) throw '🙈 Data tidak ditemukan.'
let data = json.result[0]
let { nickname, uid, level, worldLevel, achievement, spiralAbyss, detail, image } = data
let caption = `
🍓 *GENSHIN STALKER*
🧁 *Nickname: ${nickname}*
🍰 *UID: ${uid}*
🍬 *Adventure Rank: ${level}*
🍪 *World Level: ${worldLevel}*
🍩 *Achievement: ${achievement}*
🍮 *Spiral Abyss: ${spiralAbyss}*
🍫 *Detail:* ${detail}
`.trim()
await conn.sendFile(m.chat, image, 'genshin.jpg', caption, m)
} catch (e) {
console.error(e)
m.reply(typeof e === 'string' ? e : '🥀 Gagal mengambil data Genshin Impact.')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['stalkgi']
handler.tags = ['tools']
handler.command = /^(stalkgi|gistalk)$/i
handler.register = true

export default handler