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

let handler = async (m, { conn, command, text }) => {

if (!text) return conn.reply(m.chat, '*Ketik Namanya Tolol!*', m)

conn.reply(m.chat, `
╭━━━━°「 *Memek ${text}* 」°
┃
┊ *• Nama : ${text}*
┃ *• memek : ${pickRandom(['ih item','Belang wkwk','Mulus kak buat owner ku aja','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}*
┊ *• lubang : ${pickRandom(['perawan','ga perawan','udah pernah dimasukin','masih rapet','tembem'])}*
┃ *• jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}*
╰═┅═━––––––๑
`.trim(), m)
}
handler.help = ['cekmemek']
handler.tags = ['fun']
handler.command = /^cekmemek/i
handler.limit = true
handler.register = true
export default handler 

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
