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

import { canLevelUp, xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import canvafy from "canvafy"
import fs from "fs"
import path from "path"

let handler = async (m, { conn }) => {
try {
let user = global.db.data.users
if (!canLevelUp(user[m.sender].level, user[m.sender].exp, xpNeeded(user[m.sender].level))) {
let { min, xp, max } = xpRange(user[m.sender].level, xpNeeded(user[m.sender].level))
return m.reply(`
🎀 *𝐏𝐑𝐎𝐆𝐑𝐄𝐒 𝐋𝐄𝐕𝐄𝐋!* 🎀
────────────────────
🌸 *Level: ${user[m.sender].level}*
💫 *XP: ${Math.max(0, user[m.sender].exp - min)} / ${xp} (kurang ${Math.max(0, max - user[m.sender].exp)})*
❤️ *Darah: ${user[m.sender].health}*
⚡ *Energi: ${user[m.sender].energy}*
────────────────────
📌 *Semakin aktif, semakin tinggi levelnya!*
🌷 *Terima kasih sudah bermain bersama Crystalia~!*
`.trim())
}
await global.loading(m, conn)
let before = user[m.sender].level * 1
while (canLevelUp(user[m.sender].level, user[m.sender].exp, xpNeeded(user[m.sender].level))) user[m.sender].level++
if (before !== user[m.sender].level) {
let healthBefore = user[m.sender].health
let energyBefore = user[m.sender].energy
let level = user[m.sender].level
let maxHealth = 100 + level * 10
let maxEnergy = 50 + level * 5
user[m.sender].health = maxHealth
user[m.sender].energy = maxEnergy
let member = Object.keys(user).filter(v => user[v].level > 0).sort((a, b) => user[b].level - user[a].level)
let { min, xp, max } = xpRange(level, xpNeeded(level))
const pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => fs.readFileSync('./src/avatar_contact.png'))
const name = user[m.sender].registered ? user[m.sender].name : await conn.getName(m.sender)
let str = `
🎀 *𝐋𝐄𝐕𝐄𝐋 𝐔𝐏!* 🎀
────────────────────
🍓 *Nama: ${name}*
🌸 *Level: ${before} ➜ ${level}*
💫 *Role: ${user[m.sender].role}*
❤️ *Darah: ${healthBefore} ➜ ${maxHealth} (tersisa ${user[m.sender].health})*
⚡ *Energi: ${energyBefore} ➜ ${maxEnergy} (tersisa ${user[m.sender].energy})*
────────────────────
📌 *Semakin aktif, semakin tinggi levelnya!*
🌷 *Terima kasih sudah bermain bersama Crystalia~!*
`.trim()
try {
let currentXp = Math.max(0, user[m.sender].exp - min)
let img = await canvafyRank(pp, name, "online", level, member.indexOf(m.sender), currentXp, xp)
await conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
} catch (e) {
let currentXp = Math.max(0, user[m.sender].exp - min)
let img = await canvafyRank(pp, name, "online", level, member.indexOf(m.sender), currentXp, xp)
await conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
}
}
} catch (e) {
throw e
} finally {
await global.loading(m, conn, true)
}
}

handler.help = ['levelup']
handler.tags = ['xp']
handler.command = /^level(|up)$/i

export default handler

export function xpNeeded(level) {
return xpRange(level).xp
}

async function canvafyRank(avatar, username, status, level, rank, cxp, rxp) {
const background = [
"https://i.supa.codes/7H3u9M",
"https://i.supa.codes/EGO6nL",
"https://i.supa.codes/3jFacE",
"https://i.supa.codes/_yhpxl",
"https://i.supa.codes/J6MM_8",
"https://i.supa.codes/3ADzJC",
"https://i.supa.codes/rbRyAU",
"https://i.supa.codes/5gsuGR",
"https://i.supa.codes/eZipHc",
"https://i.supa.codes/CY2eMw"
]
const rankBuffer = await new canvafy.Rank()
.setAvatar(avatar)
.setBackground("image", background.getRandom())
.setUsername(username)
.setBorder("#000000")
.setBarColor("#FFFFFF")
.setStatus("online")
.setLevel(level)
.setRank(rank)
.setCurrentXp(cxp)
.setRequiredXp(rxp)
.build()
return rankBuffer
}