const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const path = require('path');


const app = express()
const basicAuth = require('express-basic-auth')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(basicAuth({
    users: { 'kira': 'mantapbanget' }
}))

app.get('/', (req, res) => res.send({
    'status': 0,
    'response': {
        'path': '/api/v1/no-rek',
        'methode': 'POST',
        'auth': 'Basic a2lyYTptYW50YXBiYW5nZXQ=',
        'body': {
            'kodeBank': ' ',
            'noRek': ' '
        }
    },
    'description': 'nothings here'
}))
  
app.get('/api/v1/no-rek', (req, res) => res.send({
    'status': 0,
    'response': {
        'methode': 'POST',
        'auth': 'Basic a2lyYTptYW50YXBiYW5nZXQ=',
        'body': {
            'kodeBank': ' ',
            'noRek': ' '
        }
    },
    'description': '405 Method Not Allowed'
}))

app.post('/api/v1/no-rek', async (req, res) => {
    const params = {
        "kodeBank": req.body.kodeBank,
        "noRek": req.body.noRek
    }

    request(`https://api.makira.id/cek-norek?kodeBank=${params.kodeBank}&noRek=${params.noRek}`, function (error, response, body) {
        const resp = JSON.parse(body)
        res.send(resp)
    })
})

const port = 2020
app.listen(port, () => console.log(`Example app listening on port ${port}!`))