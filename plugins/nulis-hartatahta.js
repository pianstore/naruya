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

import { spawn } from 'child_process'
import { readdirSync, readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

let handler = async (m, { conn, text }) => {
try {
await global.loading(m, conn)
let img = await ht(text ? text : ':v')
await conn.sendFile(m.chat, img, 'Harta Tahta.png', '*© Nurutomo*\nMade with FFmpeg', m)
} finally {
await global.loading(m, conn, true)
}
}
handler.help = ['tahta']
handler.tags = ['maker']
handler.command = /^((harta)?tahta)$/i
handler.register = true

handler.limit = true

export default handler

let __dirname = global.__dirname(import.meta.url)
let src = join(__dirname, '../src/')
let tmp = join(__dirname, '../tmp/')
let _font = join(src, 'font')
let aesthetic = join(src, 'Aesthetic')

function ht(text = '') {
return new Promise((resolve, reject) => {
let img = join(aesthetic, pickRandom(readdirSync(aesthetic)))
let font = join(_font, 'Roboto-Black.ttf')
let w = 1024
let h = w
let s = w + 'x' + h
let xF = `(${noise('X', 2, w, 1)}+${noise('Y', 1, h, 1)})/2+128`
let yF = `((${pickRandom(['', '-'])}${45 * w / 2048}*${pickRandom(['sin', 'cos'])}(X/${w}*4*PI))+${noise('X', 5, w, 0.8)}+${noise('Y', 2, h, 1)})/1.7+128`
let fsize = 320 / 2048 * w
let lh = 1.5
let format = ''
let layers = [
`[v:0]scale=${s}${format}[im]`,
textArgs('HARTA', 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2-(text_h*${lh})`, w, h) + format + '[top]',
textArgs('TAHTA', 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2`, w, h) + format + '[mid]',
textArgs(text, 'black', 'white', fsize, font, '(w-text_w)/2', `(h-text_h)/2+(text_h*${lh})`, w, h) + format + '[bot]',
'[top][mid]blend=all_mode=addition[con]',
'[con][bot]blend=all_mode=addition[txt]',
`nullsrc=s=${s},geq='r=${xF}:g=${xF}:b=${xF}'[dx]`,
`nullsrc=s=${s},geq='r=${yF}:g=${yF}:b=${yF}'[dy]`,
'[txt][dx][dy]displace[wa]',
'[im][wa]blend=all_mode=multiply:all_opacity=1'
]

let o = 1 * new Date + '_harta_tahta.png'
o = join(tmp, o)
let args = [
'-y',
'-i', img,
'-filter_complex', layers.join(';'),
'-frames:v', '1',
o
]

spawn('ffmpeg', args)
.on('error', reject)
.on('close', () => {
try {
resolve(readFileSync(o))
unlinkSync(o)
} catch (e) {
reject(e)
}
})
//.stderr.on('data', a => console.log(a+''))
})
}

function noise(_var, depth = 4, s = 1024, freq) {
let forms = []
for (let i = 0; i < depth; i++) forms.push(
formula(
_var,
freq * rand(40, 80) * (s / 2048) / s * ((i + 1) / 5),
rand(-Math.PI, Math.PI),
(i + 1) / depth * 8,
0
)
)
return forms.join('+')
}

function formula(_var, freq, offset, amp, add) {
return `(${add.toFixed(3)}+${amp.toFixed(4)}*sin(${offset.toFixed(6)}+2*PI*${_var}*${freq.toFixed(6)}))`
}

function textArgs(text, background, color, size, fontfile, x = '200', y = '200', w = 1024, h = 1024) {
return `color=${background}:s=${w}x${h},drawtext=text='${text.replace(/[\\]/g, '\\$&')}':fontfile='${fontfile.replace(/[\\]/g, '\\$&')}':x=${x}:y=${y}:fontsize=${size}:fontcolor=${color}`
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function rand(min, max, q = 0.001) {
return Math.floor((Math.random() * (max - min)) / q) * q
}