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

let handler = async (m, { args }) => {
if (!args[0]) return m.reply("🍭 *Masukkan nama lokasi atau kota dulu ya sayang!*")
try {
let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(args.join(" "))}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
let data = await res.json()
if (!data.name) throw `🥀 *Lokasi tidak ditemukan!*`
let name = data.name
let country = data.sys.country
let weather = data.weather[0].description
let temp = data.main.temp + "°C"
let min = data.main.temp_min + "°C"
let max = data.main.temp_max + "°C"
let humidity = data.main.humidity + "%"
let wind = data.wind.speed + "km/h"
let teks = `🍓 *Cuaca Hari Ini*\n\n`
teks += `「 📍 」 *Lokasi: ${name}*\n`
teks += `「 🗺️ 」 *Negara: ${country}*\n`
teks += `「 ☁️ 」 *Cuaca: ${weather}*\n`
teks += `「 🌡️ 」 *Suhu: ${temp}*\n`
teks += `「 🍧 」 *Min Suhu: ${min}*\n`
teks += `「 🍬 」 *Max Suhu: ${max}*\n`
teks += `「 💦 」 *Kelembapan: ${humidity}*\n`
teks += `「 🍃 」 *Angin: ${wind}*`
m.reply(teks)
} catch (e) {
m.reply("🍩 *Gagal mengambil data cuaca! Mungkin lokasinya salah atau tidak ditemukan*")
}
}

handler.help = ['weather']
handler.tags = ['tools']
handler.command = /^(weather)$/i
handler.register = true
handler.limit = true
export default handler