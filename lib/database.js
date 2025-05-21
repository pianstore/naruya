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

import { resolve, dirname as _dirname } from 'path'
import _fs, { existsSync, readFileSync } from 'fs'
const { promises: fs } = _fs

class Database {
constructor(filepath, ...args) {
this.file = resolve(filepath)
this.logger = console
this._load()
this._jsonargs = args
this._state = false
this._queue = []
this._interval = setInterval(async () => {
if (!this._state && this._queue && this._queue[0]) {
this._state = true
await this[this._queue.shift()]().catch(this.logger.error)
this._state = false
}
}, 1000)
}
get data() {
return this._data
}
set data(value) {
this._data = value
this.save()
}
load() {
this._queue.push('_load')
}
save() {
this._queue.push('_save')
}
_load() {
try {
return this._data = existsSync(this.file) ? JSON.parse(readFileSync(this.file)) : {}
} catch (e) {
this.logger.error(e)
return this._data = {}
}
}
async _save() {
let dirname = _dirname(this.file)
if (!existsSync(dirname)) await fs.mkdir(dirname, { recursive: true })
await fs.writeFile(this.file, JSON.stringify(this._data, ...this._jsonargs))
return this.file
}
}

export default Database