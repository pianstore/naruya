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

let handler = async (m, { conn }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply('*Fotonya Mana? Reply gambar atau upload*')
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Tipe ${mime} tidak didukung!`)
await global.loading(m, conn)
let img = await q.download()
let image = await upscale(img)
await conn.sendFile(m.chat, image, '', '', m)
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['hdr']
handler.tags = ['ai']
handler.command = /^(hd(r)?)$/i
handler.premium = true
handler.register = true

export default handler

async function upscale(imageData) {
try {
const api = 'https://inferenceengine.vyro.ai'
const version = '1'
const formData = new FormData()
formData.append('model_version', version)
formData.append('image', new Blob([imageData]), 'input.png')
const response = await fetch(`${api}/upscale`, {
method: 'POST',
body: formData,
headers: { 'Accept': 'image/png' }
})
if (!response.ok) throw new Error(`Upscale gagal: ${response.statusText}`)
return response.arrayBuffer()
} catch (error) {
console.error('Terjadi kesalahan saat upscaling:', error)
return null
}
}