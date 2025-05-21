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

let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
if (!text) return m.reply(`❌ *Harap masukkan nama kota!*\n\n📌 *Contoh:*\n${usedPrefix + command} jakarta`)
await global.loading(m, conn)
let res = await fetch(global.API("lol", `/api/sholat/${text}`, "apikey"))
let json = await res.json()
if (!json.status || !json.result) return m.reply("❌ *Gagal mengambil jadwal sholat!*")
let { wilayah, tanggal, sahur, imsak, subuh, terbit, dhuha, dzuhur, ashar, maghrib, isya } = json.result
let msg = {
text: `🕌 *Jadwal Sholat - ${wilayah}*  
📅 *Tanggal: ${tanggal}*
━━━━━━━━━━━━━━━━━━━
🌅 *Sahur: ${sahur}*
🕌 *Imsak: ${imsak}*
🌙 *Subuh: ${subuh}*
🌄 *Terbit: ${terbit}*
☀️ *Dhuha: ${dhuha}*
🕛 *Dzuhur: ${dzuhur}*
🕒 *Ashar: ${ashar}*
🌆 *Maghrib: ${maghrib}*
🌌 *Isya: ${isya}*
━━━━━━━━━━━━━━━━━━━`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaType: 1,
title: `Jadwal Sholat - ${wilayah}`,
body: `Tanggal: ${tanggal}`,
thumbnailUrl: "https://i.supa.codes/IgHIYt",
renderLargerThumbnail: true,
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
}
await conn.sendMessage(m.chat, msg, { quoted: m })
} catch (e) {
console.error(e)
m.reply("❌ *Gagal mengambil jadwal sholat! Coba lagi nanti.*")
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ["jadwalsholat"]
handler.tags = ["islami"]
handler.command = /^(jadwalsholat)$/i
handler.register = true
handler.limit = true

export default handler