import Balance from './balance.model.js'
import mongoose from 'mongoose';

class TransactionService {

    async getBalance({ id }) {
        const balance = await Balance.findById(id)
        return balance.balance
    }

    async getHistory({ id }) {
        const balance = await Balance.findById(id)
        return balance.history
    }


    async changeBalance({ id, money }) {

        console.log("changeBalance---->", id, money);


        if (!mongoose.Types.ObjectId.isValid(id)) {
            return 'NOT VALID TOKEN'
        }



        const balance = await Balance.findById(id)
    

        if (!balance) {
            const newBalance = await new Balance({
                balance: Number(money),
                history: [{ transaction: Number(money) }]
            })
            await newBalance.save()
            return "NEW USER"
        }

        if (balance.balance + money < 0) {
            return 'Balance is negative'
        }

        await balance.updateOne(
            { $inc: { balance: Number(money) }, $push: { history: { transaction: Number(money) } } }
        )

        return "OK"
    }


    async remittance({ idFrom, idTo, money }) {

        console.log(idFrom, idTo, money);


        const negativeMoney = await this.changeBalance({ id: idFrom, money: money * -1 })

        if (negativeMoney !== 'OK') {
            return negativeMoney
        }

        await this.changeBalance({ id: idTo, money })

        return 'OK'

    }
}

export default new TransactionService()