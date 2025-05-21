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
if (!text) return m.reply(`🍰 *Contoh: ${usedPrefix + command} naruyaizumi_*`)
await global.loading(m, conn)
try {
let res = await fetch(global.API('btz', '/api/stalk/ig', { username: text }, 'apikey'))
if (!res.ok) throw '❌ Tidak dapat mengakses API.'
let json = await res.json()
if (!json.status || !json.result) throw '🙈 Akun tidak ditemukan atau mungkin private.'
let { username, fullName, bio, followers, following, postsCount, photoUrl } = json.result
let caption = `
🍓 *INSTAGRAM STALKER*
🧁 *Nama: ${fullName}*
🍰 *Username: @${username}*
🍬 *Bio:* ${bio || '–'}
🍪 *Post: ${postsCount}*
🍩 *Follower: ${followers}*
🍮 *Following: ${following}*
`.trim()
await conn.sendFile(m.chat, photoUrl, 'igstalk.jpg', caption, m)
} catch (e) {
console.error(e)
m.reply(typeof e === 'string' ? e : '🥀 Terjadi kesalahan saat mengambil data Instagram.')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['igstalk']
handler.tags = ['tools']
handler.command = /^(igstalk|stalkig)$/i
handler.register = true
handler.limit = true

export default handler