import Balance from './balance.model.js'
import mongoose from 'mongoose';

class TransactionService {

    async getBalance({id}) {
        const balance = await Balance.findById(id)
        return balance.balance
    }

    async getHistory({id}) {
        const balance = await Balance.findById(id)
        return balance.history
    }


    async changeBalance({ id, money }) {

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return 'NOT VALID TOKEN'
        }

        console.log(id, money);

        const balance = await Balance.findById(id)
        const moneyNumber = Number(money)

        if (!balance) {
            const newBalance = await new Balance({
                balance: moneyNumber,
                history: [{transaction: moneyNumber}]
            })
            await newBalance.save()
            return "NEW USER"
        }

        if(balance.balance + sum < 0){
            return 'Balance is negative'
        }

        await balance.updateOne(
            {  $inc: {balance: moneyNumber}, $push: { history: {transaction: moneyNumber} }}
        )

        return "OK"
    }


    async remittance({idFrom, idTo, money}) {

        const moneyNumber = Number(money)
        
        const negativeMoney = await this.changeBalance(idFrom, moneyNumber)

        if(negativeMoney !== 'OK'){
            return negativeMoney
        }
        
        await this.changeBalance(idTo, moneyNumber)

        return 'OK'

    }
}

export default new TransactionService()