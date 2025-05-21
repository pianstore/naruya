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

let handler = async (m, { conn, text, usedPrefix, command }) => {
let [number, pesan] = text.split `|`
let mention = m.mentionedJid[0] 
? m.mentionedJid[0] 
: m.quoted 
? m.quoted.sender 
: number 
? number.replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
: false
if (!number) return conn.reply(m.chat, `🍓 *Masukkan nomor tujuan yaa~*\n*Contoh: ${usedPrefix + command} 628xxxx|Halo manis~*`, m)
if (!pesan) return conn.reply(m.chat, `🍰 *Isi pesannya mana sayang?*\n*Contoh: ${usedPrefix + command} 628xxxx|Selamat pagi! Udah sarapan belum?*`, m)
if (text.length > 1000) return conn.reply(m.chat, '🍬 *Pesannya kepanjangan~ (max 1000 karakter)*', m)
let pengirim = m.sender
let penerima = mention
let isi = `💌 *「 EMAIL 」*\n\n🍡 *Dari: @${pengirim.replace(/@.+/, '')}*\n💬 *Pesan:*\n${pesan.trim()}\n\n🍓 *Salam manis~*\n${global.wm}`
await conn.reply(penerima, isi, null, { mentions: [pengirim] })
let logs = `🍡 *Pesan berhasil dikirim ke @${number.split('@')[0]}*`
conn.reply(m.chat, logs, m)
}

handler.help = ['email']
handler.tags = ['owner']
handler.command = /^(email)$/i
handler.owner = true

export default handler