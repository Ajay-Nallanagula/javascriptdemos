
function notify(msg) {
    console.log(msg)
}

class SpendExpenditure {
    constructor(maxLimit) {
        this.maxLimit = maxLimit
        this.dailyExpense = 0
    }

    sumUpExpenditure(amtSpent) {
        this.dailyExpense = this.dailyExpense + amtSpent;
        const isUserLimitExceeded = this.dailyExpense > this.maxLimit
        const limitMsg = `TotalAmt : ${this.dailyExpense} ,${isUserLimitExceeded ? 'OUT OF LIMIT' : 'IN LIMIT'}`
        notify(limitMsg)
    }
}

const exp = new SpendExpenditure(1000)
exp.sumUpExpenditure(500);
exp.sumUpExpenditure(700);