function Account(accountNumber, balance) {
  this._accountNumber = accountNumber;
  this._balance = balance;
}

Account.prototype.deposit = function(amount) {
  console.log("[DEPOSIT]")
  console.log(`---deposit amount: ${amount}---`);
  this._balance += amount;
  console.log(`deposit statue: successful, the balance is ${this._balance}`);
  console.log("-------------------------------");
}

Account.prototype.withdraw = function(amount) {
  console.log("[WITHDRAW]")
  console.log(`---withdraw amount: ${amount}---`);
  if (amount <= this._balance) {
    this._balance -= amount;
    console.log(`withdraw statue: successful, the balance is ${this._balance}`);
  } else {
    console.log(`withdraw statue: failed, insufficient balance! the balance is ${this._balance}`);
  }
  console.log("--------------------------------");
}

function SavingsAccount(accountNumber, balance, interestRate) {
  Account.call(this, accountNumber, balance);

  this._interestRate = interestRate;

  console.log(`Created a Saving Account, the Account Number is ${this._accountNumber},  the balance is: ${this._balance}`);
}

Object.setPrototypeOf(SavingsAccount.prototype, Account.prototype);

SavingsAccount.prototype.addInterest = function () {
  this._balance = this._balance + (this._balance * (this._interestRate / 100));

  console.log(`[Added interest]`);
  console.log(`the balance is: ${this._balance} now`);
  console.log("--------------------");
}

function CheckingAccount(accountNumber, balance) {
  Account.call(this, accountNumber, balance);

  console.log(`Created a Checking Account, the Account Number is ${this._accountNumber},  the balance is: ${this._balance}`);
}

Object.setPrototypeOf(CheckingAccount.prototype, Account.prototype);

CheckingAccount.prototype.withdrawUsingCheck = function (amount) {
  console.log('Function: Withdraw Using Check')
  this.withdraw(amount)
}

const savingAccount = new SavingsAccount(123456, 500, 10);
savingAccount.addInterest();
savingAccount.withdraw(100);
savingAccount.withdraw(500);
savingAccount.deposit(100);
savingAccount.withdraw(500);

const checkingAccount = new CheckingAccount(654321, 500);
checkingAccount.withdraw(100);
checkingAccount.withdrawUsingCheck(500);
checkingAccount.deposit(100);
checkingAccount.withdrawUsingCheck(500);