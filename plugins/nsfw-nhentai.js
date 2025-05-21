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
if (!text) return m.reply(`*Ketikkan judul doujin!*\n*Contoh: ${usedPrefix + command} milf*`)
await global.loading(m, conn)
try {
let res = await fetch(global.API("btz", "/api/webzone/nhentai-search", { query: text }, "apikey"))
let json = await res.json()
if (!json.status) throw 'Doujin tidak ditemukan!'
let list = json.result.result.map((v, i) => [
`${usedPrefix}nhdetail ${v.id}`,
(i + 1).toString(),
`📚 ${v.title.pretty || v.title.english}\n🗂️ ${v.lang} | 📄 ${v.num_pages} halaman`
])
await conn.textList(m.chat, `*Ditemukan ${json.result.result.length} hasil untuk: ${text}*`, false, list, m, {
contextInfo: {
externalAdReply: {
showAdAttribution: false,
mediaType: 1,
title: json.result.result[0].title.pretty || json.result.result[0].title.english,
body: `📄 ${json.result.result[0].num_pages} halaman | 🗂️ ${json.result.result[0].lang}`,
thumbnailUrl: json.result.result[0].cover.t,
renderLargerThumbnail: true,
mediaUrl: 'https://nhentai.net/g/' + json.result.result[0].id,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
})
} catch (e) {
console.error(e)
m.reply('Gagal mencari doujin atau koneksi error.')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['nhentai']
handler.tags = ['nsfw']
handler.command = /^nhentai$/i
handler.premium = true
handler.register = true
handler.nsfw = true
handler.age = 18

export default handler