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

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner }) => {
let [_, code, expired] = text.match(linkRegex) || []
if (!code) return m.reply('🍓 *Link grup tidak valid ya sayang~*\n\nContoh:\n.join https://chat.whatsapp.com 3')
let res = await conn.groupAcceptInvite(code).catch(e => m.reply('🍎 *Gagal join grup! Pastikan link aktif dan bot tidak diblokir~*'))
if (!res) return
expired = Math.floor(Math.min(9999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
m.reply(`🍡 *Berhasil masuk ke grup!* ${expired ? `\n📆 *Aktif selama ${expired} hari*` : ''}`)
let chats = global.db.data.chats[res]
if (!chats) chats = global.db.data.chats[res] = {}
let now = new Date() * 1
let tambah = expired * 24 * 60 * 60 * 1000
chats.expired = (chats.expired && chats.expired > now) ? chats.expired + tambah : now + tambah
await conn.sendMessage(res, {
text: `🍡 *Halo Semuanya!*\n\n*Terima kasih sudah mengundang aku ke grup ini~*\n*Aku adalah bot asisten yang siap membantu dengan fitur-fitur keren dan bermanfaat~*\n\n*Kalau kalian butuh bantuan atau pengen tanya-tanya, bisa langsung hubungi ownerku ya~*`,
contextInfo: {
mentionedJid: [global.owner[0]],
externalAdReply: {
showAdAttribution: true,
title: "Hubungi Owner Bot",
body: "Klik untuk chat langsung yaa~",
thumbnailUrl: "https://i.supa.codes/maIe14",
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}
}
})
await conn.sendContact(res, global.config.owner, `📞 Kontak Owner`)
}

handler.help = ['join']
handler.tags = ['owner']
handler.command = /^(join)$/i
handler.owner = true

export default handler

const isNumber = (x) => {
x = parseInt(x)
return typeof x === 'number' && !isNaN(x)
}