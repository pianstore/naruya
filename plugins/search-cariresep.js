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
if (!text) return conn.reply(m.chat, `🍰 *Masukkan nama resep yang ingin dicari!*\n\n*Contoh: ${usedPrefix + command} ayam goreng*`, m)
await global.loading(m, conn)
try {
let res = await fetch(`https://api.hiuraa.my.id/search/cookpad?q=${encodeURIComponent(text)}`)
let json = await res.json()
if (!json.status || !json.result || json.result.length === 0) throw '❌ *Resep tidak ditemukan!*'
let hasil = json.result.map((v, i) => {
return `🍱 *${v.name}*
👩‍🍳 *${v.author}*
⏱️ *Waktu masak: ${v.cookTime || '-'}*
*${v.link}*
━━━━━━━━━━━━━━━━━━━━`
}).join("\n\n")
let thumb = 'https://i.supa.codes/-BkLOg'
conn.sendMessage(m.chat, {
text: hasil,
contextInfo: {
externalAdReply: {
title: json.result[0].name,
body: `${json.result[0].author} · ⏱️ ${json.result[0].cookTime || '-'}`,
thumbnailUrl: thumb,
mediaType: 1,
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
}, { quoted: m })

} catch (e) {
console.error(e)
m.reply('❌ *Terjadi kesalahan saat mengambil resep.*')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['resep']
handler.tags = ['internet']
handler.command = /^(resep)$/i
handler.limit = true
handler.register = true

export default handler