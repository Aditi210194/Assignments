/*let customerName : "string" = "John Doe";
let creditScore : number = 720;
let income : number =  55000.0;
let isEmployed : boolean= true;
let debtToIncomeRatio : number = 35.0;*/

function loan (customerName: string ,creditScore : number,income : number,isEmployed : boolean,debtToIncomeRatio : number){

if (creditScore > 750) {
    return"Loan approved";
}
else if ((creditScore > 650 ) && (creditScore  < 750))
{
    console.log("addditional checks are performed");
    if (income > 50000) {
        console.log("Loan Considered")
        
        if (isEmployed === true) {
            console.log(`customer is employed and the custome name is ${customerName}`)

            if (debtToIncomeRatio < 40 ) {
                return "Loan approved";
            }
            else{
                return "Loan Denied because high DTI";
            }

        }
        else {
           return "loan denied as customer is unemployed";
        }

    }
            
    else { 
        return "Loan Denied bcause income is less";
    }

}

else {
    return "Loan Denied";

}

}

console.log(loan("John Doe",782,56000.0,true,70.0));