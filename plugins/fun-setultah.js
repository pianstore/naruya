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
global.db.data.bots.ultah[m.chat] = global.db.data.bots.ultah[m.chat] || {}
let ultah = global.db.data.bots.ultah[m.chat]
switch (command) {
case 'setultah':
case 'setulta':
if (typeof ultah[m.sender] !== "undefined") return conn.textList(m.chat, "*Kamu sudah mendaftarkan tanggal lahir kamu, apakah kamu ingin menggantinya?*", true, [[`> *${usedPrefix}delete-ultah iya*`, "Iya"], [`> *${usedPrefix}delete-ultah tidak*`, "Tidak"]], m)
if (!text) return m.reply(`*Masukan tanggal lahir kamu!* \n\n> *Contoh:* \n*${usedPrefix + command} 18-09-2004*`)
text = text.split(/-|\//)
if (text[0].split("").length > 2) return m.reply("*Tanggal yang kamu masukan tidak valid*")
if (text[1].split("").length > 2) return m.reply("*Bulan yang kamu masukan tidak valid*")
if (text[2].split("").length > 4 || text[2].split("").length < 4) return m.reply("*Tahun yang kamu masukan tidak valid*")

if (parseInt(text[0]) > 31) return m.reply("*Maksimal tanggal hanya 31 Hari*")
if (parseInt(text[1]) > 12) return m.reply("*Maksimal bulan hanya 12 Bulan*")
if (parseInt(text[2]) < 1970) return m.reply("*Invalid tahun!*")
if (parseInt(text[2]) >= (new Date().getFullYear())) return m.reply("*Dari masa depan lu?*")
if (parseInt(text[2]) > (new Date().getFullYear()) - 8) return m.reply("*Invalid!*")
m.reply(`*Berhasil kak!* \n> *_Silahkan cek dengan command ${usedPrefix}myultah_*`)
ultah[m.sender] = {
tanggal: parseInt(text[0]),
bulan: parseInt(text[1]),
tahun: parseInt(text[2])
}
break
case 'delete-ultah':
if (text === "tidak") return m.reply("Oke!")
m.reply(`*Sukses menghapus tanggal lahir*\n> *Silahkan masukan ulang dengan command ${usedPrefix}setultah*`)
delete ultah[m.sender]
break
default:
}
}
handler.help = ["setultah"]
handler.tags = ["fun"]
handler.command = /^(setulta(h)?|delete-ultah)$/i
handler.register = true
export default handler