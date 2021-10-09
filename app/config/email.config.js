module.exports = {
    emailFrom: process.env.EMAIL_ID,
    smtpOptions: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASS
        }
    }
};