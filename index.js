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

import { join, dirname } from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { spawn } from 'child_process'
import { createInterface } from 'readline'
import yargs from 'yargs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
const { name, author } = require(join(__dirname, './package.json'))
const rl = createInterface(process.stdin, process.stdout)
let childProcess = null
function start(file) {
const args = [join(__dirname, file), ...process.argv.slice(2)]
childProcess = spawn(process.argv[0], args, {
stdio: ['inherit', 'inherit', 'inherit', 'ipc']
})
childProcess.on('message', (data) => {
if (data === 'uptime') childProcess.send(process.uptime())
})
childProcess.on('exit', (code) => {
console.log(`Process exited with code ${code}`)
childProcess = null
})
const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'] && !rl.listenerCount('line')) {
rl.on('line', (line) => childProcess?.send(line.trim()))
}
}

start('main.js')