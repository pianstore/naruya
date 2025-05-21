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

import { load } from 'cheerio'

let handler = async (m, { conn, usedPrefix, command, text }) => {
try {
if (!text) return m.reply(`🌸 *Masukkan Query!*\n\n🌼 *Contoh: ${usedPrefix + command} Anime*`)
await global.loading(m, conn)
let data = await stickerTele(text)
if (data.length == 0) return m.reply(`❌ *Tidak dapat menemukan ${text}!*`)
let list = data.map((v, i) => {
return `🌟 *ID: ${v.id}*\n🎀 *Title: ${v.title}*\n🖼️ *Total Sticker: ${v.stickers.length}*\n🔗 *Link: ${v.telegramLink}*`
}).join("\n\n")
await m.reply(list)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["stele"]
handler.tags = ["sticker"]
handler.command = /^((s|stiker|sticker)(tele(gram)?))$/i
handler.register = true
handler.limit = true
export default handler

const stickerTele = async (query) => {
try {
let response = await fetch(`https://combot.org/stickers?q=${query}`, {
headers: { 'User-Agent': 'Mozilla/5.0 (Linux Android 10 K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36' }
})
let html = await response.text()
let $ = load(html)
let result = []
$('.stickerset').each((index, element) => {
let id = $(element).attr('id')
let dataData = $(element).attr('data-data')
let parsedData = JSON.parse(dataData)
let title = parsedData.title
let stickers = []
$(element).find('.stickerset__image').each((i, imgElement) => {
stickers.push($(imgElement).attr('data-src'))
})
let telegramLink = $(element).find('a[target="_blank"]').attr('href')
result.push({
id,
title,
stickers,
telegramLink
})
})
return result
} catch (error) {
console.error('❌ Error fetching data:', error)
return []
}
}