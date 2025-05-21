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
import canvafy from 'canvafy'
import fs from 'fs'
import path from 'path'

export async function before(m) {
let user = global.db.data.users
let chat = global.db.data.chats[m.chat]
let setting = global.db.data.settings[this.user.jid]
let member = Object.keys(user).filter(v => user[v].level > 0).sort((a, b) => user[b].level - user[a].level)
let { min, xp, max } = xpRange(user[m.sender].level, xpNeeded(user[m.sender].level))
const pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => fs.readFileSync('./src/avatar_contact.png'))
const name = user[m.sender].registered ? user[m.sender].name : await this.getName(m.sender)
if (m.isBaileys || m.fromMe) return
if (chat.mute || chat.isBanned || user[m.sender].banned) return
if (/^[=>.#\/!\\]/.test(m.text)) return
if (chat.autolevelup || user[m.sender].autolevelup) {
if (canLevelUp(user[m.sender].level, user[m.sender].exp, xpNeeded(user[m.sender].level))) {
if (setting.composing) await this.sendPresenceUpdate('composing', m.chat).catch(() => {})
if (setting.autoread) await this.readMessages([m.key]).catch(() => {})
let before = user[m.sender].level
while (canLevelUp(user[m.sender].level, user[m.sender].exp, xpNeeded(user[m.sender].level))) user[m.sender].level++
if (before !== user[m.sender].level) {
let healthBefore = user[m.sender].health
let energyBefore = user[m.sender].energy
let maxHealth = 100 + user[m.sender].level * 10
let maxEnergy = 50 + user[m.sender].level * 5
user[m.sender].health = maxHealth
user[m.sender].energy = maxEnergy
let str = `
🎀 *𝐋𝐄𝐕𝐄𝐋 𝐔𝐏!* 🎀
────────────────────
🍓 *Nama: ${name}*
🌸 *Level: ${before} ➜ ${user[m.sender].level}*
💫 *Role: ${user[m.sender].role}*
❤️ *Darah: ${healthBefore} ➜ ${maxHealth} (tersisa ${user[m.sender].health})*
⚡ *Energi: ${energyBefore} ➜ ${maxEnergy} (tersisa ${user[m.sender].energy})*
────────────────────
📌 *Semakin aktif, semakin tinggi levelnya!*
🌷 *Terima kasih sudah bermain bersama Crystalia~!*
`.trim()
let currentXp = Math.max(0, user[m.sender].exp - min)
let img = await canvafyRank(pp, name, "online", user[m.sender].level, member.indexOf(m.sender), currentXp, xp)
await this.sendMessage(m.chat, { image: img, caption: str }, { quoted: m })
}
}
return !0
}
return !0
}

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
.setRank(rank + 1)
.setCurrentXp(cxp)
.setRequiredXp(rxp)
.build()
return rankBuffer
}