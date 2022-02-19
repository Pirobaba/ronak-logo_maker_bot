/*CMD
  command: ⚙️Set wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send Your Logo Name*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var wallet = User.getProperty("wallet")
var wallet = User.setProperty("wallet", message, "string")
Bot.sendMessage("*Logo Name Set To "+message+"*")
