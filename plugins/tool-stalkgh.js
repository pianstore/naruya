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
if (!text) return m.reply(`🍰 *Contoh: ${usedPrefix + command} naruyaizumi*`)
await global.loading(m, conn)
try {
let res = await fetch(global.API('btz', '/api/stalk/github', { username: text }, 'apikey'))
if (!res.ok) throw '❌ Tidak bisa mengakses data GitHub.'
let json = await res.json()
if (!json.status || !json.result?.user) throw '🙈 Data tidak ditemukan atau username salah.'
let user = json.result.user
let caption = `
🍓 *GITHUB STALKER*
🧁 *Nama: ${user.name || '-'}*
🍰 *Username: @${user.username}*
🍬 *Bio:* ${user.bio || '-'}
🍪 *Company: ${user.company || '-'}*
🍩 *Blog: ${user.blog || '-'}*
🍮 *Repositori Publik: ${user.publicRepos}*
🍫 *Gists Publik: ${user.publicGists}*
🍧 *Follower: ${user.followers}*
🍦 *Following: ${user.following}*
🧋 *Akun Dibuat: ${new Date(user.createdAt).toLocaleDateString('id-ID')}*
🧃 *Terakhir Update: ${new Date(user.updatedAt).toLocaleDateString('id-ID')}*
🥮 *Link: ${user.githubUrl}*
`.trim()
await conn.sendFile(m.chat, user.avatarUrl, 'github.jpg', caption, m)
} catch (e) {
console.error(e)
m.reply(typeof e === 'string' ? e : '🥀 Gagal mengambil data GitHub.')
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['stalkgh']
handler.tags = ['tools']
handler.command = /^(stalkgh|ghstalk)$/i
handler.register = true

export default handler