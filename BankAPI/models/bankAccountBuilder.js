// userFirstName, userLastName, birthDate, gender, address, pin, balance

const BankAccount = require("./bankAccount")

class BankAccountBuilder {
    addFirstName(firstName) {
        this.firstName = firstName
        return this
    }
    addLastName(lastName) {
        this.lastName = lastName
        return this
    }
    addBirthDate(birthDate) {
        this.birthDate = birthDate
        return this
    }
    addGender(gender) {
        this.gender = gender
        return this
    }
    addAddress(address) {
        this.address = address
        return this
    }
    addPin(pin) {
        this.pin = pin
        return this
    }
    addBalance(balance) {
        this.balance = balance
        return this
    }
    finalizeBankAccount() {
        this.validateNotEmpty('balance', this.balance)
        this.validateNotEmpty('pin', this.pin)
        this.validateNotEmpty('address', this.address)
        this.validateNotEmpty('gender', this.gender)
        this.validateNotEmpty('birthdate', this.birthDate)
        this.validateNotEmpty('lastName', this.lastName)
        this.validateNotEmpty('firstName', this.firstName)
        return new BankAccount(
            this.firstName,
            this.lastName,
            this.birthDate,
            this.gender, 
            this.address, 
            this.pin, 
            this.balance
            )
    }
    validateNotEmpty(label, value) {
        if (typeof (value) === 'undefined') {
            throw `Could not build bankaccount. Value ${label} is undefined. `
        }
    }
}

module.exports = BankAccountBuilder