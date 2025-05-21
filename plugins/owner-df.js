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

import { join } from 'path'
import { unlinkSync, existsSync } from 'fs'

let handler = async (m, { conn, args, usedPrefix, command, __dirname }) => {
let allPlugins = Object.keys(plugins).map(v => v.replace('.js', ''))
if (!args[0]) return m.reply(`🍓 *Masukkan nama plugin yang mau dihapus~*\n\n*Contoh: ${usedPrefix + command} menu*`)
if (!allPlugins.includes(args[0])) {
let list = allPlugins.map(v => `🍡 ${v}`).join('\n')
return m.reply(`🍰 *Plugin "${args[0]}" tidak ditemukan~*\n\n*Berikut daftar yang tersedia:*\n\n${list}`)
}
let file = join(__dirname, '../plugins/' + args[0] + '.js')
if (!existsSync(file)) return m.reply('🍎 *File tidak ditemukan di folder plugins~*')
unlinkSync(file)
m.reply(`🍎 *Berhasil menghapus file: plugins/${args[0]}.js*\n🍩 *Plugin telah dihapus dari sistem.*`)
}

handler.help = ['deletefile']
handler.tags = ['owner']
handler.command = /^(df|deletefile)$/i
handler.mods = true

export default handler