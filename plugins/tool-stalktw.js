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
if (!text) return m.reply(`🍰 *Contoh: ${usedPrefix + command} jokowi*`)
await global.loading(m, conn)
try {
let res = await fetch(global.API('btz', '/api/stalk/twitter', { username: text }, 'apikey'))
if (!res.ok) throw '❌ Tidak bisa mengakses data Twitter.'
let json = await res.json()
if (!json.status || !json.result) throw '🙈 Data tidak ditemukan.'
let { profileImage, bio, id, username, fullName, follower, following, totalPosts, favoritCount, createdAt, location } = json.result
let caption = `
🍓 *TWITTER STALKER*
🧁 *Nama: ${fullName}*
🍰 *Username: @${username}*
🍬 *Bio:* ${bio || '–'}
🍪 *Follower: ${follower.toLocaleString()}*
🍩 *Following: ${following.toLocaleString()}*
🍮 *Tweet: ${totalPosts}*
🍡 *Like: ${favoritCount}*
🍫 *Lokasi: ${location || '–'}*
🍧 *Bergabung: ${new Date(createdAt).toLocaleDateString('id-ID')}*
`.trim()
await conn.sendFile(m.chat, profileImage, 'twstalk.jpg', caption, m)
} catch (e) {
console.error(e)
m.reply(typeof e === 'string' ? e : '🥀 Gagal mengambil data Twitter.')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['twstalk']
handler.tags = ['tools']
handler.command = /^(twstalk|stalktw)$/i
handler.register = true

export default handler