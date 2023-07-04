
// function BankAccount(accountTitle, accountNumber,balance){
//     this.accountTit = accountTitle;
//     this.accountNumber = accountNumber;
//     this.balance = balance;
// }


// BankAccount.prototype.msg = function(accountTit){
//     console.log('message:' + this.accountTit);
    
// }




// let amjadAccount = new BankAccount('Amjad Khan',875423874823, 2300)
// let talibAccount = new BankAccount('Talib Uddin',232323233874823, 30000)

// amjadAccount.apply = function(){
//     console.log('hello');
    
// }

// amjadAccount.apply()

// amjadAccount.msg()
// talibAccount.msg()

// console.log(amjadAccount, talibAccount);






class BankAccount{
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



const zafar = new BankAccount('Zafar Supari', 738472387, 56000);
const dawoodIbrahim = new BankAccount('Dawood Ibrahim', 5321423, 60000);


zafar.deposit(500)
zafar.widthraw(100000)


console.log(zafar);
console.log(dawoodIbrahim);















