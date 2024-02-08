// Problem 1
function calculateMoney(ticketSale) {
    if (0 >= ticketSale){
        const message = "Please Input Valid Number"
        return message;
    }
    else{
        const totalSale  = 120* ticketSale;
        const guard = 500;
        const stafCost = 8 * 50;
        const totalCost = guard + stafCost;
        const income = totalSale - totalCost;
        return income;        
    }    
}
calculateMoney(10);
calculateMoney(1055);
calculateMoney(93);
calculateMoney(0);

// Problem 2

function checkName(name) {
    if (typeof name !== 'string') {
        const errorMessage = "invalid";
        return errorMessage;
    };
    const lastLetter = name.slice(-1).toLowerCase();    
    const lastLetters = ['y', 'i', 'e', 'o', 'u', 'w'];
    if (lastLetters.includes(lastLetter)) {
        const message = "Good Name";
        return message;
    }
    else {
        const message = "Bad Name";
        return message;
    };
};
checkName("Salman");
checkName("RAFEE");
checkName("Jhankar");
checkName(199);
checkName(["Rashed"]);

// Problem 3
function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        const errorMessage = "Invalid Array";
        return errorMessage;
    };
    const numberchecker = array.filter(item => typeof item === 'number' && !isNaN(item));   
    return numberchecker;
};
deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]);
deleteInvalids(["1" , {num:2} , NaN ]);
deleteInvalids([ 1 , 2 , -3 ]);
deleteInvalids({num: [ 1 , 2 , 3 ]});

// problem 4

// problem 5
function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input";
    };
    let totalIncome = 0;
    let totalTax = 0;
    for (let i = 0; i < arr.length; i++) {
        totalIncome = totalIncome + arr[i];
        if (arr[i] >= 3000) {
            const tax = arr[i] * 20 /100;
            totalTax = totalTax + tax;
        }
    }
    const netIncome = totalIncome - totalTax;
    const savings = netIncome - livingCost;
    if (savings >= 0) {
        return savings;
    } else {
        return "earn more";
    };
};
monthlySavings([1000, 2000, 3000], 5400);
monthlySavings([ 1000 , 2000 , 2500 ] , 5000);
monthlySavings([ 900 , 2700 , 3400] , 10000);
monthlySavings(100, [ 900 , 2700 , 3400]);
