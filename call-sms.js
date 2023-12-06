require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

function urgentCall() {
  client.calls
    .create({
      url: "https://handler.twilio.com/twiml/EHc935f6d8be2b46e74e55b1a45c8350a3",
      to: "+15875746016",
      from: "+12495234046",
    })
    .then((call) => console.log(call.sid));
}

function urgentMessage(msg) {
  client.messages
    .create({
      body: msg,
      from: "+12495234046",
      to: "+15875746016",
    })
    .then((message) => console.log(message.sid));
}

function emergencyCall() {
  client.calls
    .create({
      url: "https://handler.twilio.com/twiml/EH4f341d83a861a6da41872144b7fec1fc",
      to: "+15875746016",
      from: "+12495234046",
    })
    .then((call) => console.log(call.sid));
}

module.exports = { urgentCall, urgentMessage, emergencyCall };
