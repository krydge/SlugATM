const express = require('express')
const cors = require('cors')
const BankAccount = require('./models/bankAccount.js')
const BankAccountBuilder = require('./models/bankAccountBuilder.js')
const app = express()
const port = 5001
app.use(cors())
app.get('/', (req, res) => {
    console.info('/')
    res.send('Welcome to the slug bank')
})

//create a new accout
app.route('/createAccount')
    .get((req, res) => {
        console.info('/create account')
        // let account = new BankAccount('kaydon', 'stubbs', 28, 'Male', '300 n 300 e, Ephraim UT 84627',4662,25) 
        let account = (new BankAccountBuilder())
            .addFirstName('kaydon')
            .addLastName('stubbs')
            .addBirthDate(new Date())
            .addGender('M')
            .addAddress('420 south 68 east')
            .addPin('3456')
            .addBalance(120.0)
            .finalizeBankAccount()
        console.info(account)
        res.send("Success")
    })
app.listen(port, (err) => {
    if (err) {
        console.error("failed to start slug bank api")
    }
    console.log("Slug Bank API Started on " + port)
})