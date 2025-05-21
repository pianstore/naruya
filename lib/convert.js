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

import path from 'path'
import fs from 'fs'
import { load } from 'cheerio'
import { spawn } from 'child_process'
import { unlinkSync, readFileSync } from 'fs'
import { tmpdir } from 'os'

async function webpToMp4(file) {
try {
let form = new FormData()
form.append('new-image-url', '')
form.append('new-image', file, { filename: 'sticker.webp' })

let uploadResponse = await fetch('https://ezgif.com/webp-to-mp4', {
method: 'POST',
body: form
})
if (!uploadResponse.ok) throw new Error('Gagal mengunggah stiker')
let uploadHtml = await uploadResponse.text()
let $ = load(uploadHtml)
let fileValue = $('input[name="file"]').attr('value')
if (!fileValue) return null
let convertForm = new FormData()
convertForm.append('file', fileValue)
convertForm.append('convert', 'Convert WebP to MP4!')
let convertResponse = await fetch(`https://ezgif.com/webp-to-mp4/${fileValue}`, {
method: 'POST',
body: convertForm
})
if (!convertResponse.ok) throw new Error('Gagal mengonversi stiker')
let convertHtml = await convertResponse.text()
$ = load(convertHtml)
let resultUrl = $('div#output > p.outfile > video > source').attr('src')
return resultUrl ? `https:${resultUrl}` : null
} catch (e) {
console.error('Error converting WebP to MP4:', e)
return null
}
}

async function audioEffect(m, conn, effectName) {
let effects = {
bass: '-af equalizer=f=94:width_type=o:width=2:g=30',
blown: '-af acrusher=.1:1:64:0:log',
deep: '-af atempo=4/4,asetrate=44500*2/3',
earrape: '-af volume=12',
fast: '-filter:a "atempo=1.05,asetrate=44100,equalizer=f=100:width_type=o:width=2:g=5"',
fat: '-filter:a "atempo=1.6,asetrate=22100"',
nightcore: '-filter:a atempo=1.06,asetrate=44100*1.25',
reverse: '-filter_complex "areverse"',
robot: '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"',
slow: '-filter:a "atempo=0.7,asetrate=44100"',
smooth: '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"',
tupai: '-filter:a "atempo=0.5,asetrate=65100"',
audio8d: '-af apulsator=hz=0.125:amount=1',
echo: '-af aecho=0.8:0.9:1000:0.3',
distortion: '-af "acompressor=threshold=0.1:ratio=20:attack=1:release=10,acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1"',
pitch: '-af "reverb=80:100:100:100:0:0"',
reverb: '-af "aecho=0.8:0.9:1000:0.3, aecho=0.8:0.9:500:0.5, aecho=0.8:0.9:250:0.7"',
flanger: '-af "asetrate=48000*1.5,atempo=1.5,asetrate=48000,equalizer=f=8000:width_type=h:width=50:g=6,apulsator=hz=0.125:amount=1"',
apulsator: '-af apulsator=hz=0.125',
tremolo: '-af tremolo=f=6.0:d=0.8',
chorus: '-af chorus=0.7:0.9:55:0.4:0.25:2'
}
let q = m.quoted || m
let mime = (q.msg || q).mimetype || q.mediaType || ''
let set = effects[effectName.toLowerCase()]
if (!set) throw `❌ *Efek tidak ditemukan!*`
if (!/audio/.test(mime)) throw `❗ *Balas file audio atau VN dengan perintah!*`
await global.loading(m, conn)
let inputPath = path.join(tmpdir(), `input-${Date.now()}.mp3`)
let outputPath = path.join(tmpdir(), `output-${Date.now()}.mp3`)
let media = await q.download(true)
await execPromise(`ffmpeg -i ${media} ${set} ${outputPath}`)
unlinkSync(media)
let result = readFileSync(outputPath)
await conn.sendMessage(m.chat, { audio: result, mimetype: 'audio/mpeg', ptt: false }, { quoted: m })
unlinkSync(outputPath)
}

async function execPromise(command) {
return new Promise((resolve, reject) => {
exec(command, (error, stdout, stderr) => {
if (error) reject(error)
else resolve(stdout)
})
})
}

export { webpToMp4, audioEffect, execPromise }