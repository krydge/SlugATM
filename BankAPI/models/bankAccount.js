class BankAccount
{
    constructor(userFirstName, userLastName, age, gender, address, pin, balance)
    {
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.pin = pin;

        this.accountNumber = this.generateAccountNumber();
        
        if (this.checkStartingBalance(balance))
            this.balance = balance;
        else
            console.error("Balance too low to open an account.");
    }

    checkStartingBalance(balance){
        if (balance >= 20)
        {
            return true;
        }
        else{
            return false;
        }
    }

    generateAccountNumber(){
        let num = "";
        for (let i = 0; i < 20; i++)
        {
            num += String(Math.floor(Math.random() * 9));
        }
        return 'US' + num; 
    }

    deposite(moneyIn)
    {
        if(moneyIn > 0)
        {
            this.balance = this.balance + moneyIn;
        }
        else
        {
            console.error("Invalid input");
            throw "invalid deposite amount";
        }
    }
}

module.exports = BankAccount