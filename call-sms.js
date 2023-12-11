require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

function urgentCall() {
  client.calls
    .create({
      url: "",
      to: "",
      from: "",
    })
    .then((call) => console.log(call.sid));
}

function urgentMessage(msg) {
  client.messages
    .create({
      body: msg,
      from: "",
      to: "",
    })
    .then((message) => console.log(message.sid));
}

function emergencyCall() {
  client.calls
    .create({
      url: "",
      to: "",
      from: "",
    })
    .then((call) => console.log(call.sid));
}

module.exports = { urgentCall, urgentMessage, emergencyCall };
