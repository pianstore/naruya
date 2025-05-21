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

let handler = async (m, { conn, args, text }) => {
if (!args.length) return m.reply(`🍩 *Contoh:*\n*.creategc Nama Grup, @user1 @user2*\n*.creategc Nama Grup 628xxx 628xxx*`)
let sender = m.sender.endsWith('@s.whatsapp.net') ? m.sender : m.sender + '@s.whatsapp.net'
let [namePart, ...userParts] = text.split(/[,;]/)
let groupName = namePart.trim()
if (!groupName) return m.reply(`🍰 *Berikan nama grupnya dulu ya sayang~*`)
let mentionedJid = m.mentionedJid || []
let numberMatches = userParts.join(" ").match(/\d{5,}/g) || []
let userList = [
...new Set([
...mentionedJid,
...numberMatches.map(n => n.replace(/\D/g, '') + '@s.whatsapp.net')
])
]
if (userList.length === 0) return m.reply(`🍡 *Minimal satu anggota harus ditambahkan ya sayang~*`)
if (!userList.includes(sender)) userList.unshift(sender)
try {
let initialUsers = userList.slice(0, 3)
let group = await conn.groupCreate(groupName, initialUsers)
await conn.groupParticipantsUpdate(group.id, [sender], 'promote')
let remainingUsers = userList.slice(3)
if (remainingUsers.length > 0) {
let chunks = chunkArray(remainingUsers, 5)
for (let users of chunks) {
await conn.groupParticipantsUpdate(group.id, users, 'add')
await delay(1000)
}
}
await conn.sendMessage(group.id, {
text: `🍓 *Hai semuanya! Grup ini dibuat oleh @${m.sender.split`@`[0]}*\n🧁 *Selamat datang di grup ${groupName}!*`,
mentions: [m.sender]
})
m.reply(`🎉 *Grup ${groupName} berhasil dibuat dan anggota berhasil ditambahkan!*`)
} catch (e) {
console.error(e)
m.reply(`❌ *Gagal membuat grup atau menambahkan anggota. Mungkin ada nomor tidak valid atau diblokir.*`)
}
}
function chunkArray(arr, size) {
let result = []
for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size))
return result
}
function delay(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}

handler.help = ['creategroup']
handler.tags = ['group']
handler.command = /^(creategroup|creategc)$/i
handler.owner = true

export default handler