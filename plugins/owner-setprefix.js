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
if (!args[0]) return m.reply(`🌸 *Contoh penggunaan:*
*${usedPrefix + command} ~*
*${usedPrefix + command} ~•π÷×§∆*
*${usedPrefix + command} no*
*${usedPrefix + command} reset*`)
let input = args[0].toLowerCase()
if (input === 'reset') {
opts['prefix'] = '‎/!#.\\'
return m.reply('🌸 *Prefix berhasil direset ke default*')
}
if (input == 'no') {
opts['prefix'] = 'noprefix'
return m.reply('🌸 *Mode tanpa prefix berhasil diaktifkan*')
}
let escaped = input.replace(/[|\\{}()[\]^$+*?.\-]/g, '\\$&')
opts['prefix'] = new RegExp('^[' + escaped + ']')
return m.reply(`🌸 *Prefix berhasil diubah menjadi "${args[0]}"*`)
}

handler.help = ['setprefix']
handler.tags = ['owner']
handler.command = /^(setprefix|prefix)$/i
handler.mods = true

export default handler