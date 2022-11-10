let accountData = [
    {
        name: "Saving Account - 1",
        id: 9876
    },
    {
        name: "Saving Account - 2",
        id: 8765
    },
    {
        name: "Saving Account - 3",
        id: 7654
    },
    {
        name: "Saving Account - 4",
        id: 6543
    },
    {
        name: "Saving Account - 5",
        id: 5432
    }
]

const findAccount = (accountData, accountId) => {
    let resultObject = {};
    let returnAccounts = [];
    // if else, for loop
    // for (thisAccount of accountData) {
    //     if (thisAccount.id === accountId) {
    //         returnAccounts.push(thisAccount);
    //     }
    // }
    // resultObject = returnAccounts[0];
    // return resultObject
    // filter
    resultObject = {};
    returnAccounts = accountData.filter(account => account.id === accountId);
    if (returnAccounts.length > 0) {
        resultObject = returnAccounts[0];
    }
    return resultObject;
}

console.log('\nfindAccount function using filter() :');

console.log(findAccount(accountData, 8765));
console.log(findAccount(accountData, 1234));


const findAccount2 = (accountData, accountId) => {
    let resultObject = {};
    let returnAccounts = [];
    let myAccount = accountData.find(account => account.id === accountId);
    if (myAccount) {
        resultObject = myAccount;
    }
    return resultObject;
}

console.log('\nfindAccount function using find() :')

console.log(findAccount2(accountData, 8765));
console.log(findAccount2(accountData, 1234));


const findAccount3 = (accountData, accountId) => {
    let resultObject = {};
    // if else, for loop
    for (thisAccount of accountData) {
        if (thisAccount.id === accountId) {
            resultObject = thisAccount;
            break
        }
    }
    return resultObject
}

console.log('\nfindAccount function using if-else, and for-loop')

console.log(findAccount3(accountData, 8765));
console.log(findAccount3(accountData, 1234));

