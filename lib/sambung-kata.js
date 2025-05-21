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

import fs from 'fs'
async function sKata() {
    return new Promise((resolve, reject) => {
        let kbbi = JSON.parse(fs.readFileSync('./json/kbbi.json', 'utf-8'))
        let huruf = random(['a', 'b', 'c', 'd', 'e', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'u', 'w'])
        let res = kbbi.filter(v => v.startsWith(huruf))
        resolve({
            status: true, kata: random(res)
        })
    })
}

async function cKata(input) {
    return new Promise((resolve, reject) => {
        let kbbi = JSON.parse(fs.readFileSync('./json/kbbi.json', 'utf-8'))
        if (!kbbi.find(v => v == input.toLowerCase())) return resolve({
            creator: '@neoxrs – Wildan Izzudin', status: false
        })
        resolve({
            creator: '@neoxrs – Wildan Izzudin', status: true
        })
    })
}

function random(list) {
    return list[Math.floor(Math.random() * list.length)]
}

export {
    sKata,
    cKata
}