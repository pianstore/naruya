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

let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.khodam = conn.khodam || {}
if (!text) return m.reply(`Masukan Nama kamu! \n\nContoh: \n${usedPrefix + command} Rizki`)
let kodam = conn.khodam?.[text] ? conn.khodam[text] : khodam.getRandom()
await m.reply(`*Nama : ${text}* \n\n*Khodam kamu adalah ${kodam}*`)
conn.khodam[text] = kodam
}
handler.help = ["cekkhodam"]
handler.tags = ["fun"]
handler.command = /^(cek(khodam|kodam)|kodam|khodam)$/i
handler.register = true
export default handler

let khodam = [
"Kosong",
"Kosong",
"Kosong",
"Macan Loreng",
"Buaya Sunda",
"Laba Laba Sunda",
"Jin Rawa Rontek",
"Jubah Putih",
"Harimau Birahi",
"Nyi Blorong",
"Kuntilanak",
"Pocong Merah",
"Harimau Putih",
"Ular Naga",
"Bhatara Karang",
"Buaya Putih",
"Sulaiman",
"Aden-aden",
"Genderuwo",
"Nyi Roro Kidul",
"Noyo Genggong",
"Eyang Semar",
"Cargo Paloh",
"Para Dewa",
"Kera Putih",
"Wewe Gombel",
"Banaspati",
"Sundel Bolong", 
"Pocong Lidah",
"Sembrani",
"Buto Ijo",
"Kontol Besar",
"Suster ngesot",
"Tuyul",
"Kontol Kuda",
"Memek Basah",
"Jenglot",
"Antasari",
"Prabu Siliwangi",
"Gundul Pecingis",
"Jalangkung",
"Noni Noni Belanda",
"Bidadari",
"Naga",
"Kutang 7 Rupa",
"Owner",
"Izumi",
"Developer",
"Kakek Cangkul",
"Nenek Gayung",
"Peri",
"Pasukan Jin",
"Sempak Owner",
"Kadal Mohak",
"Gagak Putih",
"Pasukan Rahwana",
"Nyi Roro Jonggrang",
"Naga Putih",
"Cacing Besar Alaska",
"Titit Owner"
]