const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
const basicAuth = require('express-basic-auth')
app.use(bodyParser.json())
app.use(basicAuth({
    users: { 'kira': 'mantapbanget' }
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