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

let handler = async (m, { text, command, usedPrefix }) => {
if (!text) return m.reply(`Contoh Penggunaan :\n${usedPrefix + command} Apakah Aku Boleh Main Ff`)
const caption = `
*Pertanyaan:* ${text}
*Jawaban:* ${response.getRandom()}`.trim()
m.reply(caption, false, { mentions: await conn.parseMention(caption) })
}
handler.help = ['kerangajaib']
handler.tags = ['kerang']
handler.command = /^(kulit)?kerang(ajaib)?$/i
handler.register = true
export default handler

const response = [
'Mungkin suatu hari',
'Tidak juga',
'Tidak keduanya',
'Kurasa tidak',
'Ya',
'Boleh',
'Mungkin',
'Ya, Mungkin',
'Coba tanya lagi',
'Tidak ada'
]
