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

import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'

const defaultMenu = {
before: `
${wish()}

🌸 *I N F O   U S E R* 🌸
────────────────────────
🧚‍♀️ *Nama: %name*
🎀 *Status: %status*
🍭 *Limit: %limit*
📈 *Level: %level*
🧸 *Role: %role*
🫧 *EXP: %exp*
%readmore
`.trimStart(),
header: `*%category*
────────────────────────`,
body: `*⚘ %cmd* %islimit %isPremium %isAdmin %isMods %isOwner`,
footer: `────────────────────────`,
after: `🍓 *Copyright © pian 2024*`
}
const imageUrl = "https://i.supa.codes/aqpkBO"
const videoUrl = "https://i.supa.codes/vNwW3R"
const audioUrl = "https://i.supa.codes/MFqBp2"
const sourceUrl = "https://linkbio.co/naruyaizumi"
let handler = async (m, { conn, usedPrefix, command, __dirname, isOwner, isMods, isPrems, args }) => {
try {
await global.loading(m, conn)
let tags
let teks = `${args[0]}`.toLowerCase()
let arrayMenu = [
'all',
'ai',
'anime',
'audio',
'database',
'downloader',
'fun',
'game',
'genshin',
'group',
'info',
'internet',
'kerang',
'maker',
'main',
'news',
'nulis',
'nsfw',
'owner',
'primbon',
'quran',
'quotes',
'random',
'rpg',
'search',
'server',
'sound',
'sticker',
'tools',
'topup',
'xp'
]
if (!arrayMenu.includes(teks)) teks = '404'
if (teks == 'all') tags = {
'ai': '🧠 AI & Chatbot',
'anime': '🐰 Anime & Manga',
'audio': '🎧 Audio & Musik',
'database': '🧺 Database & Penyimpanan',
'downloader': '🍥 Unduh Media',
'fun': '🍭 Fun & Hiburan',
'game': '🕹️ Game & Hiburan',
'genshin': '🌸 Genshin Impact',
'group': '🧃 Grup & Administrasi',
'info': '📖 Info & Bantuan',
'internet': '💌 Internet & Sosmed',
'kerang': '🧿 Kerang Ajaib',
'main': '🧁 Main Menu',
'maker': '🎀 Kreator & Desain',
'news': '📰 Berita & Informasi',
'nsfw': '🍓 Konten Dewasa',
'nulis': '✏️ Tulisan & Logo',
'owner': '🪄 Admin & Developer',
'primbon': '🔮 Ramalan & Primbon',
'quran': '️🍃 Al-Qur\'an & Islami',
'quotes': '🫧 Kutipan & Motivasi',
'random': '🎲 Acak & Hiburan',
'rpg': '🗡️ RPG & Petualangan',
'search': '🔍 Pencarian & Info',
'server': '🖥️ Server Management',
'sound': '🔊 Sound & Efek',
'sticker': '🌼 Sticker & Kreator',
'tools': '🧸 Alat & Utilitas',
'xp': '🍰 Level & Exp System'
}
if (teks == 'ai') tags = {
'ai': '🧠 AI & Chatbot'
}
if (teks == 'anime') tags = {
'anime': '🐰 Anime & Manga'
}
if (teks == 'audio') tags = {
'audio': '🎧 Audio & Musik'
}
if (teks == 'database') tags = {
'database': '🧺 Database & Penyimpanan'
}
if (teks == 'downloader') tags = {
'downloader': '🍥 Unduh Media'
}
if (teks == 'fun') tags = {
'fun': '🍭 Fun & Hiburan'
}
if (teks == 'game') tags = {
'game': '🍬 Game & Hiburan'
}
if (teks == 'genshin') tags = {
'genshin': '🌸 Genshin Impact'
}
if (teks == 'group') tags = {
'group': '🧃 Grup & Administrasi'
}
if (teks == 'info') tags = {
'info': '📖 Info & Bantuan'
}
if (teks == 'internet') tags = {
'internet': '💌 Internet & Sosmed'
}
if (teks == 'kerang') tags = {
'kerang': '🧿 Kerang Ajaib'
}
if (teks == 'main') tags = {
'main': '🧁 Main Menu'
}
if (teks == 'maker') tags = {
'maker': '🎀 Kreator & Desain'
}
if (teks == 'news') tags = {
'news': '📰 Berita & Informasi'
}
if (teks == 'nulis') tags = {
'nulis': '✏️ Tulisan & Logo'
}
if (teks == 'nsfw') tags = {
'nsfw': '🍓 Konten Dewasa'
}
if (teks == 'owner') tags = {
'owner': '🪄 Admin & Developer'
}
if (teks == 'premium') tags = {
'premium': '💎 Fitur Premium'
}
if (teks == 'primbon') tags = {
'primbon': '🔮 Ramalan & Primbon'
}
if (teks == 'quran') tags = {
'quran': '🍃️ Al-Qur\'an & Islami'
}
if (teks == 'quotes') tags = {
'quotes': '🫧 Kutipan & Motivasi'
}
if (teks == 'random') tags = {
'random': '🎲 Acak & Hiburan'
}
if (teks == 'rpg') tags = {
'rpg': '🗡️ RPG & Petualangan'
}
if (teks == 'search') tags = {
'search': '🔍 Pencarian & Info'
}
if (teks == 'server') tags = {
'server': '🖥️ Server Management'
}
if (teks == 'sound') tags = {
'sound': '🔊 Sound & Efek'
}
if (teks == 'sticker') tags = {
'sticker': '🌼 Sticker & Kreator'
}
if (teks == 'store') tags = {
'store': '🎁 Toko & Belanja'
}
if (teks == 'tools') tags = {
'tools': '🧸 Alat & Utilitas'
}
if (teks == 'xp') tags = {
'xp': '🍰 Level & Exp System'
}
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let tag = `@${m.sender.split('@')[0]}`
let user = global.db.data.users[m.sender]
let limit = isPrems ? 'Unlimited' : toRupiah(user.limit)
let name = user.registered ? user.name: conn.getName(m.sender)
let status = isMods ? '🧁 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑' : isOwner ? '🪄 𝙊𝙒𝙉𝙀𝙍 𝙈𝙊𝘿𝙀' : isPrems ? '💖 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙐𝙎𝙀𝙍' : user.level > 1000 ? '🌟 𝙀𝙇𝙄𝙏𝙀 𝙐𝙎𝙀𝙍' : '🍬 𝙁𝙧𝙚𝙚 𝙐𝙨𝙚𝙧'
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, {
weekday: 'long'
})
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let member = Object.keys(global.db.data.users).filter(v => typeof global.db.data.users[v].commandTotal != 'undefined' && v != conn.user.jid).sort((a, b) => {
const totalA = global.db.data.users[a].command
const totalB = global.db.data.users[b].command
return totalB - totalA
})
let commandToday = 0
for (let number of member) {
commandToday += global.db.data.users[number].command
}
let totalf = Object.values(global.plugins)
.filter(v => Array.isArray(v.help))
.reduce((acc, v) => acc + v.help.length, 0)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let uptime = runtime(process.uptime())
let muptime = runtime(os.uptime())
let listRate = Object.values(global.db.data.bots.rating).map(v => v.rate)
let averageRating = listRate.length > 0 ? listRate.reduce((sum, rating) => sum + rating, 0) / listRate.length : 0
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
const Version = packageJson.version
const mode = global.opts.self ? 'Private' : 'Public'
let listCmd = `
${wish()}
🌸 *I N F O   B O T* 🌸
────────────────────────
🧁 *Name: ${conn.user.name}*
🧸 *Version: ${Version}*
🍰 *Mode Bot: ${mode}*
🗂️ *Database: ${bytesToMB(fs.readFileSync("./database.json").byteLength)} Mb*
⏱️ *Uptime: ${uptime}*
🔋 *Machine Uptime: ${muptime}*
🧃 *Total Fitur: ${totalf}*
👤 *Total Register: ${totalreg}*
📝 *Command Today: ${commandToday}*
⭐ *Rating: ${averageRating.toFixed(2)}/5.00 (${listRate.length} Users)*
────────────────────────
`.trimStart()
let lists = arrayMenu.map((v, i) => {
return [`${usedPrefix + command} ${v}`, (i + 1).toString(), `📂 Menu ${capitalize(v)} 🍡
Untuk Membuka Menu ${capitalize(v)} ✨`
]
})
let hwaifu = JSON.parse(fs.readFileSync('./json/hwaifu.json', 'utf-8'))
if (teks == '404') {
return await conn.textList(m.chat, listCmd, false, lists, m, {
mentions: [m.sender],
contextInfo: {
externalAdReply: {
mentionedJid: [m.sender],
showAdAttribution: true,
mediaType: 1,
title: `👋🏻 Hai kak, ${name}!`,
body: `🕒 ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`,
thumbnail: fs.readFileSync('./media/thumbnail.jpg'),
renderLargerThumbnail: true,
mediaUrl: hwaifu.getRandom(),
sourceUrl: "https://instagram.com/naruyaizumi_",
}
}
}).then(() => {
conn.sendMessage(m.chat, {
audio: { url: audioUrl },
mimetype: "audio/mpeg",
ptt: true
})
})
}
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help: [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags: [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
mods: plugin.mods,
owner: plugin.owner,
admin: plugin.admin,
enabled: !plugin.disabled,
}
})
let groups = {}
for (let tag in tags) {
groups[tag] = []
for (let plugin of help)
if (plugin.tags && plugin.tags.includes(tag))
if (plugin.help) groups[tag].push(plugin)
}
conn.menu = conn.menu ? conn.menu: {}
let before = conn.menu.before || defaultMenu.before
let header = conn.menu.header || defaultMenu.header
let body = conn.menu.body || defaultMenu.body
let footer = conn.menu.footer || defaultMenu.footer
let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '': `*Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}*`) + defaultMenu.after
let _text = [
before,
...Object.keys(tags).map(tag => {
return header.replace(/%category/g, tags[tag]) + '\n' + [
...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help: '%p' + help)
.replace(/%islimit/g, menu.limit ? '🅛' : '')
.replace(/%isPremium/g, menu.premium ? '🅟' : '')
.replace(/%isAdmin/g, menu.admin ? '🅐' : '')
.replace(/%isMods/g, menu.mods ? '🅓' : '')
.replace(/%isOwner/g, menu.owner ? '🅞' : '')
.trim()
}).join('\n')
}),
footer
].join('\n')
}),
after
].join('\n')
let text = typeof conn.menu == 'string' ? conn.menu: typeof conn.menu == 'object' ? _text: ''
let replace = {
'%': '%',
p: usedPrefix,
uptime,
muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: toRupiah(exp - min),
maxexp: toRupiah(xp),
totalexp: toRupiah(exp),
xp4levelup: toRupiah(max - exp),
github: _package.homepage ? _package.homepage.url || _package.homepage: '[unknown github url]',
level: toRupiah(level),
limit,
name,
totalreg: toRupiah(totalreg),
rtotalreg: toRupiah(rtotalreg),
role,
tag,
status,
wib,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
await conn.sendMessage(m.chat, {
video: { url: videoUrl },
gifPlayback: true,
caption: text.trim(),
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
title: `👋🏻 Hai kak, ${name}!`,
body: `🕒 ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`,
thumbnailUrl: imageUrl,
sourceUrl: "https://instagram.com/naruyaizumi_",
mediaType: 1,
renderLargerThumbnail: true
}
}
}).then(() => {
conn.sendMessage(m.chat, {
audio: { url: audioUrl },
mimetype: "audio/mpeg",
ptt: true
})
})
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help)$/i
handler.register = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function runtime(seconds) {
seconds = Number(seconds)
let d = Math.floor(seconds / (3600 * 24)).toString().padStart(2, '0')
let h = Math.floor((seconds % (3600 * 24)) / 3600).toString().padStart(2, '0')
let m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0')
let s = Math.floor(seconds % 60).toString().padStart(2, '0')
return `${d}:${h}:${m}:${s}`
}

