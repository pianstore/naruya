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

let handler = async (m, { text, usedPrefix, command }) => {
if (!text) return m.reply(`*Masukan Nama Negara!*\n\n*Contoh :\n${usedPrefix + command} indonesia*`)
let res = await fetch(API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
let json = await res.json()
if (!json.confirmed) return m.reply('*Negara?*')
m.reply(`
*🌏 Negara : ${text}*
*✅ Terkonfirmasi : ${json.confirmed.value}*
*📉 Sembuh : ${json.recovered.value}*
*☠️ Meninggal : ${json.deaths.value}*
*💌 Update Info : ${json.lastUpdate}*
`.trim())
}
handler.help = ['covid']
handler.tags = ['internet']
handler.command = /^(corona|covid|covid19)$/i
handler.register = true
export default handler