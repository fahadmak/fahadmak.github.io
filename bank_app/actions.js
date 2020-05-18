(function() {

    let inputName;
    let inputDeposit;
    let btnCreateAcct;
    let accountsBox;
    let accountInfoList = [];

    window.onload = function() {
        inputName = document.getElementById("accName");
        inputDeposit = document.getElementById("accDeposit");

        btnCreateAcct = document.getElementById("accBtn");
        btnCreateAcct.onclick = createAccount;

        accountsBox = document.getElementById("mytextarea");
    };

    let makeAccount = function() {
        let privateName = "";
        let balance = 0;

        let addBalance = function(amount) {
            balance += amount;
        };

        let deposit = function(amount) {
            addBalance(amount);
        };

        let addName = function(name) {
            privateName = name;
        };
        let setName = function(name) { addName(name); };
        return {
            getName: function() { return privateName; },
            setName: setName,
            getBalance: function() { return balance; },
            deposit: deposit,
        };
    };

    function createAccount() {
        let account = makeAccount();
        account.setName(inputName.value);
        account.deposit(parseInt(inputDeposit.value));
        accountInfoList.push(account);
        let accountsDisplay = "";
        accountInfoList.forEach(account =>
            accountsDisplay += `Account name: ${account.getName()} Balance: ${account.getBalance()}\n`);
        accountsBox.value = accountsDisplay;
    }
})();