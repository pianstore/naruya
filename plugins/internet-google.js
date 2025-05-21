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
if (!text) return conn.reply(m.chat, `🍩 *Masukkan kata kunci pencarian!*\n\n*Contoh: ${usedPrefix + command} siapa presiden RI 2025*`, m)
await global.loading(m, conn)
try {
let res = await fetch(`https://api.hiuraa.my.id/search/google?q=${encodeURIComponent(text)}`)
let json = await res.json()
if (!json.status || !Array.isArray(json.result)) throw '❌ *Tidak ada hasil ditemukan!*'
let hasil = `🍓 *Hasil Pencarian Google:*

*1. ${json.result[0].title}*
*${json.result[0].desc}*
*${json.result[0].link}*

━━━━━━━━━━━━━━━━━━━━
🔎 *Berikut hasil lainnya:*`
for (let i = 1; i < json.result.length; i++) {
hasil += `

*${i + 1}. ${json.result[i].title}*
${json.result[i].link}`
}
let thumb = 'https://i.supa.codes/hCUzMt'
conn.sendMessage(m.chat, {
text: hasil,
contextInfo: {
externalAdReply: {
title: json.result[0].title,
body: json.result[0].desc,
thumbnailUrl: thumb,
mediaType: 1,
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply('❌ *Gagal mengambil hasil pencarian.*')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['google']
handler.tags = ['internet']
handler.command = /^(google)$/i
handler.limit = true
handler.register = true

export default handler