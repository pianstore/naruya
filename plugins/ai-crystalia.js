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

let handler = async (m, { conn, usedPrefix, command, args }) => {
conn.crystalia = conn.crystalia || {}
if (!args[0]) {
return m.reply(`🩵 *Gunakan: ${usedPrefix + command} on / off*\n\n*Contoh: ${usedPrefix + command} on*`)
}
if (args[0].toLowerCase() === 'on') {
conn.crystalia[m.chat] = {
active: true,
sessionid: Date.now().toString()
}
return m.reply('🌸 *Crystalia telah diaktifkan!*\n*Kamu bisa ngobrol dengannya sekarang~*')
}
if (args[0].toLowerCase() === 'off') {
delete conn.crystalia[m.chat]
return m.reply('🍓 *Crystalia dimatikan.*\n*Dia akan diam dan tidak membalas lagi.*')
}
return m.reply(`🧁 *Opsi hanya "on" atau "off", sayang~*\n*Contoh: ${usedPrefix + command} on*`)
}

handler.help = ['crystalia']
handler.tags = ['ai']
handler.command = /^(crystalia|beb)$/i
handler.owner = true

export default handler