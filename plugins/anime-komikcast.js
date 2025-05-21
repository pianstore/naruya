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

import { Komikcast } from "../lib/scrape.js"
import pkg from 'baileys'
import { PDFDocument } from "pdf-lib"

const { extractImageThumb } = pkg

let komikcast = new Komikcast()
let handler = async (m, { conn, usedPrefix, command, text }) => {
try {
switch (command) {
case 'komikcast': {
if (!text) return m.reply(`*Masukan nama komik yang kamu cari!* \n\n> *Contoh: \n${usedPrefix + command} solo leveling*`)
await global.loading(m, conn)
let result = await komikcast.search(text)
if (result.length == 0) return m.reply(`Tidak dapat menemukan *${text}* silahkan periksa kembali kata kunci anda`)
let list = result.map((v, i) => {
return [`${usedPrefix}komikcast-detail ${v.link}`, (i + 1).toString(), `${v.title} \nType : ${v.type} \nChapter : ${v.chapter}`]
})
await conn.textList(m.chat, `Terdapat *${result.length} Komik*`, false, list, m)
}
break
case "komikcast-detail": {
await global.loading(m, conn)
let result = await komikcast.detail(text)
let caption = `
Title : ${result.title}
Genres : ${result.genres.join(", ")}
Release : ${result.released}${result.author ? `\nAuthor : ${result.author}` : ""}
Status : ${result.status}
Type : ${result.type}

Synopsis :
${result.synopsis}
`.trim()
let list = result.chapters.map((v, i) => {
return [`${usedPrefix}komikcast-chapter ${v.url}`, (i + 1).toString(), `${v.number} \n${v.timeAgo}`]
})
await conn.textList(m.chat, caption, result.image, list, m)
}
break
case "komikcast-chapter": {
await global.loading(m, conn)
let result = await komikcast.chapter(text)
let images = result.images.map(v => "https://external-content.duckduckgo.com/iu/?u=" + v)
let { data } = await conn.getFile(result.images[0])
let jpegThumbnail = await extractImageThumb(data)

let pdfDoc = await PDFDocument.create()
for (let url of images) {
let res = await fetch(url)
let imgBytes = new Uint8Array(Buffer.from(await res.arrayBuffer()))
let image = await pdfDoc.embedJpg(imgBytes).catch(async () => await pdfDoc.embedPng(imgBytes))
let page = pdfDoc.addPage([image.width, image.height])
page.drawImage(image, {
x: 0,
y: 0,
width: image.width,
height: image.height
})
}
let pdfBytes = await pdfDoc.save()
let pdfBuffer = Buffer.from(pdfBytes)

await conn.sendMessage(m.chat, {
document: pdfBuffer,
fileName: `${result.title}.pdf`,
mimetype: 'application/pdf',
jpegThumbnail
}, {
quoted: m
})
}
break
default:
}
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["komikcast"]
handler.tags = ["anime"]
handler.command = /^(komikcast(-detail|-chapter)?)$/i
handler.limit = true
handler.register = true

export default handler