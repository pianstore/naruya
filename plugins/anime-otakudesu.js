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
if (!text) return m.reply(`🔍 *Masukkan judul anime batch yang ingin dicari!*\n\n*Contoh: ${usedPrefix + command} naruto*`)
try {
await global.loading(m, conn)
let res = await fetch(`https://api.nekorinn.my.id/anime/otakudesu-search?q=${text}`)
let json = await res.json()
if (!json.status || !json.result || !json.result.length) return m.reply('❌ *Anime tidak ditemukan!*')
let anime = json.result[0]
let detail = await fetch(`https://api.nekorinn.my.id/anime/otakudesu-detail?url=${anime.url}`)
let det = await detail.json()
if (!det.status || !det.result) return m.reply('❌ *Gagal mengambil detail anime.*')
let {
title, japanese_title, rating, produser, type, status,
episode_count, duration, release_date, studio,
genres, synopsis, batch
} = det.result
let caption = `
🍥 *${title}*
━━━━━━━━━━━━━━━━━━━
🍡 *Jepang: ${japanese_title}*
🍩 *Tipe: ${type}*
🍙 *Status: ${status}*
🍫 *Episode: ${episode_count}*
🍵 *Durasi: ${duration}*
🍓 *Studio: ${studio}*
🍬 *Rating: ${rating}*
🍮 *Genre: ${genres}*
🥞 *Rilis: ${release_date}*
🍪 *Produser: ${produser}*
━━━━━━━━━━━━━━━━━━━
🍨 *Sinopsis:*
${synopsis || '*Belum tersedia.*'}
━━━━━━━━━━━━━━━━━━━
🍰 *Batch:* ${batch?.uploaded_at || '-'}
🔗 *${anime.url}*
`.trim()
await conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: title,
body: 'Klik untuk menonton di Otakudesu!',
thumbnailUrl: anime.poster,
mediaType: 1,
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply('❌ Terjadi kesalahan saat mencari anime.')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['otakudesu']
handler.tags = ['anime']
handler.command = /^(otakudesu)$/i
handler.limit = true
handler.register = true

export default handler