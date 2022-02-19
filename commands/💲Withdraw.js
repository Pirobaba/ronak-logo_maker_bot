/*CMD
  command: 💲Withdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("wallet")
if( wallet == undefined ){
Bot.sendMessage("_❌ Wallet Not set_")
}else{
if (balance.value() < 2){
Bot.sendMessage("*❌ You Have To Own At Least 2 Point*")
}else{
Bot.sendMessage("*🥰Enter The  Point To Withdraw*")
Bot.runCommand("Auto")
}
}}
