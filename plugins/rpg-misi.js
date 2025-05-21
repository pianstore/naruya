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

let handler = async (m, { conn, usedPrefix, command }) => {
await global.loading(m, conn)
let list = [
[".ojek", "1", "🛵 Ojek — Antar jemput penumpang sambil ngunyah permen~"],
[".polisi", "2", "👮 Polisi — Tangkap penjahat dan jaga keamanan kota"],
[".roket", "3", "🚀 Astronot — Misi luar angkasa mencari alien imut"],
[".taxy", "4", "🚖 Supir Taxy — Ngegas sampai penumpang muntah"],
[".pembunuh", "5", "🔪 Pembunuh Bayaran — Selesaikan targetmu diam-diam"],
[".youtuber", "6", "🎥 YouTuber — Bikin konten prank dan jadi viral"],
[".pilot", "7", "✈️ Pilot — Terbangkan pesawat dan hindari turbulensi"],
[".guru", "8", "📚 Guru — Mengajar sambil ngopi cantik di kelas"],
[".hacker", "9", "💻 Hacker — Bobol sistem bank buat dapet cuan"],
[".psk", "10", "💋 PSK — Peluk sana sini cari pelanggan kaya~"],
[".ninja", "11", "🥷 Ninja — Lari di atap buat nganter surat cinta"],
[".penyanyi", "12", "🎤 Penyanyi — Bawain lagu romantis di kafe malam"],
[".penjudi", "13", "🎲 Penjudi — Coba hoki mu di meja judi"],
[".pengacara", "14", "⚖️ Pengacara — Bela klien sampe bebas total"],
[".vlog", "15", "📸 Vlogger — Jalan-jalan sambil nge-vlog ala selebgram"],
[".spy", "16", "🕵️ Spy — Misi rahasia jadi mata-mata luar negeri"]
]
await conn.textList(m.chat, `🍡 *PILIH MISI RPG*`, false, list, m, {
contextInfo: {
externalAdReply: {
mediaType: 1,
showAdAttribution: true,
title: "Misi Harian RPG Kamu~",
body: "Pilih profesi, jalanin misi, dan dapetin cuan~!",
thumbnail: fs.readFileSync("./media/thumbnail.jpg"),
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
})
await global.loading(m, conn, true)
}

handler.help = ['misi']
handler.tags = ['rpg']
handler.command = /^(misi)$/i
handler.group = true
handler.register = true
handler.rpg = true

export default handler