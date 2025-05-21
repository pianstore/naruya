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

import fs from 'fs'

global.fetch = fetch
global.session = global.session || {}
global.session.tiktok = global.session.tiktok || {}
let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
if (/ttsearch-detail/i.test(command)) {
let index = parseInt(args[0]) - 1
let list = global.session.tiktok[m.sender]
if (!list || !list[index]) return m.reply('🌸 *Data tidak ditemukan atau sudah kedaluwarsa.*')
let v = list[index]
let caption = `
🎥 *TikTok Search Result #${index + 1}*
━━━━━━━━━━━━━━━━━━━
📌 *Caption: ${v.title}*
👤 *Uploader: ${v.author?.nickname || v.author?.unique_id || '-'}*
📆 *Dibuat: ${new Date(v.create_time * 1000).toLocaleDateString("id-ID")}*
⏱ *Durasi: ${v.duration} detik*
👀 *Views: ${FormatNumber(v.play_count)}*
❤️ *Likes: ${FormatNumber(v.digg_count)}*
💬 *Komentar: ${FormatNumber(v.comment_count)}*
📡 *Shares: ${FormatNumber(v.share_count)}*
━━━━━━━━━━━━━━━━━━━
`.trim()
await conn.sendMessage(m.chat, {
video: { url: v.play },
caption: caption,
mimetype: 'video/mp4'
}, { quoted: m })
let res = await global.fetch(v.music)
let buffer = Buffer.from(Buffer.from(await res.arrayBuffer()))
await conn.sendMessage(m.chat, { audio: buffer, ptt: true, mimetype: 'audio/mpeg' }, { quoted: m })
return
}
let query = encodeURIComponent(args.join(" "))
if (!query) return m.reply(`🌸 *Masukkan judul video!*\n\n*Contoh: ${usedPrefix + command} Tobrut*`)
await global.loading(m, conn)
let api = await global.fetch(global.API("btz", "/api/search/tiktoks", { query }, "apikey"))
let json = await api.json()
let data = json.result?.data
if (!data || data.length === 0)
return m.reply('🌸 *Tidak ada hasil yang ditemukan.*')
global.session.tiktok[m.sender] = data
let list = data.map((v, i) => {
let titleShort = v.title.length > 50 ? v.title.slice(0, 50) + '..' : v.title
let desc = `⏱ ${v.duration}s | 👁 ${FormatNumber(v.play_count)}`
return [`${usedPrefix}ttsearch-detail ${i + 1}`, (i + 1).toString(), `${titleShort}\n${desc}`]
})
await conn.textList(m.chat, `🌸 *Ditemukan ${data.length} hasil*\n*Silakan pilih video:*`, false, list, m, {
contextInfo: {
externalAdReply: {
showAdAttribution: false,
mediaType: 1,
title: 'TikTok Search',
body: global.config.watermark,
thumbnail: fs.readFileSync("./media/thumbnail.jpg"),
renderLargerThumbnail: true,
mediaUrl: 'https://tiktok.com',
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
})
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['tiktoksearch']
handler.tags = ['search']
handler.command = /^(tiktoksearch|ttsearch(-detail)?)$/i
handler.premium = true
handler.register = true

export default handler

function FormatNumber(num) {
return Number(num || 0).toLocaleString('id-ID')
}