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

import { writeFile, unlink, readFile } from 'fs/promises'
import { join } from 'path'
import { fileTypeFromBuffer } from 'file-type'

async function uploader(buffer, tmp = 'false') {
if (!buffer) throw new Error('Buffer tidak boleh kosong')
const { ext, mime } = (await fileTypeFromBuffer(buffer)) || {}
if (!ext || !mime) throw new Error('Format file tidak didukung atau buffer rusak')
const tmpPath = join('./tmp', `upload.${ext}`)
await writeFile(tmpPath, buffer)
const formData = new FormData()
formData.append("file", new Blob([await readFile(tmpPath)], { type: mime }), `upload.${ext}`)
formData.append("apikey", global.config.APIKeys['https://api.betabotz.eu.org'])
formData.append("tmp", tmp)
try {
const response = await fetch("https://api.betabotz.eu.org/api/tools/upload", {
method: "POST",
body: formData
})
const data = await response.json()

await unlink(tmpPath)
return data.result || null
} catch (error) {
console.error('Upload gagal:', error)
await unlink(tmpPath).catch(() => null)
return null
}
}

export { uploader }