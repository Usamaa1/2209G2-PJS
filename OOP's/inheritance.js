class AlfalahBankAccount{
    constructor(accountTitle, accountNumber, balance){
        this.accountTitle = accountTitle;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    widthraw(amount){
        this.balance -= amount;
    }
}


class MeezanBankAccount extends AlfalahBankAccount{

    constructor(accountTitle, accountNumber, balance){
        super(accountTitle, accountNumber, balance);
    }
}

class HabibBankAccount extends AlfalahBankAccount{

    constructor(accountTitle, accountNumber, balance){
        super(accountTitle, accountNumber, balance);
    }
}


const zafarAlfalah = new AlfalahBankAccount('Zafar Supari', 738472387, 56000);
const zafarMeezan = new MeezanBankAccount('Zafar Supari', 738472387, 56000);
const zafarHabib = new HabibBankAccount('Zafar Supari', 738472387, 56000);

// const dawoodIbrahim = new BankAccount('Dawood Ibrahim', 5321423, 60000);


zafarMeezan.deposit(500)
// zafarMeezan.widthraw(100000)


console.log(zafarAlfalah);
console.log(zafarMeezan);
console.log(zafarHabib);
// console.log(dawoodIbrahim);

