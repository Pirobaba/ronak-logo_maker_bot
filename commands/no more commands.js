/*CMD
  command: no more commands
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

let balance = Libs.ResourcesLib.userRes("balance")
balance.add(100) //To get Balance in Admin's Account
Bot.sendMessage("*😊Done Check Your Balance👍🏻\n\n©️Dont Copy #DGAbhi*")
