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

let handler = async(m, { conn, usedPrefix, args, command }) => {
try {
let txt = (args.length > 1 ? args.slice(1).join(' '): '') || ''
if (!/kucing|senyum|monyet/i.test(args[0]) || !txt) return m.reply(`
Masukan tema dan text

List Tema:
• kucing
• senyum
• monyet

Contoh:
${usedPrefix + command} kucing lucu
`.trim())
await global.loading(m, conn)
let res = `https://ik.imagekit.io/aygemuy/tr:ot-${txt},ots-400,otc-ffff00,or-50/${args[0]}.jpg`
await conn.sendFile(m.chat, res, false, '', m, false)
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}
handler.help = ['kitmeme']
handler.tags = ['maker']
handler.command = /^(kitmeme)$/i
handler.register = true
handler.premium = true
export default handler