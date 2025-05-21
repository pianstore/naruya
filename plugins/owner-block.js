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

let handler = async (m, { text, conn, usedPrefix, command }) => {
let why = `🍩 *Contoh: ${usedPrefix + command} @${m.sender.split("@")[0]}*`
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
if (!who) return conn.reply(m.chat, why, m, { mentions: [m.sender] })
let res = []
switch (command) {
case 'blok':
case 'block':
await conn.updateBlockStatus(who, 'block').then(() => {
res.push(who)
})
break
case 'unblok':
case 'unblock':
await conn.updateBlockStatus(who, 'unblock').then(() => {
res.push(who)
})
break
}
if (res[0]) conn.reply(m.chat, `🍓 *Sukses ${command} ${res.map(v => '@' + v.split('@')[0]).join(', ')}*`, m, { mentions: res })
}

handler.help = ['block', 'unblock']
handler.tags = ['owner']
handler.command = /^(block|unblock)$/i
handler.owner = true

export default handler