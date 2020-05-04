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
        user: 'jamorocho1@gmail.com',
        pass: 'xsmtpsib-ef71fdb8ab9782052d368e507b97f75798c6c56d6ed69b3e74c9265badc977ee-A4xjIY2FJVbSMXOy'
    },
    tls: {
        rejectUnauthorized: false
    }
})

const mailjetTransport = createTransport({
    service: "Mailjet",
    auth: {
        user: '74448a89515bec021136362387776d13',
        pass: '2549b52d861e8c27265e8a8b943f9d95'
    },
    tls: {
        rejectUnauthorized: false
    }
})

const mailgunTransport = createTransport({
    service: "mailgun",
    auth: {
        user: 'dwa@sandbox7fcb2a005cb24af6b5bd79247b49d029.mailgun.org',
        pass: 'f32e74b2cde4123517cf203bc9fd392d-65b08458-289f9744'
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