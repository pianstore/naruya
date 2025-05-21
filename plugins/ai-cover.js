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

import { aiCover } from "../lib/scrape.js"
import fs from "fs"

let handler = async (m, { conn, usedPrefix, command, text }) => {
try {
conn.coverai = conn.coverai || {}
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/audio/.test(mime)) return m.reply(`Balas/Reply Audio dengan command *${usedPrefix + command}*`)
let char = Object.keys(characters).find(v => v === text)
if (!char) return m.reply(`
Masukan nama Character!

List Character : 
${Object.keys(characters).map(v => {
return `*•* ${v}` 
}).join("\n")}

Contoh:
${usedPrefix + command} zeta
`.trim())
if (typeof conn.coverai[m.sender] !== "undefined") return m.reply("Audiomu masih diproses!")
await global.loading(m, conn)
conn.coverai[m.sender] = "proses"
let media = await q.download()
let cover = await aiCover(char, media)
await conn.sendFile(m.chat, cover.base64, "", "", m, true)
} finally {
await global.loading(m, conn, true)
delete conn.coverai[m.sender]
}
}
handler.help = ["coverai"]
handler.tags = ["ai"]
handler.command = /^((ai)?cover(ai)?)$/i
handler.premium = true
handler.register = true

export default handler

const characters = {
"kobo": 2,
"zeta": 0,
"gura": 20,
"kaela": 4,
"pekora": 6,
"miko": 8,
"subaru": 10,
"korone": 12,
"luna": 14,
"anya": 16,
"reine": 18,
"calli": 22,
"kroni": 24
}