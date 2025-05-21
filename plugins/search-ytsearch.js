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
if (!text) return m.reply(`🍬 *Masukkan kata kunci pencarian dulu ya!* \n\n🍭*Contoh: ${usedPrefix + command} Serana*`)
try {
await global.loading(m, conn)
let res = await fetch(`https://api.hiuraa.my.id/search/youtube?q=${encodeURIComponent(text)}`)
let json = await res.json()
if (!json.status || !json.result || !json.result.length) return m.reply('*Video tidak ditemukan!*')
let list = json.result.map((v, i) => {
return [`.play ${v.link}`, (i + 1).toString(), `${v.title}\nDurasi: ${v.duration}\nChannel: ${v.channel}`]
})
await conn.textList(m.chat, `🍰 *Terdapat ${json.result.length} Hasil Pencarian YouTube!* 🍩\n🍓 *Silahkan pilih Video/Audio yang kamu cari yaa~*`, false, list, m, {
contextInfo: {
externalAdReply: {
showAdAttribution: false,
mediaType: 1,
title: json.result[0].title,
body: json.result[0].channel,
thumbnail: (await conn.getFile(json.result[0].imageUrl)).data,
renderLargerThumbnail: true,
mediaUrl: json.result[0].link,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
})
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['ytsearch']
handler.tags = ['search']
handler.command = /^(yt(s|search)|youtubesearch)$/i
handler.limit = true

export default handler