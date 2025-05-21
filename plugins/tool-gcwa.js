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

let handler = async (m, { conn, args }) => {
let text = args.join(" ")
if (!text) throw "🚀 Masukkan kata kunci pencarian!"
let res = await fetch(global.API("btz", "/api/search/linkgroupwa", { text1: text }, "apikey"))
if (!res.ok) throw "❌ Gagal mengambil data!"
let json = await res.json()
if (!json.status || !json.result.length) throw "🔍 Tidak ditemukan grup yang sesuai!"
let first = json.result[0]
let others = json.result.slice(1).map(v => `*• ${v.title}*\n🔗 *${v.link}*`).join("\n\n") || "⛔ Tidak ada grup lain."
await conn.sendMessage(m.chat, {
text: `
🍓 *Hasil Pencarian: ${text}* 🍓
──────────────────────────────
🍰 *Judul: ${first.title}*
🍬 *Deskripsi: ${first.desc}*
🍭 *Link: ${first.link}*
──────────────────────────────
🧁 *Rekomendasi Grup Lainnya:*

${others}
`.trim(),
ai: true,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: first.title,
body: "🔍 Hasil pencarian grup WhatsApp",
thumbnailUrl: first.thumb,
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: m })
}

handler.help = ['gcwa']
handler.tags = ['tools']
handler.command = /^((group(wa)?|gcwa)(-link)?)$/i
handler.limit = true
handler.register = true

export default handler