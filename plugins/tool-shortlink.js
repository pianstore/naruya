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

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `🔗 *Masukkan URL yang ingin dipersingkat!*\n📌 *Contoh: ${usedPrefix + command} https://google.com*`
let url = args[0]
try {
await global.loading(m, conn)
let res1 = await fetch(global.API("lol", "/api/shortlink", { url }))
let json1 = await res1.json()
if (json1.status !== 200) throw "❌ Gagal mempersingkat dengan API pertama!"
let res2 = await fetch(global.API("lol", "/api/shortlink3", { url }))
let json2 = await res2.json()
if (json2.status !== 200) throw "❌ Gagal mempersingkat dengan API kedua!"
await conn.sendMessage(m.chat, {
text: `
*🎯 Short Link Generator*
🔗 *Original: ${url}*
━━━━━━━━━━━━━━━━━━━
✨ *Hasil Shortlink:*
*1. ${json1.result}*
*2. ${json2.result}*
━━━━━━━━━━━━━━━━━━━
`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: "Shortlink Generator",
body: "🔗 Dapatkan link pendek dengan mudah!",
thumbnailUrl: "https://i.supa.codes/7PSuz4",
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply(`❌ *Terjadi Kesalahan!*\n⚠️ *Detail:* ${e.message}`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["shortlink"]
handler.tags = ["tools"]
handler.command = /^(short(url|link)?)$/i
handler.limit = true
handler.register = true

export default handler