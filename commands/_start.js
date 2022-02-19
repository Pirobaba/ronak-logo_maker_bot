/*CMD
  command: /start
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

var button = [{ title : "✅CHECK" , command : "✅CHECK" }]
Bot.sendInlineKeyboard(button , "*🛡 Subscribe Our Channels If You Want To Start The Bot And Earn From It: \n\n➤ @MYSTERIOUS_PREMIUMS\n@MYSTERIOUS_CHATS\n➤Payment Channel 👇🏻👇🏻\n➤@ronaklogopayment\n☑️ Done Subscribed! Click ✅CHECK*")
function hello(message) {
var greetings = ""

Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
hello("")
var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
balance.add(0.5)
Bot.sendMessageToChatWithId(refUser.chatId, "*🏧 New Referral : +0.5 ₹*");
}

function doAlreadyAttracted(){
Bot.sendMessage("*You Already Started The Bot ❌*");
}

var trackOptions = {
onTouchOwnLink: doTouchOwnLink,
onAttracted: doAttracted,
onAtractedByUser: doAtractedByUser,
onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
