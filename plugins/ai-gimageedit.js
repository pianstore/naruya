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

import { GoogleGenAI, Modality } from '@google/genai'
import fs from 'fs'

const ai = new GoogleGenAI({ apiKey: 'AIzaSyAQehTkMsU5W-JnYXe-JBZeHBFoS1AFMe0' })
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`✨ *Contoh:* ${usedPrefix + command} tambahkan llama di sebelah kanan gambarnya`)
let q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/image/.test(mime)) return m.reply('🖼️ *Kirim atau reply gambar yang ingin diedit~*')
let media = await q.download()
let base64Image = media.toString('base64')
let contents = [
{ text },
{
inlineData: {
mimeType: mime,
data: base64Image
}
}
]
let response = await ai.models.generateContent({
model: "gemini-2.0-flash-exp-image-generation",
contents,
config: {
responseModalities: [Modality.TEXT, Modality.IMAGE]
}
})
for (const part of response.candidates[0].content.parts) {
if (part.text) {
await m.reply(part.text)
} else if (part.inlineData) {
let buffer = Buffer.from(part.inlineData.data, 'base64')
await conn.sendFile(m.chat, buffer, 'gemini-image.png', '🖌️ *Hasil editan Gemini siap!*', m)
}
}
}

handler.help = ['gimageedit']
handler.tags = ['ai']
handler.command = /^(gimageedit)$/i
handler.register = true
handler.limit = true

export default handler