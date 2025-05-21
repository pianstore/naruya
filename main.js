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

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
process.env['NODE_NO_WARNINGS'] = '1'
import './config.js'
import cron from "node-cron"
import { checkSewa, checkPremium, resetSahamPrice, resetCryptoPrice, resetLimit, resetChat, resetCommand, Backup, resetVolumeSaham, resetVolumeCrypto, clearMemory, OtakuNews, checkGempa, updateSaham, clearTmp, updateCrypto } from "./lib/scedule.js"
import { createRequire } from "module"
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { platform } from 'process'
import * as ws from 'ws'
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs'
import yargs from 'yargs'
import { spawn, execSync } from 'child_process'
import syntaxerror from 'syntax-error'
import chalk from 'chalk'
import readline from 'readline'
import P from 'pino'
import { tmpdir } from 'os'
import { format } from 'util'
import { makeWASocket, protoType, serialize, prepareSocketMeta, loadAuthState } from './lib/simple.js'
import redis from './lib/redis.js'
import { JSONFilePreset } from 'lowdb/node'
import { EventEmitter } from 'events'
import os from 'os'
import pkg from 'baileys'
EventEmitter.defaultMaxListeners = 0
const { PHONENUMBER_MCC, DisconnectReason, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, Browsers } = pkg
const { CONNECTING } = ws
const pairingAuth = global.config.pairingAuth

protoType()
serialize()

global.redisClient = redis
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') {
return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString()
}
global.__dirname = function dirname(pathURL) {
return path.dirname(global.__filename(pathURL, true))
}
global.__require = function require(dir = import.meta.url) {
return createRequire(dir)
}
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.config.APIs ? global.config.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
...query, ...(apikeyqueryname ? {
[apikeyqueryname]: global.config.APIKeys[name in global.config.APIs ? global.config.APIs[name] : name]
} : {})
})) : '')
global.timestamp = {
start: new Date()
}
const __dirname = global.__dirname(import.meta.url)
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
const db = await JSONFilePreset(path.join(__dirname, 'database.json'), {
users: {},
chats: {},
stats: {},
settings: {},
bots: {}
})
global.db = db
global.loadDatabase = async function () {
await db.read()
}
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
return new Promise((resolve) => {
rl.question(text, resolve)
})
}

async function Crystalia() {
const { state, saveCreds } = await loadAuthState()
const { version: baileysVersion } = await fetchLatestBaileysVersion()
let dbStatus = global.db?.data ? 'Tersedia' : 'Kosong!'
let redisStatus = global.redisClient ? 'Aktif' : 'Nonaktif'
console.log(chalk.cyan.bold(`
╭────────────────────────────────────╮
│ 📡 Koneksi berhasil! 📡
│ ─────────────────────────────────
│ 📡  Baileys : v${baileysVersion.join('.')}
│ 📅  Tanggal : ${new Date().toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}
│ 🌐  Sistem : ${process.platform} CPU: ${process.arch}
│ 🗂️  Database : ${dbStatus}
│ 🧠  Redis : ${redisStatus}
╰────────────────────────────────────╯
`))
const connectionOptions = {
version: baileysVersion,
logger: P({ level: 'silent' }),
printQRInTerminal: !pairingAuth,
browser: Browsers.ubuntu('Safari'),
syncFullHistory: false,
generateHighQualityLinkPreview: true,
markOnlineOnConnect: true,
emitOwnEvents: true,
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, P().child({
level: 'silent',
stream: 'store'
}))
}
}
global.conn = makeWASocket(connectionOptions)
conn.isInit = false
if (pairingAuth && !conn.authState.creds.registered) {
setTimeout(async () => {
let Number = await prepareSocketMeta()
let code = await conn.requestPairingCode(Number, conn.Pairing)
code = code?.match(/.{1,4}/g)?.join("-") || code
console.log(chalk.cyan.bold(`
╭────────────────────────────────────╮
│ 🎉  Kode Pairing Siap Digunakan!  🎉
│ ─────────────────────────────────
│ 📄  Kode Pairing : ${chalk.white.bold(code)}
│ 🕒  ${chalk.white.bold(new Date().toLocaleString())}
╰────────────────────────────────────╯
`))
}, 3000)
}

