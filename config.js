require("./all/module")

global.owner = "https://chat.whatsapp.com/L0WvEfe3kV66mhrZAhfzcT" 
global.namabot = "TREASURE404DANGER" //BOT NAME
global.namaCreator = "*TREASURE404DANGER*" //CREATOR NAME
global.autoJoin = false //DON'T CHANGE  / JANGAN GANTI
global.antilink = false //DON'T CHANGE  / JANGAN GANTI
global.versisc = '1.0.0' //DON'T CHANGE 
global.sessionName = 'session'
global.codeInvite = ""
global.imageurl = 'https://telegra.ph/file/6b841282edd26fa590b6c.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://chat.whatsapp.com/L0WvEfe3kV66mhrZAhfzcT' 
global.thumb = fs.readFileSync("./thumb.png") ///DON'T CHANGE  
global.audionya = fs.readFileSync("./all/sound.mp3") //DON'T CHANGE  
global.packname = "𝐁𝐲 TREASURE404DANGER " 
global.author = "*TREASURE404DANGER👑*" 
global.jumlah = "5" ////DON'T CHANGE

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
