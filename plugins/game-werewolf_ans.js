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

import {
emoji_role,
sesi,
playerOnGame,
playerOnRoom,
playerExit,
dataPlayer,
dataPlayerById,
getPlayerById,
getPlayerById2,
killWerewolf,
killww,
dreamySeer,
sorcerer,
protectGuardian,
roleShuffle,
roleChanger,
roleAmount,
roleGenerator,
addTimer,
startGame,
playerHidup,
playerMati,
vote,
voteResult,
clearAllVote,
getWinner,
win,
pagi,
malam,
skill,
voteStart,
voteDone,
voting,
run,
run_vote,
run_malam,
run_pagi
} from '../lib/werewolf.js'

let handler = async (m, { conn, command, usedPrefix, args }) => {
let { sender, chat } = m
conn.werewolf = conn.werewolf ? conn.werewolf : {}
let ww = conn.werewolf
let value = (args[0] || '').toLowerCase()
let target = args[1]

if (playerOnGame(sender, ww) === false)
return m.reply("Kamu tidak dalam sesi game")
if (dataPlayer(sender, ww).status === true)
return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
if (dataPlayer(sender, ww).isdead === true)
return m.reply("Kamu sudah mati")
if (!target || target.length < 1 || target.split('').length > 2) 
return m.reply(`Masukan nomor player \nContoh : \n${usedPrefix + command} kill 1`)
if (isNaN(target)) 
return m.reply("Gunakan hanya nomor")
let byId = getPlayerById2(sender, parseInt(target), ww)
if (byId.db.isdead === true) 
return m.reply("Player sudah mati")
if (byId.db.id === sender)
return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
if (byId === false) 
return m.reply("Player tidak terdaftar")
if (/kill/i.test(value)) {
if (!/werewolf|sorcerer/i.test(dataPlayer(sender, ww).role))
return m.reply("Peran ini bukan untuk kamu")

return m.reply("Berhasil membunuh player " + parseInt(target)).then(() => {
dataPlayer(sender, ww).status = true
killWerewolf(sender, parseInt(target), ww)
})
} else if (/dreamy/i.test(value)) {
if (!/seer/i.test(dataPlayer(sender, ww).role)) 
return m.reply("Peran ini bukan untuk kamu")

let dreamy = dreamySeer(sender, parseInt(target), ww)
return m.reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`).then(() => {
dataPlayer(sender, ww).status = true
})
} else if (/deff/i.test(value)) {
if (!/guardian/i.test(dataPlayer(sender, ww).role)) 
return m.reply("Peran ini bukan untuk kamu")

return m.reply(`Berhasil melindungi player ${target}`).then(() => {
protectGuardian(sender, parseInt(target), ww)
dataPlayer(sender, ww).status = true
})
} else if (/sorcerer/i.test(value)) {
if (!/sorcerer/i.test(dataPlayer(sender, ww).role)) 
return m.reply("Peran ini bukan untuk kamu")

let sorker = sorcerer(sender, parseInt(target), ww)
return m.reply(`Berhasil membuka identitas player ${target} adalah ${sorker}`).then(() => {
dataPlayer(sender, ww).status = true
})
}
}
handler.command = /^((ww|werewolf)pc)$/i
handler.private = true
export default handler