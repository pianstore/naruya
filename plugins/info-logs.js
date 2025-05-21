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

import fs from 'fs'
let handler = async (m) => {
let logs = global.db.data.bots.logs
logs.history = logs.history ? logs.history : []
let header = '*𝙃𝙄𝙎𝙏𝙊𝙍𝙔 𝙇𝙊𝙂𝙎 𝙐𝙋𝘿𝘼𝙏𝙀* \n\n'
if (logs.history < 1) return m.reply('*Belum ada logs beb*')
let caption = logs.history.reverse().map((v, i) => {
return `
_*${i + 1}. Date ${v.date}*_
_*Name : ${v.fitur}*_
_*Description : ${v.update}*_

_*Update Fitur ${v.fitur}*_
`.trim()
}).join('\n\n')
conn.adReply(m.chat, header + caption, '𝙇𝙊𝙂𝙎 𝙐𝙋𝘿𝘼𝙏𝙀 𝙏𝙀𝙍𝘽𝘼𝙍𝙐 𝘿𝘼𝙍𝙄 𝙄𝙕𝙐𝙈𝙄', 'Setiap Update Pasti Dimasukan Kesini', fs.readFileSync('./media/thumbnail.jpg'), global.config.website, m)
}
handler.help = ['logs']
handler.tags = ['info']
handler.command = /^(log(s)?)$/i
handler.group = true
handler.register = true
export default handler