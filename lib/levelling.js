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

export function xpRange(level) {
level = Math.floor(level)
let base = 100
let min = Math.floor((level ** 2.8) * base + (level * 25) + (Math.log2(level + 2) * 500))
let max = Math.floor(((level + 1) ** 2.8) * base + ((level + 1) * 25) + (Math.log2(level + 3) * 500))
return { min, max, xp: max - min }
}

export function findLevel(xp) {
let level = 0
while (true) {
let { max } = xpRange(level)
if (xp < max) return level
level++
}
}

export function canLevelUp(level, xp) {
return level < findLevel(xp)
}