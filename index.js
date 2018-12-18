const express = require('express')
const cron = require('node-cron')
const Nexmo = require('nexmo')
if (process.env.NODE_ENV == 'development') {
  require('dotenv').config()
}

// initialize express
const app = express()

// Set nexmo apiKey and Secret
const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET
})

// initialize the sendee, recipient, and text content
const from = 'Nexmo'
const to = process.env.MY_PHONE_NUMBER
const text = (name) => `its ${name}'s birthday! Send her a message!`

// Birthday Dates
const bdays = {
  salamuu: '0 0 8 2 *',
  thuraya: '0 0 9 2 *',
  thaniya: '0 0 18 12 *',
  zuweina: '0 0 8 12 *',
  dad: '0 0 10 10 *',
  mom: '0 0 8 1 *'
}

// List of cron job depending on birthday date
cron.schedule(bdays.salamuu, () => {
    console.log(text(Object.keys(bdays)[0]));
    nexmo.message.sendSms(from, to, text(Object.keys(bdays)[0]));
});

cron.schedule(bdays.thuraya, () => {
    console.log(text(Object.keys(bdays)[1]));
    nexmo.message.sendSms(from, to, text(Object.keys(bdays)[1]));
});

cron.schedule(bdays.thaniya, () => {
    console.log(text(Object.keys(bdays)[2]));
    nexmo.message.sendSms(from, to, text(Object.keys(bdays)[2]));
});

cron.schedule('0 13 18 12 *', () => {
    console.log(text(Object.keys(bdays)[2]));
    nexmo.message.sendSms(from, to, text(Object.keys(bdays)[2]));
});

cron.schedule(bdays.zuweina, () => {
    console.log(text(Object.keys(bdays)[3]));
    nexmo.message.sendSms(from, to, text(Object.keys(bdays)[3]));
});

cron.schedule(bdays.dad, () => {
    console.log(text(Object.keys(bdays)[4]));
    nexmo.message.sendSms(from, to, text(Object.keys(bdays)[4]));
});

cron.schedule(bdays.mom, () => {
    console.log(text(Object.keys(bdays)[5]));
    nexmo.message.sendSms(from, to, text(Object.keys(bdays)[5]));
});

// listen for server
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on ${process.env.PORT}`);
})