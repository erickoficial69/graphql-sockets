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

export {
    gmailTransport,
    sendingBlueTransport 
}