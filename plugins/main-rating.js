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
if (!text) return m.reply(
`*╭─❀  Rating Bot Ini  ❀*
*│ Berikan penilaian dari 1 - 5*
*│*
*│ Contoh:"
*│ ${usedPrefix + command} 5*
*│*
*│ Setelah memberi rating,*
*│ kamu bisa menambahkan ulasan:*
*│ ${usedPrefix}ulasan <pendapat kamu>*
*╰───────────────❀*`)
if (!isNumber(text)) return m.reply("*❀ Masukkan hanya angka 1 hingga 5 ya!*")
if (global.db.data.users[m.sender]?.rate) return m.reply("*❀ Kamu sudah memberi rating.\nGunakan *.ulasan* untuk menambahkan pendapat.*")
if (text < 1 || text > 5) return m.reply("*❀ Nilai tidak valid! Harus dari 1 hingga 5.*")
m.reply(`*❀ Terima kasih atas rating ${text}-nya!*\n*Kamu bisa ketik .ulasan <isi> untuk menambahkan pendapat.*`)
global.db.data.bots.rating[m.sender] = {
rate: +text,
ulasan: ""
}
global.db.data.users[m.sender].rate = true
}

handler.help = ['rate']
handler.tags = ['main']
handler.command = /^(rate|rating)$/i
handler.register = true

export default handler

function isNumber(value) {
value = parseInt(value)
return typeof value === 'number' && !isNaN(value)
}