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

let handler = async (m, { conn, usedPrefix, command, args }) => {
let type = (args[0] || '').toLowerCase()
let _type = (args[0] || '').toLowerCase()
let user = global.db.data.users[m.sender]

let caption = `
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

▧ Pickaxe ⛏️
▧ Sword ⚔️
▧ Fishingrod 🎣
▧ Armor 🥼

*❏ RECIPE*

▧ Pickaxe ⛏️
〉  20 Rock
〉 20 Wood
〉 20 Iron
〉 1 Diamond

▧ Sword ⚔️
〉 20 Wood
〉 20 Iron
〉 2 Gold
〉 1 Diamond

▧ FishingRod ⚔️
〉 20 Wood
〉 20 String
〉 20 Iron
〉 1 Diamond

▧ Armor 🥼
〉 15 Iron
〉 2 Gold
〉 1 Diamond
`
if (/repair/i.test(command)) {
const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)): !args[1] || args.length < 3 ? 1: Math.min(1, count)
switch (type) {
case 'pickaxe':
if (user.pickaxedurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
if (user.pickaxe == 0) return m.reply('Kamu belum memilik ini')
if (user.diamond < 1 || user.rock < 20 || user.wood < 20 || user.iron < 20) return m.reply(`Barang tidak cukup!`)
user.rock -= 20
user.wood -= 20
user.iron -= 20
user.diamond -= 1
user.pickaxedurability = 100
m.reply("Sukses memperbaiki!")
break
case 'sword':
if (user.sworddurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
if (user.sword == 0) return m.reply('Kamu belum memilik ini')
if (user.diamond < 1 || user.wood < 20 || user.iron < 20 || user.gold < 2) return m.reply(`Barang tidak cukup!`)
user.wood -= 20
user.iron -= 20
user.gold -= 3
user.diamond -= 1
user.sworddurability = 100
m.reply("Sukses memperbaiki!")
break
case 'fishingrod':
if (user.fishingroddurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
if (user.fishingrod == 0) return m.reply('Kamu belum memiliki ini')
if (user.diamond < 1 || user.string < 20 || user.wood < 20 || user.iron < 20) return m.reply(`Barang tidak cukup!`)
user.wood -= 20
user.string -= 20
user.iron -= 20
user.diamond -= 1
user.fishingroddurability = 100
m.reply("Sukses memperbaiki!")
break
case 'armor':
if (user.armordurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
if (user.armor == 0) return m.reply('Kamu belum memilik ini')
if (user.diamond < 1 || user.iron < 15 || user.gold < 2) return m.reply(`Barang tidak cukup!`)
user.iron -= 15
user.gold -= 2
user.diamond -= 1
user.armordurability = 100
m.reply("Sukses memperbaiki!")
break
default:
return m.reply(caption)
}
}
}

handler.help = ['repair']
handler.tags = ['rpg']
handler.command = /^(repair)/i
handler.register = true
handler.group = true
handler.rpg = true
export default handler