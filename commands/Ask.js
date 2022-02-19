/*CMD
  command: Ask
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: *SEND THE MESSAGE, I Will Send That To Admin*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
User.setProperty("Ask" , data.message ,"string")
Bot.sendMessage("*📩 Message sent to admin as :* "+data.message+"")
Bot.sendMessageToChatWithId(your Telegram id, "*New Message From* ["+user.telegramid+"](tg://user?id="+user.telegramid+")\n\n*💬Message:* _"+message+"_")
