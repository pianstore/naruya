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

let handler = async (m, { conn, args, usedPrefix, command }) => {
let user = global.db.data.users[m.sender].age
if (user < 18) throw m.reply('❌ *Sepertinya umur kamu di bawah 18 tahun ya~* 🍼')
let res = await fetch(`https://fantox-apis.vercel.app/${command}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw '🚫 *Fitur ini sedang error, tunggu owner memperbaikinya ya~*'
await conn.sendFile(m.chat, json.url, 'img.jpg', `🫦 *Nih Kak ${command}-nyaaa~*`, m)
}

handler.help = ["genshin", "swimsuit", "schoolswimsuit", "white", "barefoot", "touhou", "gamecg", "hololive", "uncensored", "sunglasses", "glasses", "weapon", "shirtlift", "chain", "fingering", "flatchest", "torncloth", "bondage", "demon", "wet", "pantypull", "headdress", "headphone", "tie", "anusview", "shorts", "stokings", "topless", "beach", "bunnygirl", "bunnyear", "idol", "vampire", "gun", "maid", "bra", "nobra", "bikini", "whitehair", "blonde", "pinkhair", "bed", "ponytail", "nude", "dress", "underwear", "foxgirl", "uniform", "skirt", "sex", "sex2", "sex3", "breast", "twintail", "spreadpussy", "tears", "seethrough", "breasthold", "drunk", "fateseries", "spreadlegs", "openshirt", "headband", "food", "close", "tree", "nipples", "erectnipples", "horns", "greenhair", "wolfgirl", "catgirl", "animal", "animalears", "anusview", "ass", "barefoot", "bed", "bell", "bikini", "blonde", "bondage", "bra", "breasthold", "breasts", "bunnyears", "bunnygirl", "chain", "closeview", "cloudsview", "cum", "dress", "drunk", "elbowgloves", "erectnipples", "fateseries", "fingering", "flatchest", "food", "foxgirl", "gamecg", "genshin", "glasses", "gloves", "greenhair", "hatsunemiku", "hcatgirl", "headband", "headdress", "headphones", "hentaimiku", "hentaivideo", "hloli", "hneko", "hololove", "horns", "inshorts", "japanesecloths", "necklace", "nipples", "nobra", "nsfwbeach", "nsfwbell", "nsfwdemon", "nsfwidol", "nsfwmaid", "nsfwmenu", "nsfwvampire", "nude", "openshirt", "pantyhose", "pantypull", "penis", "pinkhair", "ponytail", "pussy", "ribbons", "schoolswimsuit", "schooluniform", "seethrough", "sex", "sex2", "sex3", "shirt", "shirtlift", "skirt", "spreadlegs", "spreadpussy", "squirt", "stockings", "sunglasses", "swimsuit", "tail", "tattoo", "tears", "thighhighs", "thogirls", "topless", "torncloths", "touhou", "twintails", "uncensored", "underwear", "vocaloid", "weapon", "wet", "white", "whitehair", "wings", "withflowers", "withgun", "withpetals", "withtie", "withtree", "wolfgirl", "yuri"]
handler.command = ["genshin", "swimsuit", "schoolswimsuit", "white", "barefoot", "touhou", "gamecg", "hololive", "uncensored", "sunglasses", "glasses", "weapon", "shirtlift", "chain", "fingering", "flatchest", "torncloth", "bondage", "demon", "wet", "pantypull", "headdress", "headphone", "tie", "anusview", "shorts", "stokings", "topless", "beach", "bunnygirl", "bunnyear", "idol", "vampire", "gun", "maid", "bra", "nobra", "bikini", "whitehair", "blonde", "pinkhair", "bed", "ponytail", "nude", "dress", "underwear", "foxgirl", "uniform", "skirt", "sex", "sex2", "sex3", "breast", "twintail", "spreadpussy", "tears", "seethrough", "breasthold", "drunk", "fateseries", "spreadlegs", "openshirt", "headband", "food", "close", "tree", "nipples", "erectnipples", "horns", "greenhair", "wolfgirl", "catgirl", "animal", "animalears", "anusview", "ass", "barefoot", "bed", "bell", "bikini", "blonde", "bondage", "bra", "breasthold", "breasts", "bunnyears", "bunnygirl", "chain", "closeview", "cloudsview", "cum", "dress", "drunk", "elbowgloves", "erectnipples", "fateseries", "fingering", "flatchest", "food", "foxgirl", "gamecg", "genshin", "glasses", "gloves", "greenhair", "hatsunemiku", "hcatgirl", "headband", "headdress", "headphones", "hentaimiku", "hentaivideo", "hloli", "hneko", "hololove", "horns", "inshorts", "japanesecloths", "necklace", "nipples", "nobra", "nsfwbeach", "nsfwbell", "nsfwdemon", "nsfwidol", "nsfwmaid", "nsfwmenu", "nsfwvampire", "nude", "openshirt", "pantyhose", "pantypull", "penis", "pinkhair", "ponytail", "pussy", "ribbons", "schoolswimsuit", "schooluniform", "seethrough", "sex", "sex2", "sex3", "shirt", "shirtlift", "skirt", "spreadlegs", "spreadpussy", "squirt", "stockings", "sunglasses", "swimsuit", "tail", "tattoo", "tears", "thighhighs", "thogirls", "topless", "torncloths", "touhou", "twintails", "uncensored", "underwear", "vocaloid", "weapon", "wet", "white", "whitehair", "wings", "withflowers", "withgun", "withpetals", "withtie", "withtree", "wolfgirl", "yuri"]
handler.tags = ['nsfw']
handler.register = true
handler.premium = true
handler.nsfw = true
handler.age = 18

export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}