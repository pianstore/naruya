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
await global.loading(m, conn)
try {
const responseLol = await fetch(global.API('lol', '/api/checkapikey', {}, 'apikey'))
if (!responseLol.ok) throw new Error(`Gagal mendapatkan data dari API LOL. Status: ${responseLol.status}`)
const jsonLol = await responseLol.json()
const { username: usernameLol, requests: requestsLol, today: todayLol, account_type: accountTypeLol, expired: expiredLol } = jsonLol.result
const responseBtz = await fetch(global.API('btz', '/api/checkkey', {}, 'apikey'))
if (!responseBtz.ok) throw new Error(`Gagal mendapatkan data dari API BTZ. Status: ${responseBtz.status}`)
const jsonBtz = await responseBtz.json()
const { username: usernameBtz, admin, limit, role, expired, todayHit, totalHit } = jsonBtz.result
let message = `
🎀 *Informasi API Key* 🌸
━━━━━━━━━━━━━━━━━━━
👤 *Username: ${usernameLol}*
📊 *Total Requests: ${requestsLol}*
📅 *Requests Hari Ini: ${todayLol}*
💎 *Tipe Akun: ${accountTypeLol}*
📆 *Masa Aktif Berakhir: ${expiredLol}*
━━━━━━━━━━━━━━━━━━━
👤 *Username: ${usernameBtz}*
📊 *Total Requests: ${totalHit}*
📅 *Requests Hari Ini: ${todayHit}*
✨ *Limit: ${limit}*
💎 *Tipe Akun: ${role}*
📆 *Expired Dalam: ${expired}*
━━━━━━━━━━━━━━━━━━━
✨ *Gunakan API ini dengan bijak dan efisien!*
`.trim()
await conn.sendMessage(m.chat, { text: message }, { quoted: m })
} catch (error) {
console.error('Error:', error)
m.reply(`
❌ *Terjadi Kesalahan Teknis!*
⚠️ *Detail:* ${error.message}
`)
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['cekapikey']
handler.tags = ['info']
handler.command = /^(cekapikey|cekapi)$/i
handler.mods = true

export default handler