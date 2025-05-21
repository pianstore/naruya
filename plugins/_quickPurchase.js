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
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!conn.quickPurchase) conn.quickPurchase = {}
if (typeof conn.quickPurchase[m.sender] !== "undefined") return m.reply("*🌸 Kamu masih punya transaksi yang berjalan yaa~ Sabar sebentar duluu~*")
await global.loading(m, conn)
let [itemID, number, harga, produk, image] = text.split("|")
if (!itemID || !number || !harga || !produk || !image) {
return m.reply(`*Format salah yaa~*\n\n*Contoh:*\n${usedPrefix + command} ID123|628123456789|15000|Diamond 86 ML|https://i.supa.codes/gemshop`)
}
let randomCode = Math.floor(Math.random() * 100)
let trxId = generateRefID()
harga = (+harga + randomCode).toString()
let caption = `
🛒 *TRANSAKSI TELAH DIBUAT*
────────────────────────────
🧾 *ID Transaksi: ${trxId}*
🎁 *Produk: ${produk}*
💸 *Harga: Rp.${toRupiah(harga)}*
🕐 *Dibuat: ${formattedDate(Date.now())}*
⌛ *Expired: 10 menit*
────────────────────────────
📌 *Silahkan scan QRIS di atas dengan nominal yang tepat!* 

✨ *Setelah pembayaran berhasil, sistem akan otomatis memproses pesananmu!*
`.trim()
let button = [{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
display_text: "💰 SALIN NOMINAL",
id: 12345,
copy_code: harga
})
}]
await conn.sendButton(m.chat, caption, global.config.watermark, fs.readFileSync("./media/qris.jpg"), button, m)
conn.quickPurchase[m.sender] = {
chat: m.chat,
trxId: trxId,
itemID,
number,
harga,
produk,
image,
time: Date.now(),
expired: setTimeout(() => {
m.reply("*💔 Transaksi kamu udah expired yaa~*")
delete conn.quickPurchase[m.sender]
}, 600000)
}

await global.loading(m, conn, true)
}

handler.command = ["quickpurchase"]
export default handler

function generateRefID() {
return 'ref-' + Math.random().toString(36).substr(2, 9)
}

function toRupiah(number) {
return parseInt(number).toLocaleString('id-ID')
}

function formattedDate(ms) {
return moment(ms).tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm')
}