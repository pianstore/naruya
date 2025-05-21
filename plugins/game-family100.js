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
const winScore = 1000

let handler = async (m, { conn, usedPrefix }) => {
conn.family = conn.family ? conn.family : {}
let id = m.chat
if (id in conn.family)
return conn.reply(m.chat, '🍮 *Masih ada kuis yang belum terjawab di chat ini!*', conn.family[id].msg)
let src = JSON.parse(fs.readFileSync('./json/family100.json', 'utf-8'))
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
🍭 *Family 100!*
📖 *Soal: ${json.soal}*
🍡 *Jumlah Jawaban: ${json.jawaban.length} jawaban${json.jawaban.find(v => v.includes(' ')) ? '*\n🍬 *Note: Beberapa jawaban mengandung spasi*' : ''}
🎁 *Bonus: +${winScore} XP per jawaban benar*
`.trim()
conn.family[id] = {
id,
msg: await m.reply(caption),
...json,
terjawab: Array.from(json.jawaban, () => false),
winScore,
}
}

handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i
handler.onlyprem = true
handler.game = true
handler.register = true

export default handler