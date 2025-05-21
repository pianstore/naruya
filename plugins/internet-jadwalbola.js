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

let handler = async (m, { command, usedPrefix }) => {
let f = await fetch(API('https://api.lolhuman.xyz', '/api/jadwalbola', null, 'apikey'))
let xx = await f.json()
let teks = xx.result.map(v => {
return `  
_*${v.match}*_
🏆Event: ${v.event}
⏲️Waktu: _${v.time}_
📺Channel Tv: ${v.tv}
`.trim()
}).filter(v => v).join('\n\n')
await m.reply(teks)
}
handler.help = ['jadwalbola']
handler.tags = ['internet']
handler.command = /^jadwalbola$/i
handler.register = true
export default handler