if (!opts['test']) {
setInterval(async () => {
if (global.db.data) await global.db.write().catch(console.error)
}, 10 * 1000)
cron.schedule('0 0 * * *', async () => {
await resetCommand()
await resetChat()
await resetLimit()
await resetCryptoPrice()
await resetSahamPrice()
}, { scheduled: true, timezone: "Asia/Jakarta" })
cron.schedule('0 */6 * * *', async () => {
await Backup()
await resetVolumeSaham()
await resetVolumeCrypto()
await clearTmp()
await clearMemory()
}, { scheduled: true, timezone: "Asia/Jakarta" })
cron.schedule('*/10 * * * *', async () => {
await updateSaham()
await updateCrypto()
await checkGempa()
await OtakuNews()
await checkSewa()
await checkPremium()
}, { scheduled: true, timezone: "Asia/Jakarta" })
}

async function connectionUpdate(update) {
const { receivedPendingNotifications, connection, lastDisconnect, isOnline, isNewLogin } = update
if (isNewLogin) conn.isInit = true
if (connection === 'connecting') {
console.log(chalk.yellow.bold(`🚀  Mengaktifkan, Mohon tunggu sebentar`))
}
if (connection === "open") {
console.log(chalk.cyan.bold(`⚡  Tersambung!  berhasil diaktifkan.`))
}
if (isOnline === false) {
console.log(chalk.redBright.bold(`🔴  Status: Terputus!`))
console.log(chalk.red.bold(`❌  Koneksi ke WhatsApp telah hilang.`))
console.log(chalk.red.bold(`🚀  Mencoba menyambungkan kembali`))
}
if (receivedPendingNotifications) {
console.log(chalk.cyan.bold(`📩  Status: Menunggu Pesan Baru`))
}
if (connection === 'close') {
console.log(chalk.redBright.bold(`⚠️  Koneksi Terputus!`))
console.log(chalk.red.bold(`📡  Mencoba Menyambung Ulang`))
}
global.timestamp.connect = new Date
if (lastDisconnect && lastDisconnect.error) {
const { statusCode } = lastDisconnect.error.output || {}
if (statusCode !== DisconnectReason.loggedOut) {
await global.reloadHandler(true)
console.log(chalk.redBright.bold(`🔌 Connecting`))
}
}
if (global.db.data == null) await global.loadDatabase()
}
process.on('uncaughtException', console.error)
let isInit = true
let handler = await import('./handler.js')
global.reloadHandler = async function (restatConn) {
try {
const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = global.conn.chats
try {
global.conn.ws.close()
} catch {}
conn.ev.removeAllListeners()
global.conn = makeWASocket(connectionOptions, {
chats: oldChats
})
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
conn.spromote = '@user sekarang admin!'
conn.sdemote = '@user sekarang bukan admin!'
conn.welcome = 'Hallo @user Selamat datang di @subject\n\n@desc'
conn.bye = 'Selamat tinggal @user'
conn.sRevoke = 'Link group telah diubah ke \n@revoke'
conn.handler = handler.handler.bind(global.conn)
conn.participantsUpdate = handler.participantsUpdate.bind(global.conn)
conn.onDelete = handler.deleteUpdate.bind(global.conn)
conn.connectionUpdate = connectionUpdate.bind(global.conn)
conn.credsUpdate = saveCreds.bind(global.conn)
conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.participantsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}
const pluginFolder = global.__dirname(join(__dirname, './plugins/index'))
const pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
async function filesInit() {
for (let filename of readdirSync(pluginFolder).filter(pluginFilter)) {
try {
let file = global.__filename(join(pluginFolder, filename))
const module = await import(file)
global.plugins[filename] = module.default || module
} catch (e) {
conn.logger.error(e)
delete global.plugins[filename]
}
}
}
filesInit().catch(console.error)
global.reload = async (_ev, filename) => {
if (pluginFilter(filename)) {
let dir = global.__filename(join(pluginFolder, filename), true)
if (filename in global.plugins) {
if (existsSync(dir)) conn.logger.info(`🍃 Memuat ulang plugin '${filename}'`)
else {
conn.logger.warn(`⚠️ Plugin '${filename}' telah dihapus`)
return delete global.plugins[filename]
}
} else conn.logger.info(`📢 Memuat plugin baru: '${filename}'`)
let err = syntaxerror(readFileSync(dir), filename, {
sourceType: 'module',
allowAwaitOutsideFunction: true
})
if (err) conn.logger.error(`❌ Terjadi kesalahan sintaks saat memuat plugin '${filename}'\n${format(err)}`)
else try {
const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`))
global.plugins[filename] = module.default || module
} catch (e) {
conn.logger.error(`❌ Terjadi kesalahan saat memuat plugin '${filename}'\n${format(e)}`)
} finally {
global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
}
}
}
Object.freeze(global.reload)
watch(pluginFolder, global.reload)
await global.reloadHandler()
}

Crystalia()