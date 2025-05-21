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

let handler = async(m, { conn }) => {
try {
await global.loading(m, conn)
let res = await (await fetch('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')).json()
let data = res.Infogempa.gempa
let mmiInfo = data.Dirasakan ? `📍 *Wilayah yang Merasakan : ${data.Dirasakan} Skala MMI*` : `📍 *Wilayah yang Merasakan : Tidak ada data*`
let teks = `🍓 *Info Gempa Terkini - BMKG* 🍓
━━━━━━━━━━━━━━━━━━━
📅 *Tanggal : ${data.Tanggal}*
🕒 *Waktu : ${data.Jam} WIB*
🕒 *UTC : ${data.DateTime}*
📍 *Lokasi : ${data.Wilayah}*
🌐 *Koordinat : ${data.Coordinates}*
💥 *Magnitudo : ${data.Magnitude}*
📏 *Kedalaman : ${data.Kedalaman}*
⚠️ *Potensi : ${data.Potensi}*
━━━━━━━━━━━━━━━━━━━
${mmiInfo}
🗺️ *Shakemap : Terlampir di atas*
━━━━━━━━━━━━━━━━━━━
🍰 *Sumber: BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)*
`.trim()
await conn.sendFile(m.chat, 'https://data.bmkg.go.id/DataMKG/TEWS/' + data.Shakemap, 'map.jpg', teks, m)
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}
handler.help = ['infogempa']
handler.tags = ['internet']
handler.command = /^(infogempa)$/i
handler.limit = true
handler.register = true
export default handler