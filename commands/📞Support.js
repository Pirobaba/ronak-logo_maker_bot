/*CMD
  command: 📞Support
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

let Ask = User.getProperty("Ask")
var button = [{ title : "✏️Write me" , command : "Ask" }]
Bot.sendInlineKeyboard(button , "*📫 Last Question :* "+Ask+"")