function wish() {
let time = moment.tz('Asia/Jakarta').format('HH:mm')
let [hours, minutes] = time.split(':').map(Number)
let wishloc = '* *'
if (hours === 0 && minutes < 15) {
wishloc = '🌙 Tengah malam banget, waktunya tidur, ya! Jangan begadang terus~'
} else if (hours === 0 && minutes < 30) {
wishloc = '💤 Udah malam banget nih. Masih melek? Coba deh istirahat dulu.'
} else if (hours === 0 && minutes < 45) {
wishloc = '🌌 Sunyi banget tengah malam gini, jangan lupa tidur biar segar besok!'
} else if (hours === 1 && minutes < 15) {
wishloc = '🛌 Udah jam 1 lebih, ayo tidur yuk. Jangan keseringan begadang~'
} else if (hours === 1 && minutes < 30) {
wishloc = '😴 Mata udah berat belum? Tidur yuk, biar badan nggak capek.'
} else if (hours === 1 && minutes < 45) {
wishloc = '🌙 Jam segini mending udah di tempat tidur sambil mimpi indah~'
} else if (hours === 2 && minutes < 15) {
wishloc = '💤 Masih begadang jam 2? Jangan lupa kesehatan, ya!'
} else if (hours === 2 && minutes < 30) {
wishloc = '🌌 Udah dini hari banget nih, coba istirahat biar nggak lelah~'
} else if (hours === 2 && minutes < 45) {
wishloc = '🌙 Suasana dingin jam 2, nyaman banget buat tidur, coba deh~'
} else if (hours === 3 && minutes < 15) {
wishloc = '🛌 Udah jam 3 dini hari, waktunya tidur, sayang kesehatanmu~'
} else if (hours === 3 && minutes < 30) {
wishloc = '💤 Bobo yuk, biar bangun pagi nanti nggak malas~'
} else if (hours === 3 && minutes < 45) {
wishloc = '🌌 Jam segini tidur yang nyenyak enak banget, cobain deh!'
} else if (hours === 4 && minutes < 15) {
wishloc = '☀️ Pagi buta nih! Udah mulai terang, semangat buat bangun!'
} else if (hours === 4 && minutes < 30) {
wishloc = '🍵 Pagi-pagi begini, enaknya ngopi atau minum teh, setuju?'
} else if (hours === 4 && minutes < 45) {
wishloc = '🌅 Subuh datang, suasananya adem banget, yuk olahraga ringan!'
} else if (hours === 5 && minutes < 15) {
wishloc = '🐓 Ayam berkokok udah kedengeran, waktunya bangun pagi nih!'
} else if (hours === 5 && minutes < 30) {
wishloc = '🌞 Matahari mulai muncul, selamat pagi! Jangan malas-malasan~'
} else if (hours === 5 && minutes < 45) {
wishloc = '🥪 Udah waktunya sarapan, yuk isi energi buat aktivitas hari ini~'
} else if (hours === 6 && minutes < 15) {
wishloc = '🏃‍♂️ Pagi-pagi gini olahraga dulu yuk, biar tubuh lebih sehat~'
} else if (hours === 6 && minutes < 30) {
wishloc = '📚 Jangan lupa kerjain tugas atau persiapan kerja ya!'
} else if (hours === 6 && minutes < 45) {
wishloc = '☀️ Matahari udah tinggi, semangat ya buat harimu hari ini~'
} else if (hours === 7 && minutes < 15) {
wishloc = '💻 Pagi produktif yuk! Fokus ke kerjaan atau tugas dulu~'
} else if (hours === 7 && minutes < 30) {
wishloc = '☕ Udah ngopi belum? Kalau belum, waktunya buat ngopi nih!'
} else if (hours === 7 && minutes < 45) {
wishloc = '📊 Jangan lupa cek jadwal atau to-do list buat hari ini~'
} else if (hours === 8 && minutes < 15) {
wishloc = '🍎 Cemilan pagi penting lho, biar kamu tetap bertenaga!'
} else if (hours === 8 && minutes < 30) {
wishloc = '🖥️ Lagi kerja atau belajar? Jangan lupa istirahat mata sebentar~'
} else if (hours === 8 && minutes < 45) {
wishloc = '🥗 Udah mulai siang, siap-siap makan siang nanti ya!'
} else if (hours === 9 && minutes < 15) {
wishloc = '🌤️ Selamat siang! Yuk makan siang biar energi kamu balik lagi~'
} else if (hours === 9 && minutes < 30) {
wishloc = '🍛 Lagi makan siang apa nih? Yang penting sehat dan enak ya~'
} else if (hours === 9 && minutes < 45) {
wishloc = '😌 Habis makan siang santai bentar, biar badan lebih rileks~'
} else if (hours === 10 && minutes < 15) {
wishloc = '📖 Siang gini enaknya baca buku sambil minum es teh, gimana?'
} else if (hours === 10 && minutes < 30) {
wishloc = '☀️ Panasnya mulai terasa nih, jangan lupa banyak minum air ya!'
} else if (hours === 10 && minutes < 45) {
wishloc = '🖋️ Masih semangat kan? Yuk, fokus kerja atau belajarnya~'
} else if (hours === 11 && minutes < 15) {
wishloc = '🌇 Sore mulai mendekat, jangan lupa selesaikan aktivitasmu~'
} else if (hours === 11 && minutes < 30) {
wishloc = '🛋️ Sambil kerja, boleh lho ngemil biar makin produktif~'
} else if (hours === 11 && minutes < 45) {
wishloc = '📸 Siang terakhir sebelum sore, coba liat keluar, cakep banget!'
} else if (hours === 12 && minutes < 15) {
wishloc = '🌤️ Udah masuk jam 12 nih, siapin makan siang yuk~'
} else if (hours === 12 && minutes < 30) {
wishloc = '🍽️ Jangan skip makan siang ya, biar tenaga kamu nggak habis~'
} else if (hours === 12 && minutes < 45) {
wishloc = '😌 Habis makan siang jangan lupa istirahat sebentar ya~'
} else if (hours === 13 && minutes < 15) {
wishloc = '📖 Abis makan, siang gini cocok buat baca buku santai nih~'
} else if (hours === 13 && minutes < 30) {
wishloc = '☀️ Panas banget jam segini, jangan lupa minum biar nggak lemas!'
} else if (hours === 13 && minutes < 45) {
wishloc = '☀️ Lagi panas nih, jangan lupa minum air biar nggak dehidrasi~'
} else if (hours === 14 && minutes < 15) {
wishloc = '📖 Siang-siang gini, cocok buat baca buku atau dengerin podcast!'
} else if (hours === 14 && minutes < 30) {
wishloc = '🥤 Waktunya ngemil atau minum yang seger-seger nih~'
} else if (hours === 14 && minutes < 45) {
wishloc = '🖋️ Kerjaan masih belum selesai? Santai, satu-satu aja ya~'
} else if (hours === 15 && minutes < 15) {
wishloc = '🌇 Udah sore! Jangan lupa stretching biar badan nggak kaku~'
} else if (hours === 15 && minutes < 30) {
wishloc = '🍪 Sore-sore gini ngemil apa nih yang cocok? Cookies enak kali ya~'
} else if (hours === 15 && minutes < 45) {
wishloc = '🏞️ Langit sore udah mulai berubah warna, cantik banget deh~'
} else if (hours === 16 && minutes < 15) {
wishloc = '📸 Coba deh foto-foto langit sore, pasti aesthetic banget!'
} else if (hours === 16 && minutes < 30) {
wishloc = '🛋️ Sore gini cocok buat santai di sofa sambil nonton~'
} else if (hours === 16 && minutes < 45) {
wishloc = '🍵 Teh sore emang paling nikmat, apalagi sama camilan~'
} else if (hours === 17 && minutes < 15) {
wishloc = '🌅 Menjelang malam nih, suasananya adem banget ya~'
} else if (hours === 17 && minutes < 30) {
wishloc = '🕯️ Udah sore, jangan lupa nyiapin makan malam ya!'
} else if (hours === 17 && minutes < 45) {
wishloc = '🍽️ Mau makan apa malam ini? Yuk, siap-siap makan bareng~'
} else if (hours === 18 && minutes < 15) {
wishloc = '🌙 Malam tiba, waktunya buat tenangin pikiran~'
} else if (hours === 18 && minutes < 30) {
wishloc = '🍲 Jangan lupa makan malam biar nggak kelaperan nanti~'
} else if (hours === 18 && minutes < 45) {
wishloc = '📺 Waktunya nonton acara favorit atau film seru malam ini~'
} else if (hours === 19 && minutes < 15) {
wishloc = '🎮 Lagi main game? Jangan lupa cek waktu, ya!'
} else if (hours === 19 && minutes < 30) {
wishloc = '📱 Scroll sosmed sambil denger musik malam juga asik lho~'
} else if (hours === 19 && minutes < 45) {
wishloc = '🎶 Musik slow malam ini bikin suasana lebih santai banget~'
} else if (hours === 20 && minutes < 15) {
wishloc = '📖 Malam gini cocok banget buat baca novel atau jurnal~'
} else if (hours === 20 && minutes < 30) {
wishloc = '✨ Jangan lupa skincare malam biar glowing terus ya~'
} else if (hours === 20 && minutes < 45) {
wishloc = '🛌 Udah jam 8 lebih, waktunya relaksasi sebelum tidur~'
} else if (hours === 21 && minutes < 15) {
wishloc = '🌌 Udah malam nih, jangan begadang ya, nggak baik buat badan~'
} else if (hours === 21 && minutes < 30) {
wishloc = '💤 Siapin diri buat tidur yang nyenyak, biar besok fresh~'
} else if (hours === 21 && minutes < 45) {
wishloc = '🌙 Tidur lebih awal itu bagus lho, coba deh biasain~'
} else if (hours === 22 && minutes < 15) {
wishloc = '🌌 Udah larut malam nih, jangan lupa matiin lampu sebelum tidur~'
} else if (hours === 22 && minutes < 30) {
wishloc = '✨ Mimpi indah ya nanti, semoga besok lebih baik lagi~'
} else if (hours === 22 && minutes < 45) {
wishloc = '🛌 Jangan lupa tidur yang cukup, biar badan tetap sehat~'
} else if (hours === 23 && minutes < 15) {
wishloc = '💤 Udah tengah malam banget, waktunya tidur nyenyak~'
} else if (hours === 23 && minutes < 30) {
wishloc = '🌙 Jangan begadang terus ya, kasihan badan kamu~'
} else if (hours === 23 && minutes < 45) {
wishloc = '🕯️ Tidur malam yang nyenyak bikin kamu lebih segar besok!'
} else if (hours === 23 && minutes <= 59) {
wishloc = '✨ Selamat malam, sampai jumpa besok! Tidur nyenyak ya~'
}
return wishloc
}

function capitalize(word) {
return word.charAt(0).toUpperCase() + word.substr(1)
}

const toRupiah = number => parseInt(number).toLocaleString().replace(/,/g, ".")

function bytesToMB(bytes) {
return (bytes / 1048576).toFixed(2)
}