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

let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {
if (!event) return await conn.reply(m.chat, `*Contoh Penggunaan:*
*${usedPrefix + command} welcome @user*
*${usedPrefix + command} bye @user*
*${usedPrefix + command} promote @user*
*${usedPrefix + command} demote @user*`.trim(), m)
let mentions = text.replace(event, '').trimStart()
let who = mentions ? conn.parseMention(mentions) : []
let part = who.length ? who : [m.sender]
let act = false
m.reply(`*❃ Simulating ${event}...*`)
switch (event.toLowerCase()) {
case 'add':
case 'invite':
case 'welcome':
act = 'add'
break
case 'bye':
case 'kick':
case 'leave':
case 'remove':
act = 'remove'
break
case 'promote':
act = 'promote'
break
case 'demote':
act = 'demote'
break
default:
return await conn.reply(m.chat, `*Contoh Penggunaan:*
*${usedPrefix + command} welcome @user*
*${usedPrefix + command} bye @user*
*${usedPrefix + command} promote @user*
*${usedPrefix + command} demote @user*`.trim(), m)
}
if (act) return conn.participantsUpdate({
id: m.chat,
participants: part,
action: act
})
}
handler.help = ['simulate']
handler.tags = ['group']
handler.command = /^(simulate|simulation|simulasi)$/i
handler.owner = true
handler.group = true
export default handler