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

import * as cheerio from 'cheerio'
import https from 'https'

let handler = async (m, { text, conn }) => {
m.reply(`*⏳ Tungguin dulu ya kak, videonya dikirim ke private chat~ 🍭*`)
await global.loading(m, conn)
let cr = await xhentai()
let tan = cr[Math.floor(Math.random() * cr.length)]
let vap = `
🍩 *Judul: ${tan.title}*
🍬 *Kategori: ${tan.category}*
🍫 *Mimetype: ${tan.type}*
🍪 *Dilihat: ${tan.views_count}*
🍯 *Dibagikan: ${tan.share_count}*
🍰 *Sumber: ${tan.link}*
🍧 *Media: ${tan.video_1}*
`.trim()
await conn.sendMessage(m.sender, {
video: { url: tan.video_1 },
caption: vap
}, { quoted: m })
await global.loading(m, conn, true)
}

handler.help = ['vidhentai']
handler.command = /^(vidhentai)$/i
handler.tags = ['nsfw']
handler.premium = true
handler.register = true
handler.nsfw = true
handler.age = 18

export default handler

async function xhentai() {
let page = Math.floor(Math.random() * 1153)
let url = `https://sfmcompile.club/page/${page}`
let res = await fetch(url, { agent: new https.Agent({ rejectUnauthorized: false }) })
let html = await res.text()
let $ = cheerio.load(html)
let hasil = []
$('#primary > div > div > ul > li > article').each((_, b) => {
hasil.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
})
return hasil
}