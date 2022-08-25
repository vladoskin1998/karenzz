import Balance from './balance.model.js'
import mongoose from 'mongoose';
import { NEW_USER, BALANCE_NEGATIVE } from '../config/config.js'

class TransactionService {

    async getBalance({ id }) {
        const balance = await Balance.findById(id)

        if (!balance) {
            return 'Balance not found!'
        }
        return { money: balance?.balance }
    }

    async getHistory({ id }) {
        const balance = await Balance.findById(id)

        if (!balance) {
            return 'Balance not found!'
        }

        return balance?.history
    }


    async changeBalance({ id, money }) {

        const balance = await Balance.findById(id)

        if (balance && Number(balance.balance) + money < 0) {
            return 'Balance is negative'
        }

        if (!balance && money < 0) {
            return 'New user can`t have negative balance'
        }

        const updateBalance = await Balance.findOneAndUpdate(
            { _id: id },
            { $inc: { balance: money }, $push: { history: { transaction: money } } },
            { new: true, upsert: true }
        )

        return updateBalance
    }


    async remittance({ idFrom, idTo, money }) {

        const balanceFrom = await this.changeBalance({ id: idFrom, money: money * -1 })

        if (typeof balanceFrom === 'string') {
            return balanceFrom
        }

        const balanceTo = await this.changeBalance({ id: idTo, money })

        return {balanceFrom, balanceTo}

    }
}

export default new TransactionService()