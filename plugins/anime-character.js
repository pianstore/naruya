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

import { character } from '../lib/scrape.js'

const handler = async (m, { conn, text, usedPrefix, command }) => {
try {
if (!text) return m.reply(`*Masukan Nama Character!* \n\n> *Contoh : \n${usedPrefix + command} Raiden*`)
await global.loading(m, conn)
const { name, image, detail, voice_actor, animeography, mangaography } = await character(text)
const caption = `
*Name : ${name}*

${detail.replace('>', '').trim()}

*Anime :*
${animeography.map(v => `• ${v.name} ( ${v.status} )`).join('\n')}

*Manga :*
${mangaography.map(v => `• ${v.name} ( ${v.status} )`).join('\n')}

*Voice Actor :*
${voice_actor.map(v => `• ${v.name} ( ${v.origin} )`).join('\n')}
`.trim()

await conn.sendFile(m.chat, image, false, caption, m)
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}
handler.help = ['character']
handler.tags = ['anime']
handler.command = /^(chara(cter)?)$/i
handler.limit = true
handler.register = true

export default handler
