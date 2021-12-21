const els = require('./../config/mail.config').elastic;
const request = require('request');
const form = require('./../modules/template/register');

module.exports = {
    send_email: async function (param) {
        return new Promise((resolve) => {
            request({
                url: els.api + '/email/send',
                qs: {
                    apikey: els.apikey,
                    subject: param.subject,
                    from: els.from_mail,
                    msgTo: param.to_mail,
                    bodyHtml: form,
                    encodingType: els.encode
                },
                timeout: 5000
            }, function (err, resp, body) {
                if (err) resolve('Error')
                if (resp) console.log('OK')
                if (body) resolve(body)
            })
        })
    }
}