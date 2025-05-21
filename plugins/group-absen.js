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

let handler = async (m, { conn, usedPrefix, command, text }) => {
let id = m.chat
let data = global.db.data.bots.absen[id]
if (!data) {
global.db.data.bots.absen[id] = {}
data = global.db.data.bots.absen[id]
}
switch (text) {
case 'start': {
if (data.tanggal) return m.reply(`🍩 *Masih ada absen aktif di grup ini~*\n\n*Ketik ${usedPrefix + command} delete untuk menghapus absen.*`)
m.reply('🍓 *Absen dimulai! Silakan ketik .absen atau .hadir ya~*')
data.tanggal = new Date() * 1
data.absen = []
data.close = false
break
}
case 'close': {
if (!data.tanggal) return m.reply(`🍰 *Belum ada absen aktif~*\n*Gunakan ${usedPrefix + command} start* untuk memulai.*`)
if (data.close) return m.reply('🍬 *Absen sudah ditutup sebelumnya~*')
m.reply('🍮 *Absen berhasil ditutup~*')
data.close = true
break
}
case 'delete': {
if (!data.tanggal) return m.reply(`🍰 *Tidak ada data absen~*\n*Gunakan ${usedPrefix + command} start* untuk memulai.*`)
delete global.db.data.bots.absen[id]
m.reply('🧁 *Absen berhasil dihapus~*')
break
}
case 'cek': {
if (!data.tanggal) return m.reply(`🍰 *Belum ada absen dimulai~*\n*Gunakan ${usedPrefix + command} start untuk memulai.*`)
let d = new Date(data.tanggal)
let date = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
let list = data.absen.map((v, i) => `*│ ${i + 1}. @${v.split`@`[0]}*`).join('\n')
m.reply(`
*「 ABSEN 」${data?.close ? " (DITUTUP)" : ""}*

📅 *Tanggal: ${date}*

*┌ Yang sudah absen:*
*│*
*│ Total: ${data.absen.length}*
${list}
*│*
*└────*
`.trim(), false, { contextInfo: { mentionedJid: data.absen } })
break
}
case 'help': {
m.reply(`
📖 *Panduan Absen:*
*${usedPrefix + command} start → Memulai absen*
${usedPrefix + command} delete → Menghapus data* absen*
${usedPrefix + command} cek → Melihat siapa saja yang sudah absen*
${usedPrefix + command} close → Menutup absen*
${usedPrefix + command} → Digunakan oleh member untuk absen*

🧁 *Gunakan dengan bijak ya sayang~*
`.trim())
break
}
default: {
if (!data.tanggal) return m.reply(`🍩 *Belum ada absen dimulai~*\n*Gunakan ${usedPrefix + command} start untuk memulai.*`)
if (data.close) return m.reply('🍓 *Absen sudah ditutup, tidak bisa absen lagi ya~*')
if (data.absen.includes(m.sender)) return m.reply('🍎 *Kamu sudah absen sayang~*')
data.absen.push(m.sender)
await m.reply('🧁 *Absen kamu berhasil dicatat, makasih ya~*')
let d = new Date(data.tanggal)
let date = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
let list = data.absen.map((v, i) => `*│ ${i + 1}. @${v.split`@`[0]}*`).join('\n')
await m.reply(`
📅 *Tanggal: ${date}*

*┌「 Daftar Absen 」*
*├ Total: ${data.absen.length}*
${list}
*└────*

🍬 *Untuk melihat panduan, ketik:*
*${usedPrefix + command} help*
`.trim(), false, { contextInfo: { mentionedJid: data.absen } })
break
}
}
}

handler.help = ['absen']
handler.tags = ['group']
handler.command = /^(absen|hadir)$/i
handler.group = true
handler.register = true

export default handler