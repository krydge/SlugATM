class BankAccount
{
    constructor(userFirstName, userLastName, age, gender, address, pin, balance)
    {
        self.userFirstName = userFirstName;
        self.userLastName = userLastName;
        self.age = age;
        self.gender = gender;
        self.address = address;
        self.pin = pin;

        self.accountNumber = generateAccountNumber();
        
        if (this.checkStartingBalance())
            self.balance = balance;
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
        num = "";
        for (i = 0; i < 20; i++)
        {
            num += String(Math.floor(Math.random() * 9));
        }
        return 'US' + num; 
    }

    deposite(moneyIn)
    {
        if(moneyIn > 0)
        {
            self.balance = self.balance + moneyIn;
        }
        else
        {
            console.error("Invalid input");
            throw "invalid deposite amount";
        }
    }
}