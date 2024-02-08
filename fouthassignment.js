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
    }
}
checkName("Salman");
checkName("RAFEE")
checkName("Jhankar")
checkName(199)
checkName(["Rashed"])