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

export {
    gmailTransport
}