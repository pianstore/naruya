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

let handler = async (m, { conn, args }) => {
try {
await global.loading(m, conn)
let text = args.slice(1).join(' ')
let who = m.quoted ? m.quoted.sender: m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? conn.user.jid: m.sender
await conn.sendFile(m.chat, API('https://some-random-api.com', '/canvas/its-so-stupid', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), dog: text || 'im+stupid'
}), 'error.png', `@${global.config.watermark}`, m)
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}
handler.help = ['sostupid']
handler.tags = ['maker']
handler.command = /^(sostupid)$/i
handler.premium = true
handler.register = true
export default handler