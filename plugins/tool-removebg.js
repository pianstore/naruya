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

let handler = async (m, { conn, usedPrefix, command }) => {
try {
let api = global.config.rbg
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply(`🍡 *Ayo balas gambar dulu, sayangku!*\n\n🍰 *Contoh: ${usedPrefix + command} gambar*`)
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`🍬 *Hmm, format file salah~*\n\n🧁 *Gunakan gambar JPG atau PNG yaa~*`)
await global.loading(m, conn)
let img = await q.download()
if (!img) return m.reply('🍫 *Gagal mengunduh gambar*\n\n🍰 *Coba cek koneksi kamu yaa~*')
let form = new FormData()
form.append('image_file', img, 'image.jpg')
form.append('size', 'auto')
let res = await fetch('https://api.remove.bg/v1.0/removebg', {
method: 'POST',
headers: {
'X-Api-Key': api
},
body: form
})
if (!res.ok) throw await res.text()
let buffer = Buffer.from(await res.arrayBuffer())
let filesize = Buffer.byteLength(buffer)
let filename = 'removebg_result.png'
await conn.sendMessage(m.chat, {
image: buffer,
fileName: filename,
mimetype: 'image/png',
caption: `
🍓 *Gambar selesai diproses!* 🧁
━━━━━━━━━━━━━━━━━━━━
📂 *Nama File: ${filename}*
📏 *Ukuran File: ${(filesize / 1024).toFixed(2)} KB*
🍰 *Status: Background berhasil dihapus!*
━━━━━━━━━━━━━━━━━━━━
`.trim()
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply(`🍩 *Ehh, ada kesalahan teknis~* 🍬`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['removebg']
handler.tags = ['tools']
handler.command = /^(removebg)$/i
handler.premium = true
handler.register = true

export default handler