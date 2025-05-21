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
await global.loading(m, conn)
let res = await fetch('https://api.nekorinn.my.id/anime/otakudesu-schedule')
let json = await res.json()
if (!json.status || !json.result) return m.reply('❌ Gagal mengambil data jadwal anime.')
let teks = '🍰 *Jadwal Rilis Anime Otakudesu Mingguan:* 🍰\n\n'
for (let hari of json.result) {
teks += `🍩 *${hari.day}*\n`
for (let anime of hari.anime_list) {
teks += `🍬 ${anime.anime_name}\n🍯 ${anime.url}\n`
}
teks += '\n'
}
await conn.sendMessage(m.chat, {
text: teks.trim(),
contextInfo: {
externalAdReply: {
title: '🍓 Otakudesu Anime Schedule',
body: '🍡 Klik link untuk nonton anime favoritmu!',
thumbnailUrl: 'https://i.ibb.co/SVnKxsn/otakudesu.jpg',
mediaType: 1,
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
}, { quoted: m })
} catch (e) {
console.error(e)
m.reply('❌ Terjadi kesalahan saat mengambil data jadwal anime.')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['jadwalanime']
handler.tags = ['anime']
handler.command = /^(jadwalanime|animeupdate|animejadwal)$/i
handler.register = true

export default handler