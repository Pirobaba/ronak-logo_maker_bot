/*CMD
  command: Auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var withdrawn = Bot.getProperty("totalWithdrawn");
withdrawn = parseFloat(withdrawn); 
var wallet = User.getProperty("wallet");
var balance = Libs.ResourcesLib.userRes("balance")
if(message < 2 ){
Bot.sendMessage("_❌ Minimum Withdraw 2 Points_")
}else{
if(message > balance.value()){
Bot.sendMessage("_❌ Maximum Withdraw "+balance.value().toFixed(20)+" points_")
}else{
Bot.sendMessage("*📤 Withdrawal Sent 📤\n\n💳 Transaction Details = Generating....\n 💰Amount = "+message+" Point\n💼 Account = "+wallet+"\n\n⛔ May Be It Will Take Upto 24 Hours To Complete Your Payment⏰*")
balance.add(-message)
Api.sendMessage({ 
chat_id: "@ronaklogopayment", 
text: "*🔋 New Withdraw Processing 🔋\n\n▪️ Status = Processing\n◼User = @"+user.username+"\n▪️ User Id = "+user.telegramid+"\n▪️ Amount = "+message+" Points*\n\n*📱 Logo Name = "+wallet+"*\n\n*👮🏻‍♂ Bot = @"+bot.name+"*" , 
parse_mode: "Markdown"})
}}
var withdraw = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
withdraw.add(+message)
