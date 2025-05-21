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

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.useRedis = false
global.redis = {
host: '-',
port: 0,
username: '-',
password: '-',
}
global.useMongo = false
global.mongo = {
uri: '-',
dbName: 'sessions',
collectionName: 'naruyaizumi',
// Network Access 0.0.0.0/0
}
global.authMode = 'multi', // 'single' atau 'multi'
global.config = {
    /*============== STAFF ==============*/
owner: [
['6282291572138', '𓅯 PIAN STORE', true],
['6282291572138', '𓅯 PIAN', true],
['6282291572138', '𓅯 PIANNN', true]
],
newsletter: '-',
website: 'https://linkbio.co/naruyazumi',
group: 'https://chat.whatsapp.com/LKV7tTtpNOlBMLH4hcdaP',
logo: "https://files.catbox.moe/pkmvab.jpg",
    /*============= PAIRING =============*/
pairingNumber: '6282291572138',
pairingAuth: true,
    /*============== API ==============*/
APIs: {
lol: 'https://api.lolhuman.xyz',
btz: 'https://api.betabotz.eu.org',
},
APIKeys: {
'https://api.lolhuman.xyz': '-',
'https://api.betabotz.eu.org': '-'
},
domain: '-',
apikey: '-',
capikey: '-',
nestid: '-',
egg: '-',
loc: '-',
VPS: {
host: '-',
port: '-',
username: '-',
password: '-',
},
rbg: '-',
gh: '-',
gemini: '-',
token: '-',
key: 'aHR0cHM6Ly9pbmZpbml0eS1uaW5lLWV0YS52ZXJjZWwuYXBwL2FwaS9wYWlyaW5nP251bWJlcj0=',
qris: '-',
    /*============= SUBDOMAIN =============*/
Subdo: {
"panel-digital.web.id": {
zone: "4568f2600af5ff0ab2f7f5995ffa7f54",
apitoken: "02bDqBnqei3pjQgSiYKHIrLGbRgTShPWsXJeglro"
},
"naruyaizumi.site": {
zone: "3675f6ffc6480a882ba49dd18d683788",
apitoken: "e0qWSCP1fRZSuzP9hRBEFQlvF5Xy7kRMzgHqzxQR"
},
"serverku.biz.id": {
zone: "4e4feaba70b41ed78295d2dcc090dd3a",
apitoken: "d6kmqwlvi0qwCyMxoGuc3EBAYRYvbulhjhR9T0I7"
},
"privatserver.my.id": {
zone: "699bb9eb65046a886399c91daacb1968",
apitoken: "fnl7ixlJ-Y-7zxJ7EUGEXitfmfLiPGW985iXobdu"
},
"panelwebsite.biz.id": {
zone: "2d6aab40136299392d66eed44a7b1122",
apitoken: "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
},
"mypanelstore.web.id": {
zone: "c61c442d70392500611499c5af816532",
apitoken: "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
},
"pteroserver.us.kg": {
zone: "f693559a94aebc553a68c27a3ffe3b55",
apitoken: "ZPAXx7CL51PtbGweL2pE3BsI3x0hgTgLuy56iXuo"
},
"digitalserver.us.kg": {
zone: "df13e6e4faa4de9edaeb8e1f05cf1a36",
apitoken: "HXVf4soYFM3iiOewHZ6tk6LEnG9f7m7CVhU0EoVz"
},
"shopserver.us.kg": {
zone: "54ca38e266bfdf2dcdb7f51fd79c2db5",
apitoken: "4qOupI-Of-6yNrBaeS1-H0KySuKCd0wS-x0P5XQ4"
},
"privatehost.us.kg": {
zone: "790918217c4add75b7684458518c5836",
apitoken: "qYv4NvEN6ZcUIv4dEXihjkmQMwbP_-3Qy_zFlAHv"
},
"botwhatsapp.us.kg": {
zone: "fb1ac418c5564373a56c91d962b30dca",
apitoken: "rfQih0XNXiq7AyEuDoLjoFfHX2mhYf_9kddAdKIo"
},
"skyzopedia.us.kg": {
zone: "9e4e70b438a65c1d3e6d0e48b82d79de",
apitoken: "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o"
},
"marketplace.us.kg": {
zone: "2f33118c3db00b12c38d07cf1c823ed1",
apitoken: "6WS_Op6yuPOWcO17NiO-sOP8Vq9tjSAFZyAn82db"
},
"xyz-store.biz.id": {
zone: "8ae812c35a94b7bd2da993a777b8b16d",
apitoken: "oqZafkd3mSt1bABD9MMTidpCtD9VZdiPTjElVKJB"
}
},
    /*============== MSG ==============*/
watermark: 'pian',
author: 'Pianstore',
loading: '*⚙️ "Aku sedang mempersiapkan semuanya, tunggu sebentar ya? 😊"*',
errorMsg: '*❗ "Hmm, sepertinya ada yang tidak beres... Jangan khawatir, aku akan segera memperbaikinya. Tunggu sebentar, ya."*',
stickpack: 'pian',
stickauth: '© pianstore',
}
global.loading = async (m, conn, back = false) => {
if (!back) {
await conn.sendPresenceUpdate('composing', m.chat)
return conn.sendReact(m.chat, "🍥", m.key)
} else {
await conn.sendPresenceUpdate('paused', m.chat)
return conn.sendReact(m.chat, "", m.key)
}
}
/*============== EMOJI ==============*/
global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '📊',
limit: '🎫',
health: '❤️',
exp: '✨',
atm: '💳',
money: '💰',
bank: '🏦',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🛍️',
mythic: '🎁',
legendary: '🗃️',
superior: '💼',
pet: '🔖',
trash: '🗑',
armor: '🥼',
sword: '⚔️',
pickaxe: '⛏️',
fishingrod: '🎣',
wood: '🪵',
rock: '🪨',
string: '🕸️',
horse: '🐴',
cat: '🐱',
dog: '🐶',
fox: '🦊',
robo: '🤖',
dragon: '🐉',
lion: '🦁',
rhinoceros: '🦏',
centaur: '🦄',
scorpion: '🦂',
griffin: '🦅',
phoenix: '🐦‍🔥',
wolf: '🐺',
petfood: '🍖',
iron: '⛓️',
gold: '🪙',
emerald: '❇️',
upgrader: '🧰',
bibitanggur: '🌱',
bibitjeruk: '🌿',
bibitapel: '☘️',
bibitmangga: '🍀',
bibitpisang: '🌴',
anggur: '🍇',
jeruk: '🍊',
apel: '🍎',
mangga: '🥭',
pisang: '🍌',
botol: '🍾',
kardus: '📦',
kaleng: '🏮',
plastik: '📜',
gelas: '🧋',
chip: '♋',
umpan: '🪱',
skata: '🧩',
bitcoin: '☸️',
polygon: '☪️',
dogecoin: '☯️',
etherium: '⚛️',
solana: '✡️',
memecoin: '☮️',
donasi: '💸',
ammn: '⚖️',
bbca: '💵',
bbni: '💴',
cuan: '💷',
bbri: '💶',
msti: '📡',
steak: '🥩',
ayam_goreng: '🍗',
ribs: '🍖',
roti: '🍞',
udang_goreng: '🍤',
bacon: '🥓',
gandum: '🌾',
minyak: '🥃',
garam: '🧂',
babi: '🐖',
ayam: '🐓',
sapi: '🐮',
udang: '🦐'
}
if (typeof emot[string] !== 'undefined') {
return emot[string]
} else {
return ''
}
}
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.cyan.bold("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)
})