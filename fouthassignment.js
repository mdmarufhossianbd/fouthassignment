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