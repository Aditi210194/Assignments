/*Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction*/

//Print total number of credit and debit transactions completed
let transaction : number[] =[50000,-2000,3000,-15000,-200,-300,4000,-3000];

let totaltransactionsdebit : number = 0;
let totaltransactionscredit : number = 0;

for(let j = 0; j <= transaction.length-1; j++){
    
    if(transaction[j] < 0)
    {
        totaltransactionsdebit++;
    }
    else{
        totaltransactionscredit++;
    };
};
console.log(`total number of debit transactions completed : ${totaltransactionsdebit}`);
console.log(`total number of credit transactions completed : ${totaltransactionscredit}`);

//Print the total amount credited and debited in account
let debittransaction : number = 0;
let credittransaction : number = 0;
for(let i = 0; i <= transaction.length-1;i++){
     
     if(transaction[i] < 0 ){
        debittransaction += transaction[i];
    }
    else{
        credittransaction += transaction[i];
    };
};
console.log(`total amount debited  :${debittransaction}`);
console.log(`total amount credited  :${credittransaction}`);

//Print total amount remaining at the end in Bank Account
let netamount : number = 0;
for (let z =0; z <= transaction.length-1;z++){
    netamount += transaction[z];
}
console.log(`netamount in bank account = ${netamount}`);

/*If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions*/
let suspicioustransaction : number = 0;
for(let a = 0; a <= transaction.length-1; a++){
    if((transaction[a] > 10000) || (transaction[a] < -10000)){
        suspicioustransaction++;
    }
    
}
console.log(`Suspicious credit/ debit Transaction with Amount`);
console.log(`Total number of suspicious credit/ debit Transaction with Amount= ${suspicioustransaction}`)





    