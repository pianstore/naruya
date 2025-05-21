import { createCanvas, loadImage } from 'canvas'
import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`*Format salah!*\n*Contoh: ${usedPrefix + command} VPS 75000, PANEL 12000*`)

let items = text.split(',').map(v => v.trim())
let list = []
let total = 0
for (let item of items) {
let [nama, harga] = item.split(/\s+/)
if (!nama || !harga || isNaN(harga)) continue
list.push({ nama, harga: parseInt(harga) })
total += parseInt(harga)
}
let canvas = createCanvas(1000, 1000)
let ctx = canvas.getContext('2d')
try {
let bg = await loadImage(global.config.logo)
ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
} catch (e) {
ctx.fillStyle = '#ffffff'
ctx.fillRect(0, 0, canvas.width, canvas.height)
}
ctx.fillStyle = 'rgba(0,0,0,0.6)'
ctx.fillRect(70, 70, 860, 860)
ctx.shadowColor = 'white'
ctx.shadowBlur = 10
ctx.fillStyle = '#ffffff'
ctx.font = 'bold 46px Sans'
ctx.fillText('INVOICE PEMBELIAN', 210, 150)
ctx.shadowColor = 'black'
ctx.shadowBlur = 8
ctx.fillStyle = '#f5f5f5'
ctx.font = '28px Sans'
ctx.fillText(`Nomor: IZM${new Date().toISOString().slice(0,10).replace(/-/g,'')}`, 100, 220)
ctx.fillText('Nama: Customer', 100, 270)
ctx.fillText(`Tanggal: ${new Date().toLocaleDateString('id-ID')}`, 100, 320)
let y = 400
ctx.font = '26px Sans'
for (let item of list) {
ctx.fillText(`- ${item.nama.toUpperCase()} ......... Rp${item.harga.toLocaleString('id-ID')}`, 100, y)
y += 50
}
ctx.font = 'bold 32px Sans'
ctx.fillStyle = '#ffffff'
ctx.fillText(`TOTAL BAYAR: Rp${total.toLocaleString('id-ID')}`, 100, y + 40)
ctx.font = 'bold 28px Sans'
ctx.fillStyle = '#00FF00'
ctx.fillText('STATUS: BERHASIL', 100, y + 100)
ctx.font = 'italic 24px Sans'
ctx.fillStyle = '#cccccc'
ctx.fillText('Terima kasih atas pesanan Anda~', 100, y + 160)
ctx.font = 'bold 16px Sans'
ctx.fillStyle = '#999999'
ctx.fillText('Copyright © 2024-2025 Naruya Izumi', 100, 970)
let buffer = canvas.toBuffer('image/png')
let filename = `./tmp/invoice-${m.sender.split('@')[0]}.png`
fs.writeFileSync(filename, buffer)
await conn.sendFile(m.chat, filename, 'invoice.png', `
🧾 *𝙏𝙍𝘼𝙉𝙎𝘼𝙆𝙎𝙄 𝘽𝙀𝙍𝙃𝘼𝙎𝙄𝙇*⚡
━━━━━━━━━━━━━━━━━━
*✿ 𝙏𝙀𝙍𝙄𝙈𝘼𝙆𝘼𝙎𝙄𝙃 𝙏𝙀𝙇𝘼𝙃 𝙏𝙀𝙇𝘼𝙃 𝙈𝙀𝙈𝘽𝙀𝙇𝙄 𝙋𝙍𝙊𝘿𝙐𝙆 𝙄𝙕𝙐𝙈𝙄 𝙎𝙀𝙈𝙊𝙂𝘼 𝘽𝙀𝙍𝙈𝘼𝙉𝙁𝘼𝘼𝙏 ✿*
━━━━━━━━━━━━━━━━━━
*✆ Admin : 083143663697* 
━━━━━━━━━━━━━━━━━━
> *𝙉𝙖𝙧𝙪𝙮𝙖 𝙄𝙯𝙪𝙢𝙞 • 𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡*`, m)
setTimeout(() => {
fs.unlinkSync(filename)
}, 15000)
}

handler.help = ['done']
handler.tags = ['tools']
handler.command = /^done$/i
handler.owner = true

export default handler