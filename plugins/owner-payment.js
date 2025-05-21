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

import fs from 'fs'
import { createCanvas, loadImage } from 'canvas'

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text || isNaN(text) || text <= 0)
return m.reply(`❌ *Format salah!*\n\n*Contoh: ${usedPrefix + command} 5000*`)
let amount = parseInt(text)
let qrisData = global.config.qris
let apiUrl = global.API("btz", "/api/tools/create-qr", { qr: qrisData, ammount: amount }, "apikey")
let response = await fetch(apiUrl)
if (!response.ok) return m.reply('⚠️ *Gagal membuat QRIS, coba lagi nanti!*')
let json = await response.json()
if (!json.status) return m.reply('⚠️ *QRIS gagal dibuat, coba lagi nanti!*')
let qrRes = await fetch(json.result)
let imgBuffer = Buffer.from(await qrRes.arrayBuffer())
let path = './tmp/qris.png'
fs.writeFileSync(path, imgBuffer)
let bufferImage = await modif(path, amount)
let caption = `
💳 *PAYMENT NARUYA IZUMI*
━━━━━━━━━━━━━━━━━━
💰 *Nominal: Rp${toRupiah(amount)}*
🏷️ *Scan QR untuk membayar!*
━━━━━━━━━━━━━━━━━━
📥 *Jangan lupa kirim bukti pembayaran yaa~!*
`.trim()
await conn.sendFile(m.chat, bufferImage, 'qris.png', caption, m)
}

handler.help = ["payment"]
handler.tags = ["owner"]
handler.command = /^(pay|payment)$/i
handler.owner = true

export default handler

async function modif(path, amount) {
let width = 600, height = 750
let canvas = createCanvas(width, height)
let ctx = canvas.getContext('2d')
let gradient = ctx.createLinearGradient(0, height, 0, 0)
gradient.addColorStop(0, '#000000')
gradient.addColorStop(1, '#0A192F')
ctx.fillStyle = gradient
ctx.fillRect(0, 0, width, height)
ctx.shadowColor = 'rgba(0, 200, 255, 0.4)'
ctx.shadowBlur = 50
ctx.fillRect(0, 0, width, height)
ctx.shadowBlur = 0
let qrImage = await loadImage(path)
ctx.shadowColor = 'rgba(0, 200, 255, 0.7)'
ctx.shadowBlur = 40
ctx.drawImage(qrImage, 100, 150, 400, 400)
ctx.shadowBlur = 0
ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
ctx.fillRect(95, 145, 410, 410)
ctx.fillStyle = 'white'
ctx.font = 'bold 35px Arial'
ctx.textAlign = 'center'
ctx.shadowColor = 'rgba(0, 200, 255, 0.7)'
ctx.shadowBlur = 20
ctx.fillText('QRIS NARUYA IZUMI', width / 2, 70)
ctx.shadowBlur = 0
ctx.fillStyle = 'white'
ctx.font = 'bold 30px Arial'
ctx.shadowColor = 'rgba(0, 200, 255, 0.7)'
ctx.shadowBlur = 15
ctx.fillText(`Rp ${toRupiah(amount)}`, width / 2, 635)
ctx.shadowBlur = 0
return canvas.toBuffer('image/png')
}

let toRupiah = number => parseInt(number).toLocaleString('id-ID')
