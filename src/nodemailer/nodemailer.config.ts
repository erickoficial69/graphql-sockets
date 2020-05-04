import {createTransport} from 'nodemailer'

const gmailTransport = createTransport({
    service:'gmail',
    auth: {
        user: "erickoficial69@gmail.com",
        pass: "gmail_69"
    },
    tls:{
        rejectUnauthorized: false
    }
})

const sendingBlueTransport = createTransport({
    service: 'SendinBlue',
    auth: {
        user:process.env.SENDINBLUEUSER,
        pass: process.env.SENDINBLUEPASS
    },
    tls: {
        rejectUnauthorized: false
    }
})

const mailjetTransport = createTransport({
    service: "Mailjet",
    auth: {
        user: process.env.MAILJETUSER,
        pass: process.env.MAILJETPASS
    },
    tls: {
        rejectUnauthorized: false
    }
})

const mailgunTransport = createTransport({
    service: "mailgun",
    auth: {
        user: process.env.MAILGUNUSER,
        pass: process.env.MAILGUNPASS
    },
    tls: {
        rejectUnauthorized: false
    }
})

export {
    gmailTransport,
    sendingBlueTransport,
    mailjetTransport,
    mailgunTransport 
}