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

let handler = async (m, { text: txt, usedPrefix, command }) => {
if (!txt) return m.reply(`Masukan jadwal sholat \n\nContoh:\n${usedPrefix + command} Subuh`)
let text = txt.toLowerCase() || ''
let data = Object.values(niatsholat).find(v => v.solat == text)
if (!data) return m.reply(`*${txt} Tidak ditemukan*\n\n*List Solat 5 Waktu :*\n*• Subuh*\n*• Maghrib*\n*• Dzuhur*\n*• Isya*\n*• Ashar*`)
m.reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}
handler.help = ['niatsholat']
handler.tags = ['quran']
handler.command = /^(niat(sholat)?)$/i
handler.register = true
handler.limit = true
export default handler

const niatsholat = [
{
index: 1,
solat: "subuh",
latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 2,
solat: "maghrib",
latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 3,
solat: "dzuhur",
latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 4,
solat: "isha",
latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 5,
solat: "ashar",
latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
}
]